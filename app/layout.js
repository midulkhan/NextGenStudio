import { Geist, Geist_Mono, Titillium_Web } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const titilium = Titillium_Web({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${titilium.className} antialiased bg-[#000000]! `}
      >
        {children}
      </body>
    </html>
  );
}
