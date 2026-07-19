"use client";

import React from "react";
import { motion } from "framer-motion";

import { Rocket, CheckCircle, Code2, Star } from "lucide-react";

export default function Stats() {
    const cards = [
        {
            icon: <Rocket className="w-6 h-6 sm:w-7 sm:h-7 text-[#7C3AED]" />,
            iconBg: "bg-[#7C3AED]/10",
            title: "15+",
            subtitle: "Projects Completed",
        },
        {
            icon: <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-[#7C3AED]" />,
            iconBg: "bg-[#7C3AED]/10",
            title: "100%",
            subtitle: "Responsive Design",
        },
        {
            icon: <Code2 className="w-6 h-6 sm:w-7 sm:h-7 text-[#7C3AED]" />,
            iconBg: "bg-[#7C3AED]/10",
            title: "Clean",
            subtitle: "Code Structure",
        },
        {
            icon: <Star className="w-6 h-6 sm:w-7 sm:h-7 text-[#7C3AED]" />,
            iconBg: "bg-[#7C3AED]/10",
            title: "Available",
            subtitle: "For Freelance",
        },
    ];

    return (
        <section id="stat" className="w-full bg-[#09090F] py-10 sm:py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}

                            transition={{
                                opacity: {
                                    duration: 0.5,
                                    delay: i * 0.1,
                                },
                                y: {
                                    duration: 0.5,
                                    delay: i * 0.1,
                                },
                                layout: {
                                    duration: 0.2,
                                },
                            }}

                            whileHover={{
                                y: -6,
                                scale: 1.03,
                            }}

                            className="group h-full"
                        >
                            <div className="flex h-full items-center gap-4 rounded-2xl border cursor-pointer border-white/10 bg-[#11111A] p-4 sm:p-5 transition-all duration-200 group-hover:border-[#7C3AED]/50 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.18)]">
                                <div
                                    className={`flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl ${card.iconBg} transition-all duration-200 group-hover:bg-[#7C3AED]/20`}
                                >
                                    {card.icon}
                                </div>

                                <div className="min-w-0">
                                    <h3 className="text-lg sm:text-xl font-bold text-white">
                                        {card.title}
                                    </h3>

                                    <p className="mt-1 text-xs sm:text-sm text-[#A0A0B8]">
                                        {card.subtitle}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}