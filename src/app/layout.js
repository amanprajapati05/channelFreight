import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Overlay from "../app/components/Overlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Channel Freight",
  description: "Channel Freight",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Overlay/>
        {children}
      </body>
    </html>
  );
}
