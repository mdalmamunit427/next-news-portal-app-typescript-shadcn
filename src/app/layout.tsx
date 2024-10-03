import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/themeContext";
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: "Next News Portal",
  description: "Learn the next js from scratch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={inter.className}
      >
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
