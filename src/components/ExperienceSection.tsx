"use client";

import { motion } from "framer-motion";
import { Award, CalendarDays, Building2 } from "lucide-react";
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
                        Leadership roles, academic recognition, and professional development milestones.
                    </p>
                </motion.div>

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
                                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-4">
                                    <div className="space-y-2">
                                        <h4 className="text-xl md:text-2xl font-bold text-primary">
                                            {exp.title}
                                        </h4>

                                        <div className="flex items-center gap-2 text-accent font-medium">
                                            <Building2 size={16} className="shrink-0" />
                                            <span>{exp.organization}</span>
                                        </div>
                                    </div>

                                    <div className="inline-flex items-center gap-2 text-xs font-medium px-3 py-2 rounded-full bg-surface/80 text-muted/90 border border-white/5 whitespace-nowrap self-start">
                                        <CalendarDays size={14} className="text-accent shrink-0" />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>

                                <p className="text-muted leading-relaxed text-sm md:text-base">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}