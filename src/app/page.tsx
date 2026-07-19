"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Stats from "@/components/stats";
import About from "@/components/about";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {

  const projects = [
    {
      desktop: "/projects/grillo.png",
      mobile: "/projects/grillo.mobile.png",
    },
    {
      desktop: "/projects/port.png",
      mobile: "/projects/port.mobile.png",
    },
    {
      desktop: "/projects/business.png",
      mobile: "/projects/business.mobile.png",
    },
    {
      desktop: "/projects/portfolio.jpeg",
      mobile: "/projects/portfolio.mobile.jpeg",
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);


  return (
    <main className="flex min-h-screen flex-col items-center bg-[#09090F] overflow-hidden">
      {/* Hero Section */}
      <section
        id="home"
        className="scroll-mt-28 w-full max-w-[1400px] px-6 md:px-12 flex flex-col md:flex-row items-center justify-center relative pt-35 lg:pt-30 pb-12"
      >

        {/* Abstract Background Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7C3AED] rounded-full pointer-events-none z-0" style={{ opacity: 0.4, filter: 'blur(120px)' }} />
        <div className="absolute top-1/2 right-1/4 translate-x-1/4 -translate-y-1/4 w-[600px] h-[600px] bg-[#06B6FF] rounded-full pointer-events-none z-0" style={{ opacity: 0.3, filter: 'blur(120px)' }} />

        <div className="flex w-full flex-col md:flex-row items-center justify-between gap-10 lg:gap-24">

          {/* Left Text Content */}
          <div className="flex flex-col items-start gap-6 lg:gap-8 w-full md:w-[50%] lg:w-[55%] z-10 pt-10 lg:pt-0">
            <div className="flex flex-col gap-4 lg:gap-5">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#06B6FF]">
                  Ushna Fatima
                </span>
              </h1>

              <h2 className="text-lg sm:text-xl lg:text-2xl text-[#06B6FF] font-medium tracking-wide">
                Frontend Web Developer
              </h2>
            </div>

            <p className="text-base lg:text-lg text-[#A0A0B8] leading-relaxed max-w-xl font-light">
              I build premium websites that help businesses attract customers,
              strengthen their online presence, and grow with fast, responsive,
              user-focused experiences.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-2">
              <Link href="/projects">
                <Button

                  size="lg"
                  className="group cursor-pointer rounded-full bg-[#7C3AED] hover:bg-[#8A4FFF] text-white shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_50px_rgba(124,58,237,0.8)] px-6 lg:px-8 h-12 lg:h-14 text-sm lg:text-base transition-all duration-300 hover:-translate-y-1 active:scale-95 active:translate-y-0"
                >
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Button>
              </Link>
              <Link href="/#contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full cursor-pointer px-6 lg:px-8 h-12 lg:h-14 text-sm lg:text-base bg-transparent border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 active:scale-95 active:translate-y-0"
                >
                  Hire Me
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Mockup Area (Premium Visuals) - Hidden on mobile, phone on tablet, both on desktop */}
          <div className="relative w-full md:w-[45%] hidden md:flex items-center justify-center perspective-[2000px] z-10 mt-10 md:mt-0">

            {/* Main Laptop Mockup (Hidden on tablet, visible on lg) */}
            <div
              className="relative hidden lg:block w-full max-w-[450px] xl:max-w-[500px] aspect-[16/10] bg-[#11111A] rounded-xl border border-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.7)] overflow-hidden z-20 group transition-transform duration-500 hover:translate-y-[-10px]"
              style={{
                transform: "rotateY(-12deg) rotateX(4deg) translateZ(0)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Laptop Header/Notch area */}
              <div className="absolute top-0 inset-x-0 h-6 bg-[#09090F] border-b border-white/5 flex items-center justify-center z-30">
                <div className="w-16 h-3.5 bg-black rounded-b-xl border-x border-b border-white/5" />
              </div>

              {/* Laptop Screen Content - Just replace the src below with your screenshot */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={projects[currentProject].desktop}
                  src={projects[currentProject].desktop}
                  alt="Desktop Project"
                  className="w-full cursor-pointer h-full object-cover"
                  initial={{
                    opacity: 0,
                    scale: 1.04,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                  }}
                />
              </AnimatePresence>

              {/* Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.05] via-transparent to-transparent opacity-30 pointer-events-none" />
            </div>

            {/* Secondary Phone Mockup (Visible on tablet & desktop) */}
            <div
              className="relative lg:absolute lg:-bottom-8 lg:-left-12 w-[160px] md:mt-24 lg:w-[140px] xl:w-[160px] aspect-[9/19] bg-[#09090F] rounded-[32px] lg:rounded-[28px] border-[6px] lg:border-[4px] border-[#171723] shadow-[0_30px_60px_rgba(0,0,0,0.8),_0_0_40px_rgba(124,58,237,0.2)] overflow-hidden z-30 transition-transform duration-500 hover:translate-y-[-10px]"
              style={{
                transform: "rotateY(15deg) rotateZ(-6deg) translateZ(80px)",
              }}
            >
              {/* Phone Notch */}
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-40">
                <div className="w-24 h-5 bg-[#171723] rounded-b-xl" />
              </div>

              {/* Phone Screen Content - Just replace the src below with your screenshot */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={projects[currentProject].mobile}
                  src={projects[currentProject].mobile}
                  alt="Mobile Project"
                  className="w-full cursor-pointer h-full object-cover"
                  initial={{
                    opacity: 0,
                    scale: 1.08,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.96,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                  }}
                />
              </AnimatePresence>
            </div>

            {/* Glowing Orbs behind mockups */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#7C3AED] rounded-full pointer-events-none z-0" style={{ opacity: 0.3, filter: 'blur(100px)' }} />

          </div>
        </div>
      </section>
      <Stats />
      <About />
      <Services />
      <Projects featured />
      <Skills />
      <Contact />
    </main>
  );
}
