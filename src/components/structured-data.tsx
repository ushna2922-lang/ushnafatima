export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Ushna Fatima",

    url: "https://ushnafatima.vercel.app",

    image: "https://ushnafatima.vercel.app/og-image.png",

    jobTitle: "Frontend Web Developer",

    description:
      "Frontend Developer specializing in premium, responsive and high-performance websites using React, Next.js, TypeScript and Tailwind CSS.",

    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Frontend Development",
      "Responsive Design",
      "UI Development",
      "Web Performance"
    ],

    sameAs: [
      "https://github.com/ushna2922-lang",
      "https://linkedin.com/in/YOUR-LINKEDIN"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}