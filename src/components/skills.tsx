"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiSupabase,
  SiFirebase,
} from "react-icons/si";

import { MonitorSmartphone, Search } from "lucide-react";

const skills = [
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    icon: FaJsSquare,
    color: "#F7DF1E",
  },
  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38BDF8",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "#F05033",
  },
  {
    name: "Figma",
    icon: FaFigma,
    color: "#A259FF",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    color: "#3ECF8E",
  },

  {
    name: "Responsive",
    icon: MonitorSmartphone,
    color: "#8B5CF6",
  },
  {
    name: "SEO",
    icon: Search,
    color: "#06B6FF",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-28 relative w-full py-24 bg-[#09090F] overflow-hidden"
    >
      {/* Background Glows */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#7C3AED] rounded-full pointer-events-none"
        style={{ filter: "blur(150px)", opacity: 0.12 }}
      />

      <div
        className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#06B6FF] rounded-full pointer-events-none"
        style={{ filter: "blur(150px)", opacity: 0.08 }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#7C3AED]">
            MY SKILLS
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
            Technologies I Use
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-[#A0A0B8] leading-relaxed">
            I build modern, scalable and responsive websites using the latest
            frontend technologies and best development practices.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  y: -8,
                  scale: 1.04,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#11111A] p-6 flex flex-col items-center justify-center transition-all duration-300"
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top, ${skill.color}20 0%, transparent 70%)`,
                  }}
                />

                {/* Border Glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: `0 0 0 1px ${skill.color}70`,
                  }}
                />

                {/* Icon */}
                <div
                  className="relative z-10 flex items-center justify-center w-16 h-16 rounded-xl transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${skill.color}15`,
                  }}
                >
                  <Icon
                    className="w-8 h-8 transition-transform duration-300 group-hover:rotate-6"
                    style={{ color: skill.color }}
                  />
                </div>

                {/* Name */}
                <h3 className="relative z-10 mt-5 text-sm font-semibold text-white text-center">
                  {skill.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}