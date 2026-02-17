import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StacksLaunch - Decentralized Crowdfunding",
  description: "Secure, transparent, and trustless fundraising on the Stacks blockchain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-mono bg-terminal-black text-terminal-text`}>
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-terminal-gray p-4 flex justify-between items-center bg-terminal-black/80 backdrop-blur sticky top-0 z-50">
            <h1 className="text-xl font-bold text-stacks-orange tracking-tighter">StacksLaunch_</h1>
            <nav className="flex gap-4 text-sm">
              <a href="#" className="hover:text-stacks-orange">Discover</a>
              <a href="#" className="hover:text-stacks-orange">Start</a>
              <a href="#" className="hover:text-stacks-orange">Dashboard</a>
            </nav>
          </header>
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="border-t border-terminal-gray p-6 text-center text-xs text-gray-500">
            &copy; 2026 StacksLaunch Protocol. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
