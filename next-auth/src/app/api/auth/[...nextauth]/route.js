import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials;
        const user = userList.find((u) => u.name == username);
        if (!user) {
          return null;
        }
        const isPasswordOk = user.password == password;
        if (isPasswordOk) {
          return user;
        }
        // my logic
        return null;
      },
    }),
    // ...add more providers here
  ],
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
