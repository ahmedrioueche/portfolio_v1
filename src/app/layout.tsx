import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/Navbar'; // Adjust path as necessary
import Footer from './components/Footer'; // Adjust path as necessary
import Banner from "./components/Banner";

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
    <html lang="en">
      <body className={`${inter.className} text-white`}>
        <Navbar />
        <main className="w-full py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
