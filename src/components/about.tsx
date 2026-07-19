"use client";
import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

/* ── Floating tech badge ───────────────────────────────────────────── */
function Badge({
  label,
  color,
  delay,
  top,
  left,
  right,
  bottom,
  children,
}: {
  label: string;
  color: string;
  delay: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="absolute z-20 flex flex-col items-center justify-center gap-1 w-[72px] h-[72px] rounded-2xl shadow-xl border border-white/10"
      style={{
        top,
        left,
        right,
        bottom,
        background: "rgba(17,17,26,0.85)",
        backdropFilter: "blur(10px)",
        boxShadow: `0 0 20px ${color}40, 0 8px 32px rgba(0,0,0,0.5)`,
      }}
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration: 3.5,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      }}
    >
      {children}
      <span className="text-[9px] font-semibold text-white/60 tracking-wide">{label}</span>
    </motion.div>
  );
}

/* ── HTML5 SVG ─────────────────────────────────────────────────────── */
const Html5 = () => (
  <svg width="28" height="28" viewBox="0 0 512 512" fill="none">
    <path d="M71 460L30 0h452l-41 460-185 52L71 460z" fill="#E44D26" />
    <path d="M256 472l149-41 35-394H256v435z" fill="#F16529" />
    <path d="M256 208h-75l-5-58h80V96H115l13 148h128v-36zm0 152l-64-17-4-47h-56l8 90 116 32v-58z" fill="#EBEBEB" />
    <path d="M256 208v36h70l-7 73-63 17v58l116-32 8-90 8-62H256zm0-112v54h138l5-54H256z" fill="#fff" />
  </svg>
);

/* ── CSS3 SVG ──────────────────────────────────────────────────────── */
const Css3 = () => (
  <svg width="28" height="28" viewBox="0 0 512 512" fill="none">
    <path d="M71 460L30 0h452l-41 460-185 52L71 460z" fill="#1572B6" />
    <path d="M256 472l149-41 35-394H256v435z" fill="#33A9DC" />
    <path d="M256 268h-79l-5-56h84v-55H115l14 156h127v-45zm0 82l-64-17-4-48h-56l8 91 116 32v-58z" fill="#fff" />
    <path d="M256 268v45h74l-7 64-67 18v58l123-34 9-96 9-55H256zm0-111v55h148l4-55H256z" fill="#fff" />
  </svg>
);

/* ── JS SVG ────────────────────────────────────────────────────────── */
const Js = () => (
  <svg width="28" height="28" viewBox="0 0 512 512" fill="none">
    <rect width="512" height="512" rx="50" fill="#F7DF1E" />
    <path d="M316 407c9 15 21 26 41 26 18 0 29-9 29-21 0-14-11-19-30-27l-10-5c-31-13-51-30-51-65 0-32 24-57 62-57 27 0 46 9 60 34l-33 21c-7-13-15-18-27-18-12 0-20 8-20 18 0 13 8 18 26 26l10 4c36 16 57 32 57 68 0 39-30 60-71 60-40 0-65-19-78-44l34-20zm-132 3c7 12 13 22 27 22 14 0 22-5 22-26V253h41v154c0 43-25 62-61 62-33 0-52-17-62-38l33-21z" fill="#323330" />
  </svg>
);

/* ── React SVG ─────────────────────────────────────────────────────── */
const ReactIcon = () => (
  <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="11" fill="#61DAFB" />
    <ellipse cx="50" cy="50" rx="47" ry="18" stroke="#61DAFB" strokeWidth="4" fill="none" />
    <ellipse cx="50" cy="50" rx="47" ry="18" stroke="#61DAFB" strokeWidth="4" fill="none" transform="rotate(60 50 50)" />
    <ellipse cx="50" cy="50" rx="47" ry="18" stroke="#61DAFB" strokeWidth="4" fill="none" transform="rotate(120 50 50)" />
  </svg>
);

/* ── Next.js SVG ───────────────────────────────────────────────────── */
const NextJs = () => (
  <svg width="28" height="28" viewBox="0 0 180 180" fill="none">
    <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
      <circle cx="90" cy="90" r="90" fill="white" />
    </mask>
    <g mask="url(#mask0)">
      <circle cx="90" cy="90" r="90" fill="black" />
      <path d="M149.508 157.52L69.142 54H54V125.97H66.1V69.3L139.43 164.45C142.83 162.2 146.22 159.92 149.508 157.52Z" fill="url(#paint0)" />
      <rect x="115" y="54" width="12" height="72" fill="url(#paint1)" />
    </g>
    <defs>
      <linearGradient id="paint0" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="paint1" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

/* ── Tailwind SVG ─────────────────────────────────────────────────── */
const Tailwind = () => (
  <svg width="28" height="28" viewBox="0 0 256 154" fill="none">
    <path d="M128 0C93.9 0 72.5 17 64 51c12.8-17 27.7-23.4 44.8-19.2 9.7 2.4 16.7 9.5 24.3 17.4C145.8 62.6 160.8 78 192 78c34.1 0 55.5-17 64-51-12.8 17-27.7 23.4-44.8 19.2-9.7-2.4-16.7-9.5-24.3-17.4C174.2 15.4 159.2 0 128 0zm-64 77C29.9 77 8.5 94 0 128c12.8-17 27.7-23.4 44.8-19.2 9.7 2.4 16.7 9.5 24.3 17.4C81.8 139.6 96.8 154 128 154c34.1 0 55.5-17 64-51-12.8 17-27.7 23.4-44.8 19.2-9.7-2.4-16.7-9.5-24.3-17.4C110.2 91.4 95.2 77 64 77z" fill="#38BDF8" />
  </svg>
);

/* ── TypeScript SVG ────────────────────────────────────────────────── */
const TypeScript = () => (
  <svg width="28" height="28" viewBox="0 0 512 512" fill="none">
    <rect width="512" height="512" rx="50" fill="#3178C6" />
    <path d="M317 407v46c7 4 17 7 28 9s22 3 35 3c12 0 23-1 34-4s20-7 28-13 14-14 19-23 7-21 7-34c0-9-1-18-4-25s-7-14-12-19-11-10-18-15-15-9-24-13c-7-3-12-5-17-8s-9-5-12-8-5-6-7-9-2-7-2-12c0-4 1-8 3-11s4-6 7-8 7-4 11-5 9-2 14-2c4 0 8 0 12 1s8 2 12 3 7 3 11 5 7 4 9 6V236c-6-3-14-5-22-6s-18-2-28-2c-12 0-23 1-33 4s-20 7-28 13-14 14-18 23-7 20-7 33c0 17 5 31 14 42s22 19 39 26c7 3 14 6 19 8s10 5 14 8 7 6 9 10 3 8 3 13c0 4-1 8-2 12s-4 7-8 9-8 4-13 6-11 2-17 2c-11 0-22-2-33-6s-20-10-28-17zm-77-161h61v-41H181v41h60v167h41V246z" fill="white" />
  </svg>
);

/* ── Git SVG ───────────────────────────────────────────────────────── */
const Git = () => (
  <svg width="28" height="28" viewBox="0 0 97 97" fill="none">
    <path d="M92.7 44.7L52.3 4.3a6.5 6.5 0 00-9.2 0L34.4 13l10.3 10.4a7.7 7.7 0 019.8 9.8l10 10A7.7 7.7 0 0171 55.4a7.7 7.7 0 11-9.3-1.1L52.8 45.4v25.1a7.7 7.7 0 11-6.3-.3V44.8a7.7 7.7 0 01-4.1-10.1L32.2 24.5 4.3 52.4a6.5 6.5 0 000 9.2l40.4 40.4a6.5 6.5 0 009.2 0l38.8-38.8a6.5 6.5 0 000-9.2v-.3z" fill="#F05033" />
  </svg>
);

/* ── Laptop mockup with code ───────────────────────────────────────── */
function LaptopMockup() {
  const lines = [
    { indent: 0, color: "#7C3AED", text: "const", rest: " Developer = () => {" },
    { indent: 1, color: "#06B6FF", text: "const", rest: " name = 'Ushna';" },
    { indent: 1, color: "#06B6FF", text: "const", rest: " role = 'Frontend Dev';" },
    { indent: 1, color: "#34D399", text: "return", rest: " (" },
    { indent: 2, color: "#F472B6", text: "<Portfolio", rest: "" },
    { indent: 3, color: "#FBBF24", text: "passion", rest: "='high'" },
    { indent: 3, color: "#FBBF24", text: "quality", rest: "='premium'" },
    { indent: 2, color: "#F472B6", text: "/>", rest: "" },
    { indent: 1, color: "#34D399", text: ")", rest: ";" },
    { indent: 0, color: "#7C3AED", text: "}", rest: "" },
  ];

  return (
    <div className="relative w-full max-w-[460px]">
      {/* Screen */}
      <div
        className="relative bg-[#0D0D14] rounded-t-2xl border border-white/10 overflow-hidden shadow-[0_0_60px_rgba(124,58,237,0.3)]"
        style={{ aspectRatio: "16/10" }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-[#11111A] border-b border-white/5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          <span className="ml-2 text-[9px] text-white/30 font-mono">portfolio.tsx</span>
        </div>

        {/* Code */}
        <div className="p-4 font-mono text-[10px] leading-5 space-y-0.5">
          {lines.map((l, i) => (
            <div key={i} className="flex">
              <span className="text-white/20 w-5 shrink-0 select-none">{i + 1}</span>
              <span style={{ paddingLeft: l.indent * 12 }}>
                <span style={{ color: l.color }}>{l.text}</span>
                <span className="text-white/60">{l.rest}</span>
              </span>
            </div>
          ))}
          {/* blinking cursor */}
          <div className="flex">
            <span className="text-white/20 w-5 shrink-0 select-none">11</span>
            <motion.span
              className="inline-block w-[6px] h-[13px] bg-[#7C3AED] ml-1 rounded-sm"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </div>

        {/* Screen glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/5 via-transparent to-[#06B6FF]/5 pointer-events-none" />
      </div>

      {/* Laptop base */}
      <div className="h-3 bg-gradient-to-b from-[#1A1A2E] to-[#11111A] rounded-b-md border-x border-b border-white/10" />
      <div className="h-1.5 bg-[#0A0A14] rounded-b-xl mx-[-10%] border-x border-b border-white/5" />
    </div>
  );
}

/* ── Main component ────────────────────────────────────────────────── */
export default function About() {
  return (
    <section id="about" className="scroll-mt-28 relative w-full py-24 bg-[#09090F] overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED] rounded-full pointer-events-none"
        style={{ filter: "blur(140px)", opacity: 0.18 }} />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#06B6FF] rounded-full pointer-events-none"
        style={{ filter: "blur(140px)", opacity: 0.1 }} />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        {/* ── LEFT: Text ── */}
        <motion.div
          className="flex flex-col gap-6 w-full lg:w-[45%]"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Label */}
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#7C3AED]">
            WHO AM I
          </span>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            About Me
          </h2>

          {/* Intro */}
          <p className="text-xl sm:text-2xl font-medium text-white leading-snug">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#06B6FF]">
              Ushna
            </span>
            ,<br />
            a frontend developer<br />
            from Pakistan.
          </p>

          {/* Bio */}
          <div className="flex flex-col gap-3 text-[#A0A0B8] text-sm leading-relaxed">
            <p>
              I create modern, responsive and user‑friendly websites that help
              businesses stand out and grow.
            </p>
            <p>
              I specialize in turning ideas into real digital products with clean
              code and beautiful designs.
            </p>
          </div>

          {/* CTA */}
          <a
            href="/cv/Ushna-Fatima-CV.pdf"
            download
            className="inline-flex items-center gap-2 w-fit mt-2 px-7 py-3 rounded-full bg-[#7C3AED] hover:bg-[#8A4FFF] text-white font-semibold text-sm shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_50px_rgba(124,58,237,0.7)] transition-all duration-300 hover:-translate-y-1 active:scale-95"
          >
            Download CV
            <Download className="w-4 h-4" />
          </a>
        </motion.div>

        {/* ── RIGHT: Laptop + floating badges ── */}
        <motion.div
          className="relative w-full lg:w-[55%] flex items-center justify-center min-h-[340px]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
        >
          {/* Glow behind laptop */}
          <div className="absolute inset-0 bg-[#7C3AED] rounded-full pointer-events-none"
            style={{ filter: "blur(80px)", opacity: 0.2 }} />

          <LaptopMockup />

          {/* Floating badges */}
          <Badge label="HTML" color="#E44D26" delay={0} top="-10px" left="2%">
            <Html5 />
          </Badge>

          <Badge label="CSS" color="#264DE4" delay={0.6} top="-10px" left="22%">
            <Css3 />
          </Badge>

          <Badge label="JS" color="#F7DF1E" delay={1.0} top="10px" right="2%">
            <Js />
          </Badge>

          <Badge label="React" color="#61DAFB" delay={0.4} bottom="20px" right="4%">
            <ReactIcon />
          </Badge>

          <Badge label="Next.js" color="#ffffff" delay={0.8} bottom="-10px" left="10%">
            <NextJs />
          </Badge>

          <Badge label="Tailwind" color="#38BDF8" delay={1.3} top="40%" left="-6%">
            <Tailwind />
          </Badge>

          <Badge label="TypeScript" color="#3178C6" delay={0.2} bottom="30%" right="-4%">
            <TypeScript />
          </Badge>

          <Badge label="Git" color="#F05033" delay={1.6} bottom="-10px" right="20%">
            <Git />
          </Badge>
        </motion.div>
      </div>
    </section>
  );
}
