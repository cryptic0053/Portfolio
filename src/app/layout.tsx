import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Anirban Argha | Developer Portfolio",
    description: "Portfolio of Anirban Argha - AI Researcher, Full-Stack Engineer, and DevOps Enthusiast.",
    keywords: ["Anirban Argha", "AI Researcher", "Full Stack Developer", "DevOps", "Portfolio", "KUET"],
    openGraph: {
        title: "Anirban Argha | Developer Portfolio",
        description: "Portfolio of Anirban Argha - AI Researcher, Full-Stack Engineer, and DevOps Enthusiast.",
        url: "https://anirban-argha.vercel.app",
        siteName: "Anirban Argha Portfolio",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Anirban Argha | Developer Portfolio",
        description: "Portfolio of Anirban Argha - AI Researcher, Full-Stack Engineer, and DevOps Enthusiast.",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} font-sans bg-background text-primary antialiased selection:bg-accent/30 selection:text-white pb-safe min-h-screen flex flex-col`}>
                <Navbar />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
