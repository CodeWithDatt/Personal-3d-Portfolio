import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../compononents/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const achievementsData = [
  {
    number: "01",
    type: "CERTIFICATION",
    title: "Generative AI",
    organization: "Microsoft",
    year: "2025",
    description:
      "Completed learning focused on Generative AI concepts, applications, and the fundamentals of modern AI-powered technologies.",
    icon: "✦",
  },
  {
    number: "02",
    type: "CERTIFICATION",
    title: "Web Development",
    organization: "Professional Learning",
    year: "2025",
    description:
      "Strengthened practical web development skills through hands-on learning and project-based development.",
    icon: "</>",
  },
  {
    number: "03",
    type: "ACHIEVEMENT",
    title: "Hackathon",
    organization: "Technology & Innovation",
    year: "2025",
    description:
      "Participated in technology-focused problem solving and explored how software can be used to create practical solutions.",
    icon: "⚡",
  },
  {
    number: "04",
    type: "ACHIEVEMENT",
    title: "Project Development",
    organization: "Personal Portfolio",
    year: "2025",
    description:
      "Designed and developed a modern 3D portfolio using React, Three.js, GSAP, and modern frontend technologies.",
    icon: "◈",
  },
];

const Achievements = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        // Initial states
        gsap.set(".achievement-heading", {
          opacity: 0,
          y: 40,
        });

        gsap.set(".achievement-card", {
          opacity: 0,
          y: 70,
          scale: 0.95,
        });

        gsap.set(".achievement-number", {
          opacity: 0,
          x: -20,
        });

        // Header
        gsap.to(".achievement-heading", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        });

        // Cards
        gsap.to(".achievement-card", {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".achievements-grid",
            start: "top 78%",
            once: true,
          },
        });

        // Numbers
        gsap.to(".achievement-number", {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".achievements-grid",
            start: "top 78%",
            once: true,
          },
        });
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="relative w-full overflow-hidden px-5 md:px-0"
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-52
          top-1/4
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-500/10
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-52
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-purple-500/10
          blur-[150px]
        "
      />

      <div className="container relative z-10 w-full py-20 md:my-20 md:py-20">
        {/* Header */}
        <div className="achievement-heading">
          <TitleHeader
            title="ACHIEVEMENTS"
            number="06"
            text="Milestones, certifications, and experiences that shaped my journey"
          />
        </div>

        {/* Cards */}
        <div className="achievements-grid mt-14 grid gap-5 md:mt-20 md:grid-cols-2">
          {achievementsData.map((item) => (
            <div
              key={item.number}
              className="
                achievement-card
                group
                relative
                min-h-[330px]
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-black-300/80
                p-6
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-blue-50/30
                hover:shadow-[0_25px_80px_rgba(0,0,0,0.45)]
                md:p-8
              "
            >
              {/* Background glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-28
                  -top-28
                  h-72
                  w-72
                  rounded-full
                  bg-blue-50/10
                  blur-3xl
                  opacity-0
                  transition-all
                  duration-700
                  group-hover:scale-125
                  group-hover:opacity-100
                "
              />

              {/* Top */}
              <div className="relative flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="achievement-number text-sm font-medium text-blue-50/70 md:text-base">
                    {item.number}
                  </span>

                  <span className="h-px w-8 bg-white/15" />

                  <span className="text-xs tracking-[0.18em] text-white/35 md:text-sm">
                    {item.type}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    text-lg
                    font-semibold
                    text-blue-50
                    transition-all
                    duration-500
                    group-hover:rotate-6
                    group-hover:border-blue-50/30
                    group-hover:bg-blue-50/10
                    md:h-14
                    md:w-14
                    md:text-xl
                  "
                >
                  {item.icon}
                </div>
              </div>

              {/* Main content */}
              <div className="relative mt-12">
                <div className="flex flex-col gap-2">
                  <h2 className="gradient-title text-2xl font-semibold md:text-4xl">
                    {item.title}
                  </h2>

                  <p className="text-sm font-medium text-white/50 md:text-base">
                    {item.organization}
                  </p>
                </div>

                <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/55 md:text-lg">
                  {item.description}
                </p>
              </div>

              {/* Bottom */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between md:bottom-8 md:left-8 md:right-8">
                <div className="flex items-center gap-1">
                  <span className="h-1 w-8 rounded-full bg-blue-50/70" />
                  <span className="h-1 w-2 rounded-full bg-white/20" />
                  <span className="h-1 w-2 rounded-full bg-purple-400/50" />
                </div>

                <span className="text-xs tracking-[0.2em] text-white/30">
                  {item.year}
                </span>
              </div>

              {/* Hover border line */}
              <div
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-px
                  w-0
                  -translate-x-1/2
                  bg-blue-50/60
                  transition-all
                  duration-700
                  group-hover:w-1/2
                "
              />
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-14 flex justify-center md:mt-20">
          <p className="max-w-2xl text-center text-sm leading-relaxed text-white/30 md:text-lg">
            Every certification, project, and experience is another step toward
            becoming a stronger and more capable software engineer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
