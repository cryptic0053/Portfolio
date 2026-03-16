import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-background py-10 mt-20">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-muted">
                            © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
                        </p>
                        <p className="text-xs text-muted/70 mt-1">
                            Built with Next.js, TypeScript, and Tailwind CSS.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <a
                            href={portfolioData.socials.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="w-10 h-10 rounded-full bg-surface/70 border border-white/5 flex items-center justify-center text-muted hover:text-primary hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <Github size={18} />
                        </a>

                        <a
                            href={portfolioData.socials.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="w-10 h-10 rounded-full bg-surface/70 border border-white/5 flex items-center justify-center text-muted hover:text-primary hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <Linkedin size={18} />
                        </a>

                        <a
                            href={portfolioData.socials.email}
                            aria-label="Email"
                            className="w-10 h-10 rounded-full bg-surface/70 border border-white/5 flex items-center justify-center text-muted hover:text-primary hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <Mail size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}