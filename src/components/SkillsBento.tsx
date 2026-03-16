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
                        Technical Arsenal
                    </h2>
                    <p className="text-muted max-w-2xl text-lg">
                        The core technologies and tools I utilize to build intelligent, scalable systems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {skills.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`glass rounded-2xl p-6 relative overflow-hidden group ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                                } ${index === 3 ? "lg:col-span-2" : ""}`}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[50px] group-hover:bg-accent/10 transition-colors"></div>

                            <h3 className={`font-bold text-primary mb-6 relative z-10 ${index === 0 ? "text-2xl" : "text-xl"
                                }`}>
                                {category.name}
                            </h3>

                            <div className="flex flex-wrap gap-3 relative z-10">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className={`font-medium rounded-lg border flex items-center justify-center transition-all cursor-default
                      ${index === 0
                                                ? "px-4 py-2 bg-surface border-white/10 text-primary hover:border-accent/50 hover:bg-accent/5"
                                                : "px-3 py-1.5 text-sm bg-surface/50 border-transparent text-muted hover:text-primary hover:bg-surface"
                                            }`
                                        }
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
