"use client";

import { FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#09090F]">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-5 px-6 py-8 text-center sm:flex-row">
        {/* Left */}
        <p className="text-sm text-[#A0A0B8]">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">Ushna Fatima</span>.
          All rights reserved.
        </p>

        {/* Right */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/ushna2922-lang"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#11111A] text-white transition-all duration-300 hover:border-[#7C3AED] hover:text-[#7C3AED]"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://wa.me/923213667355"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#11111A] text-white transition-all duration-300 hover:border-[#06B6FF] hover:text-[#06B6FF]"
          >
            <FaWhatsapp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}