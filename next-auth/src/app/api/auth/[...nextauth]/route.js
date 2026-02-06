import { dbConnection } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const userList = [
  { name: "ali", password: "123" },
  { name: "alima", password: "1234" },
  { name: "alim", password: "12345" },
];

export const authOptions = {
  // Configure one or more authentication providers

  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email", placeholder: "enter email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "enter password",
        },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        const user = await dbConnection("users").findOne({ email });
        if (!user) {
          return null;
        }
        const isPasswordOk = await bcrypt.compare(password, user?.password);
        if (isPasswordOk) {
          return user;
        }
        // my logic
        return null;
      },
    }),
    // google Oauth
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // github
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        console.log("user credential", {
          user,
          account,
          profile,
          email,
          credentials,
        });
        const payload = {
          ...user,
          provider: account.provider,
          providerId: account.providerAccountId,
          role: "user",
          createdAt: new Date().toISOString(),
        };
        if (!user?.email) {
          return false;
        }
        const isExist = await dbConnection("users").findOne({
          email: user.email,
        });
        if (isExist) {
          console.log("user already exists");
        }
        if (!isExist) {
          const result = await dbConnection("users").insertOne(payload);
        }
        return true;
      } catch (error) {
        return false;
      }
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl;
    // },
    async session({ session, token, user }) {
      if (token) {
        session.role = token.role;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
