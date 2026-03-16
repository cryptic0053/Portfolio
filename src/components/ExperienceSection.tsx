"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { experiences } from "@/data/portfolio";

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-24 relative bg-background">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                        <Award className="text-accent" size={32} />
                        Experience & Achievements
                    </h2>
                    <p className="text-muted text-lg border-l-2 border-accent/50 pl-4 py-1">
                        My professional timeline and key accomplishments.
                    </p>
                </motion.div>

                <div>
                    <div className="grid gap-6">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-300 relative overflow-hidden group"
                            >
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-accent/20 group-hover:w-1.5 transition-all"></div>
                                <div className="ml-2">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                                        <div>
                                            <h4 className="text-xl font-bold text-primary mb-1">{exp.title}</h4>
                                            <p className="text-accent font-medium">{exp.organization}</p>
                                        </div>
                                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-surface/80 text-muted/90 border border-white/5 whitespace-nowrap">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-muted leading-relaxed text-sm">
                                        {exp.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
