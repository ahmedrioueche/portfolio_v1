// layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 

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
      <body className={`${inter.className} text-white max-w-full`}>
        <div className="scroll-container">
          <div className="area">
            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <Navbar />
          <main className="w-full py-12">
            {children}
          </main>
          <Footer />
        </div>  
      </body>
    </html>
  );
}
