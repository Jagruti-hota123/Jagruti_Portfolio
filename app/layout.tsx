import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ResponsiveNav } from "@/components/Home/Navbar";
import AnimatedCursor from "react-animated-cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body className={inter.className}>
        <div className="hidden md:block">
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={2}
            outerScale={1.5}
            outerAlpha={0.5}
            innerStyle={{ backgroundColor: "white" }}
            outerStyle={{ border: "3px solid white" }}
          />
        </div>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}