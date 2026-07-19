"use client";

import { motion } from "framer-motion";
import {
    FaGithub,
    FaLinkedinIn,
    FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ArrowRight } from "lucide-react";

const contacts = [
    {
        title: "Email",
        value: "ushna2922@gmail.com",
        icon: MdEmail,
        color: "#A855F7",
        href: "mailto:ushna2922@gmail.com",
    },
    {
        title: "LinkedIn",
        value: "linkedin.com/in/ushnafatima",
        icon: FaLinkedinIn,
        color: "#0A66C2",
        href: "https://linkedin.com/in/ushnafatima",
    },
    {
        title: "GitHub",
        value: "github.com/ushna2922-lang",
        icon: FaGithub,
        color: "#ffffff",
        href: "https://github.com/ushna2922-lang",
    },
    {
        title: "WhatsApp",
        value: "+92 321 3667355",
        icon: FaWhatsapp,
        color: "#25D366",
        href: "https://wa.me/923213667355",
    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="scroll-mt-28 relative w-full py-24 bg-[#09090F] overflow-hidden"
        >
            {/* Background Glows */}
            <div
                className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#7C3AED] rounded-full"
                style={{ filter: "blur(170px)", opacity: 0.12 }}
            />

            <div
                className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#06B6FF] rounded-full"
                style={{ filter: "blur(170px)", opacity: 0.08 }}
            />

            <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center">
                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col"
                >
                    <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#7C3AED]">
                        LET'S CONNECT
                    </span>

                    <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight text-white">
                        Let's Build Something
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#06B6FF]">
                            Amazing Together
                        </span>
                    </h2>

                    <p className="mt-6 max-w-md text-[#A0A0B8] leading-relaxed">
                        Have a project in mind? I'd love to hear your ideas and help turn
                        them into a premium digital experience.
                    </p>

                    {/* Availability */}
                    <div className="mt-8 flex items-center gap-3">
                        <span className="relative flex h-3 w-3">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400"></span>
                        </span>

                        <span className="text-sm text-white font-medium">
                            Available for Freelance
                        </span>
                    </div>

                    {/* CTA */}
                    <a
                        href="https://wa.me/923213667355?text=Hi%20Ushna,%20I%20would%20like%20to%20discuss%20a%20project."
                        target="_blank"
                        rel="noopener noreferrer"

                        className="group mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B6FF] px-8 py-4 font-semibold text-white shadow-[0_0_35px_rgba(124,58,237,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_55px_rgba(124,58,237,0.6)]"
                    >
                        Start Your Project
                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </a>
                </motion.div>

                {/* Right */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-5 w-full"
                >
                    {contacts.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.a
                                key={item.title}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -4, scale: 1.02 }}
                                transition={{ duration: 0.25 }}
                                className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#11111A] p-4 sm:p-6"
                            >
                                {/* Glow */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: `radial-gradient(circle at left, ${item.color}20 0%, transparent 75%)`,
                                    }}
                                />

                                {/* Border Glow */}
                                <div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        boxShadow: `0 0 0 1px ${item.color}80`,
                                    }}
                                />

                                <div className="relative z-10 flex items-center gap-4 min-w-0">
                                    <div
                                        className="flex h-14 w-14 items-center justify-center rounded-xl"
                                        style={{
                                            backgroundColor: `${item.color}15`,
                                        }}
                                    >
                                        <Icon
                                            size={26}
                                            style={{ color: item.color }}
                                            className="transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>

                                    <div className="min-w-0">
                                        <h3 className="text-lg font-semibold text-white">
                                            {item.title}
                                        </h3>

                                        <p className="mt-1 text-sm text-[#A0A0B8] break-words">
                                            {item.value}
                                        </p>
                                    </div>
                                </div>
                            </motion.a>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}