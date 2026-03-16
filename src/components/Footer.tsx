import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-background py-10 mt-20">
            <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-muted text-sm">
                    © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href={portfolioData.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted hover:text-primary transition-colors"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href={portfolioData.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted hover:text-primary transition-colors"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href={portfolioData.socials.email}
                        className="text-muted hover:text-primary transition-colors"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
