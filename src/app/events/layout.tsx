import "../globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" bg-gray-900 text-gray-100 text-2xl  max-md:text-xl">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
