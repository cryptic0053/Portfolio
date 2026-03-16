"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { skills } from "@/data/portfolio";

export default function SkillsBento() {
    return (
        <section id="skills" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                        <Cpu className="text-accent" size={32} />
                        Technical Skills
                    </h2>
                    <p className="text-muted max-w-2xl text-lg">
                        Core technologies and tools used across software engineering, DevOps, cloud deployment, and machine learning projects.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {skills.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20, scale: 0.97 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="glass rounded-2xl p-6 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(16,185,129,0.08)] transition-all duration-300"
                        >
                            <div className="absolute top-0 right-0 w-28 h-28 bg-accent/5 rounded-full blur-[50px] group-hover:bg-accent/10 transition-colors"></div>

                            <h3 className="text-xl font-bold text-primary mb-5 relative z-10">
                                {category.name}
                            </h3>

                            <div className="flex flex-wrap gap-2.5 relative z-10">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-sm font-medium rounded-lg bg-surface/60 border border-white/5 text-muted hover:text-primary hover:border-accent/30 hover:bg-accent/5 transition-all cursor-default"
                                    >
                                        {skill}
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