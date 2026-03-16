"use client";

import { motion } from "framer-motion";
import { Code, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 relative bg-surface/30">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                        <Code className="text-accent" size={32} />
                        Engineering Projects
                    </h2>
                    <p className="text-muted max-w-2xl text-lg">
                        Showcasing scalable architectures, robust backend systems, and modern full-stack web applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass rounded-2xl p-6 flex flex-col h-full hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center border border-white/5 group-hover:border-accent/30 group-hover:bg-accent/10 transition-colors">
                                    <Code className="text-muted group-hover:text-accent transition-colors" size={20} />
                                </div>
                                <div className="flex items-center gap-3">
                                    {project.githubLink && (
                                        <a href={project.githubLink} className="text-muted hover:text-primary transition-colors">
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.liveLink && (
                                        <a href={project.liveLink} className="text-muted hover:text-accent transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-muted text-sm mb-6 flex-1 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.techBadges.map((tech) => (
                                    <span key={tech} className="text-[11px] font-medium px-2 py-1 rounded bg-surface/50 text-muted/80 border border-white/5">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
