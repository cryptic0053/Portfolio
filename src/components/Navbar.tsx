"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
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
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "py-3 glass shadow-lg shadow-black/20 backdrop-blur-xl"
                    : "py-5 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
                <a
                    href="#about"
                    className="text-lg md:text-xl font-bold tracking-tight text-primary hover:text-accent transition-colors"
                >
                    {portfolioData.name}
                </a>

                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-6 text-sm font-medium text-muted">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="hover:text-accent transition-colors"
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
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-surface border border-white/10 text-primary hover:border-accent/50 hover:bg-white/5 transition-all duration-300 group"
                    >
                        Download CV
                        <Download
                            size={14}
                            className="group-hover:-translate-y-0.5 transition-transform"
                        />
                    </a>
                </nav>

                <button
                    className="md:hidden text-primary p-2 rounded-lg hover:bg-surface/60 transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden absolute top-full left-0 right-0 glass border-t border-white/5 py-5 px-6 shadow-xl"
                    >
                        <ul className="flex flex-col gap-2 text-sm font-medium text-muted">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block rounded-lg px-3 py-3 hover:bg-surface/70 hover:text-accent transition-all"
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
                            className="mt-4 inline-flex w-full items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-xl bg-accent text-neutral-900 hover:bg-accent/90 transition-all"
                        >
                            Download CV
                            <Download size={14} />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}