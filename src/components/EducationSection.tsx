"use client";

import { motion } from "framer-motion";
import { BookOpen, CalendarDays, GraduationCap } from "lucide-react";
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
                            <GraduationCap size={20} className="text-accent" />
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
                                <h4 className="text-xl md:text-2xl font-bold text-primary mb-2">
                                    {edu.degree}
                                </h4>

                                <p className="text-accent font-medium mb-5">
                                    {edu.institution}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                    <div className="flex items-center gap-3 bg-surface/50 px-4 py-3 rounded-lg text-muted">
                                        <CalendarDays size={16} className="text-accent shrink-0" />
                                        <span>{edu.period}</span>
                                    </div>

                                    <div className="flex items-center gap-3 bg-surface/50 px-4 py-3 rounded-lg text-primary font-semibold">
                                        <span className="w-2 h-2 rounded-full bg-accent shrink-0"></span>
                                        <span>CGPA: {edu.cgpa}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}