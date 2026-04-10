import type { Metadata } from "next";
import { Space_Grotesk, Rajdhani } from "next/font/google";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Alg Group",
  description: "A Forward-Thinking Conglomerate & AI Consulting Firm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${rajdhani.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-[#030305] to-[#030305] relative">
        <div className="noise-overlay" />
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
