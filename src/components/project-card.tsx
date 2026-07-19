"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import DeviceMockup from "./device-mockup";

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
  tech: string[];
  liveUrl?: string | null;
  githubUrl?: string | null;
};

export default function ProjectCard({
  title,
  category,
  description,
  desktopImage,
  mobileImage,
  tech,
  liveUrl = "#",
  githubUrl = "#",
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.45 }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#11111A]/80 backdrop-blur-xl"
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,.22),transparent_70%)]" />
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 rounded-[32px] border border-transparent transition-all duration-500 group-hover:border-[#7C3AED]/40" />

      {/* Device Mockup */}
      <div className="relative px-6 pt-8">
        <DeviceMockup
          desktopImage={desktopImage}
          mobileImage={mobileImage}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-8 pb-8 pt-6">

        <span className="inline-flex rounded-full bg-[#7C3AED]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#7C3AED]">
          {category}
        </span>

        <h3 className="mt-5 text-3xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-[#A0A0B8]">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mt-7 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition duration-300 hover:border-[#7C3AED]/40 hover:bg-[#7C3AED]/10"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex items-center gap-3">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <button className="cursor-pointer w-full rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#06B6FF] py-3 text-sm font-semibold text-white transition hover:scale-[1.02]">
                Live Demo
              </button>
            </a>
          ) : (
            <button
              disabled
              className="flex-1 rounded-xl bg-white/5 py-3 text-sm text-gray-500 cursor-not-allowed"
            >
              Coming Soon
            </button>
          )}

          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-xl border border-white/10 p-3 hover:bg-white/5 transition "
            >
              <FaGithub size={20} />
            </a>
          ) : (
            <button
              disabled
              className="rounded-xl cursor-pointer border border-white/10 p-3 text-gray-500 "
            >
              <FaGithub size={20} />
            </button>
          )}
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#06B6FF]/10 blur-[90px] opacity-0 transition duration-700 group-hover:opacity-100" />
    </motion.article>
  );
}