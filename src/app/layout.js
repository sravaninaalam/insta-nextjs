import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SessionWraper from "@/components/SessionWraper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Instagram clone NextJs",
  description: "Instagram like app created with next Js default command ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWraper>
      <body className={inter.className}>
        <Header/>
        {children}</body>
        </SessionWraper>
    </html>
  );
}
