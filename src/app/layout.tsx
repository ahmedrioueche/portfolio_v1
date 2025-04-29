import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { SettingsProvider } from "@/context/SettingsContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmed's Portfolio",
  description: "portfolio to get a job",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/x-icon",
      },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
  manifest: "/site.webmanifest",
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
        <SettingsProvider>
          <Toaster position={"top-right"} />
          <div className="navContainer">
            <Navbar />
          </div>
          <div className="area scrollbar-hide font-stix md:px-32 px-6">
            <main className="w-full py-12">{children}</main>
            <Footer />
          </div>
        </SettingsProvider>
      </body>
    </html>
  );
}
