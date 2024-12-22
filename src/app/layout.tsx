import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Diesta",
  description: "Track all the scores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-primary text-white text-2xl  max-md:text-xl">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
