import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Photobooth",
  description:
    "Photobooth is a nextjs application built with all latest features of nextjs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="container my-4 lg:my-8">{children}</div>
        <div id="modal-root-content" />
      </body>
    </html>
  );
}
