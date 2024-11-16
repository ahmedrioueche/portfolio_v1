import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmed's Portfolio",
  description: "portfolio to get a job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden font-stix scrollbar-hide">
      <body
        className={`${inter.className} text-white max-w-full scrollbar-hide`}
      >
        <div className="navContainer">
          <Navbar />
        </div>
        <div className="area scrollbar-hide font-stix">
          <main className="w-full py-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
