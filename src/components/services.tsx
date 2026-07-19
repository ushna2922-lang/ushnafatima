"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Globe,
  Utensils,
  User,
  Layout,
  RefreshCw,
  Wrench,
  HeartPulse,
} from "lucide-react";

/* ── Service data ───────────────────────────────────────────────────── */
const services = [
  {
    icon: <Rocket className="w-7 h-7" />,
    color: "#7C3AED",
    glow: "rgba(124,58,237,0.35)",
    title: "Landing Pages",
    description:
      "High-converting landing pages designed to capture leads, promote offers, and drive action for your business.",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    color: "#06B6FF",
    glow: "rgba(6,182,255,0.35)",
    title: "Business Websites",
    description:
      "Professional, full-featured websites that build credibility and help your business stand out online.",
  },
  {
    icon: <Utensils className="w-7 h-7" />,
    color: "#F472B6",
    glow: "rgba(244,114,182,0.35)",
    title: "Restaurant Websites",
    description:
      "Elegant, appetising websites for restaurants, cafés, and food brands — with menus, booking & more.",
  },
  {
    icon: <User className="w-7 h-7" />,
    color: "#34D399",
    glow: "rgba(52,211,153,0.35)",
    title: "Portfolio Websites",
    description:
      "Stunning personal portfolios for developers, designers, photographers, and freelancers to showcase their work.",
  },
  {
    icon: <Layout className="w-7 h-7" />,
    color: "#FBBF24",
    glow: "rgba(251,191,36,0.35)",
    title: "UI Development",
    description:
      "Pixel-perfect, responsive UI implementation from Figma or any design file using React, Next.js & Tailwind.",
  },
  {
    icon: <RefreshCw className="w-7 h-7" />,
    color: "#A78BFA",
    glow: "rgba(167,139,250,0.35)",
    title: "Website Redesign",
    description:
      "Breathe new life into your outdated website with a modern, polished redesign that keeps users engaged.",
  },
  {
    icon: <HeartPulse className="w-7 h-7" />,
    color: "#F43F5E",
    glow: "rgba(244,63,94,0.35)",
    title: "Clinic & Medical Websites",
    description:
      "Clean, trustworthy websites for clinics, doctors, and healthcare providers — with appointment booking & service info.",
  },
  {
    icon: <Wrench className="w-7 h-7" />,
    color: "#38BDF8",
    glow: "rgba(56,189,248,0.35)",
    title: "Maintenance",
    description:
      "Ongoing support, updates, and bug fixes to keep your website running smoothly, securely, and up-to-date.",
  },
];

/* ── Card ───────────────────────────────────────────────────────────── */
function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.08,
      }}
      whileHover={{ y: -6, scale: 1.02 }}

      animate={{ y: 0, scale: 1 }}
      // separate transition for hover exit — soft spring
      // (whileHover overrides this; on exit it reverts via animate)
      className="group relative flex flex-row sm:flex-col items-center sm:items-start text-left gap-4 p-5 sm:p-6 rounded-2xl bg-[#11111A] border border-white/8 cursor-pointer overflow-hidden"
      style={{
        // @ts-expect-error css custom props
        "--glow": service.glow,
      }}
    >
      {/* Top glow streak on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl sm:block hidden"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${service.glow} 0%, transparent 70%)`,
        }}
      />
      {/* Side glow streak on hover for mobile */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl sm:hidden block"
        style={{
          background: `radial-gradient(ellipse at 0% 50%, ${service.glow} 0%, transparent 70%)`,
        }}
      />

      {/* Border glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          boxShadow: `0 0 0 1px ${service.color}60`,
        }}
      />

      {/* Icon box */}
      <div
        className="relative z-10 shrink-0 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl transition-all duration-500 group-hover:scale-110"
        style={{
          background: `${service.color}18`,
          boxShadow: `0 0 0 0 ${service.glow}`,
        }}
      >
        <span
          style={{ color: service.color }}
          className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_var(--tw-shadow-color)]"
        >
          {service.icon}
        </span>

        {/* Icon glow pulse on hover */}
        <span
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ boxShadow: `0 0 20px ${service.glow}` }}
        />
      </div>

      {/* Text */}
      <div className="relative z-10 flex flex-col gap-1 sm:gap-2">
        <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-white transition-colors">
          {service.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#A0A0B8] leading-relaxed line-clamp-2 sm:line-clamp-none">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ── Main component ─────────────────────────────────────────────────── */
export default function Services() {
  return (
    <section id="services" className="scroll-mt-28 relative w-full py-24 bg-[#09090F] overflow-hidden">
      {/* Background glows */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#7C3AED] rounded-full pointer-events-none"
        style={{ filter: "blur(150px)", opacity: 0.12 }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#06B6FF] rounded-full pointer-events-none"
        style={{ filter: "blur(150px)", opacity: 0.08 }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center gap-4 mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#7C3AED]">
            WHAT I OFFER
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            My Services
          </h2>
          <p className="text-[#A0A0B8] text-base max-w-xl leading-relaxed">
            From concept to launch — I build fast, beautiful, and fully
            responsive digital experiences tailored to your goals.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
