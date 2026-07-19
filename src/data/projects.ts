export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;

  desktopImage: string;
  mobileImage: string;

  tech: string[];

  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Grillo Restaurant",
    category: "Restaurant Website",
    description:
      "A premium restaurant website featuring elegant UI, responsive layouts, smooth animations, online reservations, and an immersive dining experience.",
    desktopImage: "/projects/grillo.png",
    mobileImage: "/projects/grillo.mobile.png",
    tech: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
    githubUrl: "https://github.com/ushna2922-lang/grilloo-restaurant",
    liveUrl: "https://grilloo-restaurant.vercel.app/",
  },

  {
    id: 2,
    title: "MeritMate",
    category: "Education Platform",
    description:
      "A platform helping Pakistani students explore universities, calculate merit, compare programs, and prepare for admission and entry tests.",
    desktopImage: "/projects/merit.png",
    mobileImage: "/projects/merit.mobile.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    githubUrl: "https://github.com/ushna2922-lang",
    liveUrl: "https://meritmate.netlify.app/",
  },

  {
    id: 3,
    title: "Arham Ahmed Portfolio",
    category: "Portfolio Website",
    description:
      "A modern portfolio website showcasing projects, skills, achievements, and contact information with premium animations and responsive design.",
    desktopImage: "/projects/arham.png",
    mobileImage: "/projects/arham.mobile.png",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/ushna2922-lang",
    liveUrl: "https://arhamahmed.netlify.app/",
  },

  {
    id: 4,
    title: "Luxe Salon",
    category: "Business Website",
    description:
      "A luxury salon website featuring premium branding, service listings, appointment booking, elegant UI, and a seamless responsive experience.",
    desktopImage: "/projects/salon.png",
    mobileImage: "/projects/salon.mobile.png",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/ushna2922-lang",
    liveUrl: "https://luxe-local-salon.netlify.app/",
  },

  {
    id: 5,
    title: "Nexus Gym",
    category: "Fitness Website",
    description:
      "A modern fitness website featuring membership plans, trainer profiles, workout programs, BMI calculator, and responsive user experience.",
    desktopImage: "/projects/nexus.png",
    mobileImage: "/projects/nexus.mobile.png",
    tech: ["React", "Tailwind CSS", "Firebase"],
    githubUrl: "https://github.com/ushna2922-lang/nexusgym",
    liveUrl: "https://nexusgym-one.vercel.app/",
  },
];