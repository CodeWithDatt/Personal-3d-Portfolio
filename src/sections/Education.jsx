import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../compononents/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    number: "01",
    year: "2023 — 2026",
    degree: "Diploma",
    field: "Information Technology",
    institute: "Ganpat University",
    cgpa: "9.37",
    status: "Completed",
    description:
      "Completed a Diploma in Information Technology with a strong foundation in programming, software development, databases, web technologies, and problem-solving.",
  },
  {
    number: "02",
    year: "2026 — Present",
    degree: "Bachelor of Technology",
    field: "Information Technology",
    institute: "Ganpat University",
    cgpa: "—",
    status: "Currently Pursuing",
    description:
      "Currently pursuing B.Tech in Information Technology, expanding my knowledge in software development, artificial intelligence, machine learning, modern web technologies, and advanced computing.",
  },
];

const Education = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        // Initial states
        gsap.set(".education-heading", {
          opacity: 0,
          y: 40,
        });

        gsap.set(".education-card", {
          opacity: 0,
          y: 70,
          scale: 0.96,
        });

        gsap.set(".education-dot", {
          opacity: 0,
          scale: 0,
        });

        gsap.set(".education-line", {
          scaleY: 0,
          transformOrigin: "top center",
        });

        // Header animation
        gsap.to(".education-heading", {
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

        // Timeline line
        gsap.to(".education-line", {
          scaleY: 1,
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".education-timeline",
            start: "top 75%",
            once: true,
          },
        });

        // Dots
        gsap.to(".education-dot", {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.25,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".education-timeline",
            start: "top 75%",
            once: true,
          },
        });

        // Cards
        gsap.to(".education-card", {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".education-timeline",
            start: "top 75%",
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
      id="education"
      className="relative w-full overflow-hidden px-5 md:px-0"
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-52
          top-20
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-500/10
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-52
          bottom-20
          h-[450px]
          w-[450px]
          rounded-full
          bg-purple-500/10
          blur-[140px]
        "
      />

      <div className="container relative z-10 w-full py-20 md:my-20 md:py-20">
        {/* Header */}
        <div className="education-heading">
          <TitleHeader
            title="EDUCATION"
            number="05"
            text="The academic journey behind my skills and knowledge"
          />
        </div>

        {/* Timeline */}
        <div className="education-timeline relative mt-16 md:mt-24">
          {/* Timeline line */}
          <div
            className="
              education-line
              absolute
              left-[15px]
              top-5
              bottom-5
              w-px
              bg-gradient-to-b
              from-blue-50
              via-white/20
              to-purple-400/20
              md:left-[25px]
            "
          />

          <div className="flex flex-col gap-10 md:gap-14">
            {educationData.map((education) => (
              <div key={education.number} className="relative pl-12 md:pl-20">
                {/* Timeline dot */}
                <div
                  className="
                    education-dot
                    absolute
                    left-0
                    top-8
                    z-10
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    bg-black-300
                    shadow-[0_0_30px_rgba(80,120,255,0.25)]
                    md:h-12
                    md:w-12
                  "
                >
                  <div
                    className="
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-blue-50
                      shadow-[0_0_18px_rgba(80,120,255,0.9)]
                      md:h-3
                      md:w-3
                    "
                  />
                </div>

                {/* Card */}
                <div
                  className="
                    education-card
                    group
                    relative
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
                    hover:shadow-[0_25px_80px_rgba(0,0,0,0.4)]
                    md:p-9
                  "
                >
                  {/* Hover glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-24
                      -top-24
                      h-64
                      w-64
                      rounded-full
                      bg-blue-50/10
                      blur-3xl
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* Top row */}
                  <div
                    className="
                      relative
                      flex
                      flex-col
                      gap-4
                      md:flex-row
                      md:items-center
                      md:justify-between
                    "
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-blue-50/70 md:text-base">
                        {education.number}
                      </span>

                      <span className="h-px w-8 bg-white/20" />

                      <span className="text-sm tracking-wide text-white/50 md:text-base">
                        {education.year}
                      </span>
                    </div>

                    {/* Status */}
                    <span
                      className={`
                        w-fit
                        rounded-full
                        border
                        px-4
                        py-1.5
                        text-xs
                        tracking-wide
                        md:text-sm
                        ${
                          education.status === "Currently Pursuing"
                            ? "border-blue-50/30 bg-blue-50/10 text-blue-50"
                            : "border-white/10 bg-white/5 text-white/60"
                        }
                      `}
                    >
                      {education.status}
                    </span>
                  </div>

                  {/* Main content */}
                  <div className="relative mt-7">
                    <h2 className="gradient-title text-3xl font-semibold md:text-5xl">
                      {education.degree}
                    </h2>

                    <h3 className="mt-2 text-lg font-medium text-white/80 md:text-2xl">
                      {education.field}
                    </h3>

                    <p className="mt-2 text-sm text-white/40 md:text-lg">
                      {education.institute}
                    </p>

                    {/* CGPA */}
                    <div
                      className="
                        mt-6
                        inline-flex
                        items-center
                        gap-3
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-4
                        py-3
                      "
                    >
                      <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                        CGPA
                      </span>

                      <span className="h-4 w-px bg-white/10" />

                      <span className="text-lg font-semibold text-blue-50">
                        {education.cgpa}
                      </span>
                    </div>

                    <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/55 md:text-lg">
                      {education.description}
                    </p>
                  </div>

                  {/* Bottom decoration */}
                  <div className="relative mt-8 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="h-1 w-8 rounded-full bg-blue-50/70" />
                      <span className="h-1 w-2 rounded-full bg-white/20" />
                      <span className="h-1 w-2 rounded-full bg-purple-400/50" />
                    </div>

                    <span
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.25em]
                        text-white/25
                        transition-colors
                        duration-300
                        group-hover:text-white/50
                        md:text-sm
                      "
                    >
                      Information Technology
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-16 flex justify-center md:mt-20">
          <p className="max-w-2xl text-center text-sm leading-relaxed text-white/30 md:text-lg">
            From building my foundation through a Diploma to pursuing my
            Bachelor&apos;s degree, every step continues to shape me into a
            better developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
