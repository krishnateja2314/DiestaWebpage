import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      <body className=" bg-gray-900 text-gray-100 text-2xl  max-md:text-xl">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
