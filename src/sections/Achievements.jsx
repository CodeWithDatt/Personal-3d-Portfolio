import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../compononents/TitleHeader";
import AchievementCard from "../compononents/AchievementCard";

gsap.registerPlugin(ScrollTrigger);

const achievementsData = [
  {
    number: "01",
    type: "Certification",
    year: "2025",
    title: "Generative AI",
    organization: "Microsoft",
    category: "AI / Technology",
    icon: "/images/ai.svg",
    description:
      "Completed a certification focused on generative artificial intelligence and the fundamentals of modern AI technologies.",
    link: "#",
  },

  {
    number: "02",
    type: "Certification",
    year: "2025",
    title: "Web Development",
    organization: "Professional Certification",
    category: "Development",
    icon: "/images/web.svg",
    description:
      "Strengthened my understanding of modern web development, responsive interfaces, and building practical web applications.",
    link: "#",
  },

  {
    number: "03",
    type: "Achievement",
    year: "2025",
    title: "Hackathon",
    organization: "Hackathon Participation",
    category: "Competition",
    icon: "/images/trophy.svg",
    description:
      "Participated in a hackathon environment focused on developing innovative solutions while working under time constraints.",
    link: "#",
  },

  {
    number: "04",
    type: "Certification",
    year: "2025",
    title: "Programming",
    organization: "Technical Certification",
    category: "Programming",
    icon: "/images/code.svg",
    description:
      "Built a stronger foundation in programming concepts, logical problem-solving, and software development practices.",
    link: "#",
  },
];

const Achievements = () => {
  useGSAP(() => {
    /* =========================
       SECTION INTRO
    ========================= */

    gsap.from(".achievement-header", {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#achievements",
        start: "top 80%",
      },
    });

    /* =========================
       TOP DECORATION
    ========================= */

    gsap.from(".achievement-decoration", {
      opacity: 0,
      scale: 0.7,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#achievements",
        start: "top 75%",
      },
    });

    /* =========================
       CARDS
    ========================= */

    gsap.from(".achievement-card", {
      opacity: 0,
      y: 80,
      scale: 0.94,
      stagger: 0.15,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".achievements-grid",
        start: "top 80%",
      },
    });

    /* =========================
       CARD CONTENT
    ========================= */

    gsap.from(".achievement-card-content", {
      opacity: 0,
      x: -30,
      stagger: 0.12,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".achievements-grid",
        start: "top 75%",
      },
    });

    /* =========================
       BOTTOM TEXT
    ========================= */

    gsap.from(".achievement-footer", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".achievement-footer",
        start: "top 90%",
      },
    });
  });

  return (
    <section
      id="achievements"
      className="
        relative
        flex
        w-full
        items-center
        justify-center
        overflow-hidden
        px-5
      "
    >
      {/* =========================
          BACKGROUND GLOW
      ========================= */}

      <div
        className="
          achievement-decoration
          pointer-events-none
          absolute
          -left-48
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-500/10
          blur-[150px]
        "
      />

      <div
        className="
          achievement-decoration
          pointer-events-none
          absolute
          -right-48
          bottom-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-pink-500/10
          blur-[150px]
        "
      />

      {/* =========================
          MAIN CONTAINER
      ========================= */}

      <div className="container relative z-10 w-full md:my-40 my-20">
        {/* =========================
            HEADER
        ========================= */}

        <div className="achievement-header">
          <TitleHeader
            title="ACHIEVEMENTS"
            number="05"
            text="Certifications, milestones and experiences that shaped my journey"
          />
        </div>

        {/* =========================
            INTRO
        ========================= */}

        <div className="achievement-card-content mt-10 max-w-3xl md:mt-14">
          <p className="text-sm leading-relaxed text-white/45 md:text-lg">
            Every certification and achievement represents another step in my
            journey as a developer. I continuously learn, experiment, and
            challenge myself to improve my technical skills.
          </p>
        </div>

        {/* =========================
            GRID
        ========================= */}

        <div
          className="
            achievements-grid
            mt-12
            grid
            gap-5
            md:mt-16
            md:grid-cols-2
          "
        >
          {achievementsData.map((achievement) => (
            <AchievementCard
              key={achievement.number}
              achievement={achievement}
            />
          ))}
        </div>

        {/* =========================
            BOTTOM STATISTICS
        ========================= */}

        <div
          className="
            achievement-footer
            mt-10
            grid
            gap-4
            sm:grid-cols-3
            md:mt-14
          "
        >
          {/* Learning */}
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-black-300/60
              p-6
              text-center
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-white/20
            "
          >
            <h3 className="gradient-title text-3xl font-semibold md:text-4xl">
              ∞
            </h3>

            <p className="mt-2 text-sm text-white/40 md:text-base">
              Continuous Learning
            </p>
          </div>

          {/* Focus */}
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-black-300/60
              p-6
              text-center
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-white/20
            "
          >
            <h3 className="gradient-title text-3xl font-semibold md:text-4xl">
              AI
            </h3>

            <p className="mt-2 text-sm text-white/40 md:text-base">
              Future Focus
            </p>
          </div>

          {/* Development */}
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-black-300/60
              p-6
              text-center
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-white/20
            "
          >
            <h3 className="gradient-title text-3xl font-semibold md:text-4xl">
              100%
            </h3>

            <p className="mt-2 text-sm text-white/40 md:text-base">
              Growth Mindset
            </p>
          </div>
        </div>

        {/* =========================
            FINAL MESSAGE
        ========================= */}

        <div className="achievement-footer mt-14 flex justify-center md:mt-20">
          <p
            className="
              max-w-2xl
              text-center
              text-sm
              leading-relaxed
              text-white/30
              md:text-base
            "
          >
            Learning never stops. Every new skill, project, and challenge is
            another opportunity to become a better developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
