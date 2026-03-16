"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import { researchPapers } from "@/data/portfolio";

export default function ResearchSection() {
    return (
        <section id="research" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                        <BookOpen className="text-accent" size={32} />
                        Publications & Research
                    </h2>
                    <p className="text-muted max-w-2xl text-lg">
                        A selection of my academic work focused on Explainable AI, Machine Learning, and scalable algorithms.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-6">
                    {researchPapers.map((paper, index) => (
                        <motion.div
                            key={paper.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-6 md:p-8 rounded-2xl hover:border-accent/30 transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-accent/50 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>

                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                <h3 className="text-xl md:text-2xl font-bold text-primary group-hover:text-accent transition-colors max-w-3xl">
                                    {paper.title}
                                </h3>
                                <span className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium border ${paper.status === "Published"
                                        ? "bg-accent/10 text-accent border-accent/20"
                                        : "bg-surface/50 text-muted border-white/10"
                                    }`}>
                                    {paper.status}
                                </span>
                            </div>

                            <p className="text-muted mb-6 leading-relaxed">
                                {paper.abstract}
                            </p>

                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex flex-wrap gap-2">
                                    {paper.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-surface text-muted border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={paper.link}
                                    className="flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                                >
                                    View Paper
                                    <ExternalLink size={16} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
