"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "./ui/button";
import { Button } from "./ui/button";

const navLinks = [
  {
    name: "Home",
    href: "/#home",
    section: "home",
  },
  
  {
    name: "About",
    href: "/#about",
    section: "about",
    
  },
  {
    name: "Services",
    href: "/#services",
    section: "services",
  },
  {
    name: "Projects",
    href: "/projects",
    section: "projects",
  },
  {
    name: "Skills",
    href: "/#skills",
    section: "skills",
    
  },
  {
    name: "Contact",
    href: "/#contact",
    section: "contact",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (pathname !== "/") return;

    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-center transition-all duration-500 px-4 md:px-6",
        scrolled ? "pt-4" : "pt-8"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between w-full max-w-6xl px-6 py-3 transition-all duration-500",
          "glass rounded-full border border-white/5 shadow-2xl shadow-black/50 bg-[#171723]/60 backdrop-blur-xl"
        )}
      >
        <Link href="/" className="flex items-center gap-1.5 relative z-10 pl-2">
          <span className="text-2xl font-black tracking-tighter text-white">
            UF
          </span>
          <span className="text-3xl font-bold text-primary leading-[0]">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive =
              pathname === "/"
                ? link.section
                  ? activeSection === link.section
                  : false
                : pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:text-white",
                  isActive ? "text-white" : "text-[#A0A0B8]"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center relative z-10 pr-2 gap-2">
          <Link href="/#contact">
          <Button className="hidden md:inline-flex rounded-full bg-[#7C3AED] hover:bg-[#8A4FFF] text-white font-medium px-6 cursor-pointer shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_35px_rgba(124,58,237,0.6)] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 active:translate-y-0">
            Hire Me
          </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-[#A0A0B8] hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[calc(100%+1rem)] left-6 right-6 p-6 glass rounded-2xl border border-white/10 shadow-2xl bg-[#171723]/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors py-2 border-b border-white/5",
                      isActive ? "text-white" : "text-[#A0A0B8]"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link href="/#contact">
              <Button className="w-full mt-4 rounded-full bg-primary hover:bg-primary/90 text-white cursor-pointer font-medium shadow-[0_0_20px_rgba(124,58,237,0.3)] ">
                Hire Me
              </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
