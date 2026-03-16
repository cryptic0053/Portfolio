"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Download, ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { useEffect, useState } from "react";

export default function Hero() {
    const [titleIndex, setTitleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentTitle = portfolioData.titles[titleIndex];
        const typingSpeed = isDeleting ? 45 : 90;

        const timeout = setTimeout(() => {
            if (!isDeleting && displayText === currentTitle) {
                setTimeout(() => setIsDeleting(true), 1400);
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setTitleIndex((prev) => (prev + 1) % portfolioData.titles.length);
            } else {
                setDisplayText(
                    currentTitle.substring(0, displayText.length + (isDeleting ? -1 : 1))
                );
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, titleIndex]);

    return (
        <section
            id="about"
            className="min-h-screen flex items-center pt-20 relative overflow-hidden"
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -z-10 opacity-50"></div>

            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-accent font-medium mb-5 flex items-center gap-2"
                    >
                        <span className="h-1 w-8 bg-accent rounded-full"></span>
                        {portfolioData.role}
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-5 text-primary leading-tight">
                        {portfolioData.name}
                    </h1>

                    <div className="text-2xl md:text-4xl font-semibold text-muted min-h-[3rem] md:min-h-[3.5rem] mb-6 flex flex-wrap items-center">
                        <span>I am a</span>
                        <span className="text-primary ml-2 min-w-[180px] md:min-w-[240px] inline-flex items-center">
                            {displayText}
                            <span className="animate-pulse w-[2px] h-7 md:h-8 bg-accent ml-1"></span>
                        </span>
                    </div>

                    <p className="text-lg md:text-xl text-muted/80 leading-relaxed mb-10 max-w-2xl">
                        {portfolioData.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href={portfolioData.socials.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="p-3 rounded-full bg-surface border border-white/5 hover:border-accent/50 hover:bg-white/5 transition-all duration-300 group hover:-translate-y-0.5"
                        >
                            <Github
                                className="text-muted group-hover:text-primary transition-colors"
                                size={22}
                            />
                        </a>

                        <a
                            href={portfolioData.socials.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="p-3 rounded-full bg-surface border border-white/5 hover:border-accent/50 hover:bg-white/5 transition-all duration-300 group hover:-translate-y-0.5"
                        >
                            <Linkedin
                                className="text-muted group-hover:text-primary transition-colors"
                                size={22}
                            />
                        </a>

                        <a
                            href={portfolioData.socials.cv}
                            className="ml-0 sm:ml-2 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-neutral-900 font-semibold hover:bg-accent/90 transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-lg shadow-accent/20"
                        >
                            Download CV
                            <Download size={18} />
                        </a>

                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-surface text-primary font-medium hover:border-accent/40 hover:bg-white/5 transition-all duration-300"
                        >
                            View Projects
                            <ArrowRight size={18} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}