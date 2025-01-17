import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Diesta IITH",
    template: "%s | Diesta IITH",
  },
  description: "Interdepartmental competition of IITH",
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
