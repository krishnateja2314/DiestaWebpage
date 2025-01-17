import "../globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" bg-gray-900 text-gray-100 text-2xl  max-md:text-xl">
      {children}
    </div>
  );
}
