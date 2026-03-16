"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Education", href: "#education" },
        { name: "Research", href: "#research" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4 glass shadow-lg shadow-black/20" : "py-6 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight">
                    Anirban<span className="text-accent">.</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-6 text-sm font-medium text-muted">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="hover:text-primary transition-colors hover:text-accent"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                        href={portfolioData.socials.cv}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-surface border border-white/10 hover:bg-white/5 transition-all text-primary hover:border-accent/50 group"
                    >
                        Download CV
                        <Download size={14} className="group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-primary"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-white/5 py-4 px-6 flex flex-col gap-4 shadow-xl">
                    <ul className="flex flex-col gap-4 text-sm font-medium text-muted">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block hover:text-accent transition-colors py-2"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                        href={portfolioData.socials.cv}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-lg bg-accent text-neutral-900 transition-all"
                    >
                        Download CV
                        <Download size={14} />
                    </a>
                </div>
            )}
        </motion.header>
    );
}
