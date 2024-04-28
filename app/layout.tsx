import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./componets/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wind BnB",
  description: "Wind BnB is a platform for booking wind-powered accomodations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en">
  <body className={inter.className}>
      <Navbar />      
      <div className="pt-32">
        {children}
      </div>
</body>
</html>
  );
}
