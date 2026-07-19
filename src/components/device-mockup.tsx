"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type DeviceMockupProps = {
  desktopImage: string;
  mobileImage: string;
};

export default function DeviceMockup({
  desktopImage,
  mobileImage,
}: DeviceMockupProps) {
  return (
    <motion.div
      whileHover={{
        rotateX: 4,
        rotateY: -6,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 18,
      }}
      className="relative flex items-center justify-center h-[330px]"
      style={{
        perspective: "2000px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Glow */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-[#7C3AED]/20 blur-[120px]" />

      {/* Laptop */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative z-20 w-[88%] aspect-[16/10]"
      >
        {/* Screen */}
        <div className="relative overflow-hidden rounded-t-xl border border-white/10 bg-[#09090F] shadow-[0_30px_80px_rgba(0,0,0,.65)] h-full">

          {/* Camera */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-b-xl z-30" />

          <Image
            src={desktopImage}
            alt="Desktop Preview"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 700px"
            className="object-cover"
          />

          {/* Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Laptop Base */}
        <div className="mx-auto h-3 w-[104%] -translate-x-[2%] rounded-b-xl bg-gradient-to-b from-[#1C1C25] to-[#11111A]" />

        <div className="mx-auto h-[6px] w-[40%] rounded-b-full bg-[#0B0B10]" />
      </motion.div>

      {/* Phone */}
      <motion.div
        whileHover={{
          y: -8,
          rotate: -4,
        }}
        className="absolute bottom-2 right-2 z-30 w-[88px] aspect-[9/19]"
      >
        <div className="relative overflow-hidden rounded-[24px] border-[4px] border-[#171723] shadow-[0_25px_60px_rgba(0,0,0,.75)] h-full">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-black rounded-b-xl z-20" />

          <Image
            src={mobileImage}
            alt="Mobile Preview"
            fill
            sizes="160px"
            className="object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}