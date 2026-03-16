"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { education } from "@/data/portfolio";

export default function EducationSection() {
    return (
        <section id="education" className="py-24 relative bg-background">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                        <BookOpen className="text-accent" size={32} />
                        Education
                    </h2>
                    <p className="text-muted text-lg border-l-2 border-accent/50 pl-4 py-1">
                        My academic background.
                    </p>
                </motion.div>

                <div>
                    <h3 className="text-2xl font-bold mb-8 text-primary flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center border border-white/5">
                            <BookOpen size={20} className="text-accent" />
                        </div>
                        Academic Journey
                    </h3>
                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass rounded-2xl p-6 border-l-4 border-l-accent hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-300"
                            >
                                <h4 className="text-xl font-bold text-primary mb-1">{edu.degree}</h4>
                                <p className="text-accent font-medium mb-4">{edu.institution}</p>
                                <div className="flex flex-wrap justify-between items-center text-sm text-muted bg-surface/50 p-3 rounded-lg">
                                    <span className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-accent/50"></span>
                                        {edu.period}
                                    </span>
                                    <span className="font-semibold text-primary">CGPA: {edu.cgpa}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
