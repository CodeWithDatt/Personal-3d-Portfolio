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
    cgpa: "9.37 CGPA",
    description:
      "Completed a Diploma in Information Technology, building a strong foundation in programming, software development, databases, web technologies, and problem-solving.",
    status: "Completed",
  },
  {
    number: "02",
    year: "2026 — Present",
    degree: "Bachelor of Technology",
    field: "Information Technology",
    institute: "Ganpat University",
    cgpa: "COMING SOON",
    description:
      "Currently pursuing B.Tech in Information Technology, expanding my knowledge in software development, artificial intelligence, machine learning, modern web technologies, and advanced computing.",
    status: "Currently Pursuing",
  },
];

const Education = () => {
  useGSAP(() => {
    // Header animation
    gsap.from(".education-header", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#education",
        start: "top 80%",
      },
    });

    // Timeline line animation
    gsap.from(".education-line", {
      scaleY: 0,
      transformOrigin: "top",
      duration: 1.5,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".education-timeline",
        start: "top 75%",
      },
    });

    // Timeline dots animation
    gsap.from(".education-dot", {
      scale: 0,
      opacity: 0,
      stagger: 0.25,
      duration: 0.7,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".education-timeline",
        start: "top 75%",
      },
    });

    // Education cards animation
    gsap.from(".education-card", {
      opacity: 0,
      y: 80,
      scale: 0.95,
      stagger: 0.25,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".education-timeline",
        start: "top 75%",
      },
    });

    // CGPA animation
    gsap.from(".cgpa-box", {
      opacity: 0,
      x: 30,
      scale: 0.8,
      stagger: 0.25,
      duration: 0.8,
      ease: "back.out(1.5)",
      scrollTrigger: {
        trigger: ".education-timeline",
        start: "top 70%",
      },
    });

    // Bottom quote
    gsap.from(".education-quote", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".education-quote",
        start: "top 90%",
      },
    });
  });

  return (
    <section
      id="education"
      className="relative w-full flex-center px-5 overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 w-[450px] h-[450px] rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 w-[450px] h-[450px] rounded-full bg-pink-500/10 blur-[140px]" />

      <div className="container relative z-10 w-full md:my-40 my-20">
        {/* Header */}
        <div className="education-header">
          <TitleHeader
            title="EDUCATION"
            number="05"
            text="The academic journey behind my skills and knowledge"
          />
        </div>

        {/* Timeline */}
        <div className="education-timeline relative mt-16 md:mt-24">
          {/* Timeline Line */}
          <div
            className="
              education-line
              absolute
              left-[14px]
              md:left-[24px]
              top-0
              bottom-0
              w-[1px]
              bg-gradient-to-b
              from-blue-50
              via-white/20
              to-pink-100
            "
          />

          <div className="flex flex-col gap-10 md:gap-14">
            {educationData.map((education) => (
              <div key={education.number} className="relative pl-12 md:pl-20">
                {/* Timeline Dot */}
                <div
                  className="
                    education-dot
                    absolute
                    left-0
                    top-8
                    w-7
                    h-7
                    md:w-12
                    md:h-12
                    rounded-full
                    bg-black-300
                    border
                    border-white/20
                    flex
                    items-center
                    justify-center
                    shadow-[0_0_30px_rgba(80,120,255,0.25)]
                    z-10
                  "
                >
                  <div
                    className="
                      w-2.5
                      h-2.5
                      md:w-3
                      md:h-3
                      rounded-full
                      bg-blue-50
                      shadow-[0_0_15px_rgba(80,120,255,0.9)]
                    "
                  />
                </div>

                {/* Education Card */}
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
                    backdrop-blur-xl
                    p-6
                    md:p-9
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-blue-50/30
                    hover:shadow-[0_25px_70px_rgba(0,0,0,0.4)]
                  "
                >
                  {/* Hover Glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-24
                      -top-24
                      w-64
                      h-64
                      rounded-full
                      bg-blue-50/10
                      blur-3xl
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* Top Information */}
                  <div
                    className="
                      relative
                      flex
                      flex-col
                      md:flex-row
                      md:items-center
                      md:justify-between
                      gap-5
                    "
                  >
                    {/* Number + Year */}
                    <div className="flex items-center gap-3">
                      <span className="text-sm md:text-base text-blue-50/60 font-medium">
                        {education.number}
                      </span>

                      <div className="w-8 h-px bg-white/20" />

                      <span className="text-sm md:text-base text-white/50 tracking-wide">
                        {education.year}
                      </span>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-3">
                      {/* Status */}
                      <span
                        className={`
                          w-fit
                          rounded-full
                          border
                          px-4
                          py-1.5
                          text-xs
                          md:text-sm
                          tracking-wide
                          ${
                            education.status === "Currently Pursuing"
                              ? "border-blue-50/30 bg-blue-50/10 text-blue-50"
                              : "border-white/10 bg-white/5 text-white/60"
                          }
                        `}
                      >
                        {education.status}
                      </span>

                      {/* CGPA */}
                      <div
                        className="
                          cgpa-box
                          flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-white/10
                          bg-white/5
                          px-4
                          py-1.5
                          transition-all
                          duration-300
                          group-hover:border-blue-50/30
                          group-hover:bg-blue-50/10
                        "
                      >
                        <span className="text-xs md:text-sm text-white/40">
                          CGPA
                        </span>

                        <span className="text-sm md:text-base font-semibold text-white">
                          {education.cgpa}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="relative mt-7">
                    <h2 className="gradient-title text-2xl md:text-4xl font-semibold">
                      {education.degree}
                    </h2>

                    <h3 className="mt-2 text-lg md:text-2xl text-white/80 font-medium">
                      {education.field}
                    </h3>

                    <p className="mt-2 text-sm md:text-lg text-white/40">
                      {education.institute}
                    </p>

                    <p className="mt-6 max-w-3xl text-sm md:text-lg leading-relaxed text-white/60">
                      {education.description}
                    </p>
                  </div>

                  {/* Bottom Decoration */}
                  <div className="relative mt-8 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="w-8 h-1 rounded-full bg-blue-50/70" />
                      <span className="w-2 h-1 rounded-full bg-white/20" />
                      <span className="w-2 h-1 rounded-full bg-pink-100/50" />
                    </div>

                    <span
                      className="
                        text-xs
                        md:text-sm
                        uppercase
                        tracking-[0.25em]
                        text-white/30
                        transition-colors
                        duration-300
                        group-hover:text-white/60
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

        {/* Bottom Quote */}
        <div className="education-quote mt-16 md:mt-20 flex justify-center">
          <p className="max-w-2xl text-center text-sm md:text-lg text-white/35 leading-relaxed">
            From building my foundation through a Diploma to pursuing my
            Bachelor's degree, every step continues to shape me into a better
            developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
