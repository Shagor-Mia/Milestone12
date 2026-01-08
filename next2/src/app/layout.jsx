import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CartProvider from "@/context/CartProvider";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "YumYum",
    template: "%s | YumYum",
  },
  description: "best fast food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header className="px-5 py-2 flex justify-between items-center gap-5 bg-stone-800">
          <Link href={"/"}>
            {/* <img src="./food.png" className="w-[100px] rounded-full" alt="" /> */}
            <Image
              src="/food.png"
              width={100}
              height={100}
              className="rounded-full"
              alt="YumYum Logo"
            />
          </Link>
          <div className="space-x-5">
            <Link href={"/foods"} className="btn">
              Food
            </Link>
            <Link href={"/reviews"} className="btn">
              Review
            </Link>
            <Link href={"/feedback"} className="btn">
              Feedback
            </Link>
          </div>
        </header>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
