import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition"; // Import PageTransition

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JGJ Portfolio - Web Developer & Designer", // Updated title
  description: "The professional portfolio of JGJ, a creative Web Developer and Designer specializing in modern, interactive web experiences.", // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white antialiased`}> {/* Added gradient and antialiasing */}
        <Navbar />
        <main className="flex-grow container mx-auto px-4 pt-24 pb-8 sm:px-6 lg:px-8"> {/* Increased top padding for taller navbar, added responsive padding */}
          <PageTransition>{children}</PageTransition> {/* Wrap children with PageTransition */}
        </main>
        <Footer />
      </body>
    </html>
  );
}
