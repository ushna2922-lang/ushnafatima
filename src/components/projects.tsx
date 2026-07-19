"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/project-card";
import { projects } from "@/data/projects";

type ProjectsProps = {
    featured?: boolean;
};

export default function Projects({
    featured = false,
}: ProjectsProps) {
    const displayedProjects = featured
        ? projects.slice(0, 3)
        : projects;

    return (
        <section
            id="projects"
            className="scroll-mt-28 relative w-full py-24 bg-[#09090F] overflow-hidden"
        >
            {/* Background Glows */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#7C3AED]"
                style={{
                    filter: "blur(180px)",
                    opacity: 0.12,
                }}
            />

            <div
                className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-[#06B6FF]"
                style={{
                    filter: "blur(180px)",
                    opacity: 0.08,
                }}
            />

            <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7C3AED]">
                        MY WORK
                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
                        Featured Projects
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-[#A0A0B8] leading-relaxed">
                        A selection of premium websites crafted with modern design,
                        responsiveness, smooth interactions, and high performance.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {displayedProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            {...project}
                        />
                    ))}
                </div>

                {featured && (
                    <div className="mt-16 flex justify-center">
                        <a
                            href="/projects"
                            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#171723] px-8 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#7C3AED]/60 hover:shadow-[0_0_35px_rgba(124,58,237,0.35)]"
                        >
                            View All Projects

                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
}