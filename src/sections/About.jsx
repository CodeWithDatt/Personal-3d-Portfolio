import React from "react";
import GradientSpheres from "../compononents/GradientSpheres";
import TitleHeader from "../compononents/TitleHeader";
import { Canvas } from "@react-three/fiber";
import { Alien } from "../../public/models/Alien";
import { OrbitControls } from "@react-three/drei";
import { bentoSocialLinks } from "../constants";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    /*
    ==========================================
    ABOUT HEADER ANIMATION
    ==========================================
    */

    gsap.from(".about-header", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    /*
    ==========================================
    MAIN ABOUT CARDS
    ==========================================
    */

    gsap.from(".about-card", {
      opacity: 0,
      y: 80,
      scale: 0.94,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-grid",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    /*
    ==========================================
    LEFT CONTENT ANIMATION
    ==========================================
    */

    gsap.from(".about-left-animation", {
      opacity: 0,
      x: -100,
      duration: 1.2,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-grid",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    /*
    ==========================================
    RIGHT ALIEN ANIMATION
    ==========================================
    */

    gsap.from(".about-right-animation", {
      opacity: 0,
      x: 100,
      scale: 0.85,
      rotationY: 8,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-grid",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    /*
    ==========================================
    TEXT STAGGER ANIMATION
    ==========================================
    */

    gsap.from(".about-text-animation", {
      opacity: 0,
      y: 25,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-grid",
        start: "top 72%",
        toggleActions: "play none none reverse",
      },
    });

    /*
    ==========================================
    SOCIAL LINKS ANIMATION
    ==========================================
    */

    gsap.from(".social-card", {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 0.8,
      stagger: 0.12,
      ease: "back.out(1.4)",
      scrollTrigger: {
        trigger: ".social-container",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    /*
    ==========================================
    MOTIVATIONAL TEXT
    ==========================================
    */

    gsap.from(".motivation-text", {
      opacity: 0,
      x: -40,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".motivation-card",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    /*
    ==========================================
    FLOWER ROTATION
    ==========================================
    */

    gsap.to(".flower", {
      rotation: 360,
      duration: 12,
      repeat: -1,
      ease: "none",
    });
  });

  return (
    <section
      id="about"
      className="flex-center relative overflow-hidden md:p-0 px-5"
    >
      {/* Background gradient spheres */}
      <GradientSpheres
        sphere1Class={"about-gradient-sphere about-sphere-1"}
        sphere2Class={"about-gradient-sphere about-sphere-2"}
      />

      <div className="container w-full md:my-20 my-10 relative z-10">
        {/* ================= HEADER ================= */}

        <div className="about-header">
          <TitleHeader
            title={"About Me"}
            text={"Passionate Creator, Lifelong Learner"}
            number={"01"}
          />
        </div>

        {/* ================= GRID ================= */}

        <div className="md:mt-20 mt-10">
          <div className="about-grid grid grid-cols-12 gap-5">
            {/* ================= ABOUT CARD ================= */}

            <div className="about-card md:col-span-7 col-span-12 row-span-5">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                {/* Flower */}
                <div>
                  <img
                    className="flower md:w-32 w-12"
                    src="/images/flower.svg"
                    alt="Decorative flower"
                  />
                </div>

                {/* About text */}
                <div className="mt-5">
                  <h1
                    className="
                      about-left-animation
                      text-blue-50
                      md:text-5xl
                      text-3xl
                      font-medium
                    "
                  >
                    Datt Patel
                  </h1>

                  <p
                    className="
                      about-left-animation
                      about-text-animation
                      md:text-2xl
                      mt-3
                      leading-relaxed
                    "
                  >
                    I am an Information Technology student and aspiring software
                    engineer with a passion for software development, artificial
                    intelligence, and machine learning. I enjoy building modern
                    web applications, exploring new technologies, and turning
                    ideas into practical projects. I continuously work on
                    improving my development, problem-solving, and technical
                    skills through hands-on projects.
                  </p>
                </div>
              </div>
            </div>

            {/* ================= ALIEN CARD ================= */}

            <div className="about-card md:col-span-5 col-span-12 row-span-5">
              <div
                className="
                  about-right-animation
                  bg-[#c8d751]
                  hover:cursor-grab
                  w-full
                  md:h-full
                  h-60
                  rounded-2xl
                  overflow-hidden
                "
              >
                <div className="w-full h-full">
                  <Canvas
                    camera={{
                      position: [0, 0, 10],
                      fov: 35,
                    }}
                  >
                    <ambientLight intensity={1.5} />

                    <directionalLight position={[5, 5, 5]} intensity={2} />

                    <OrbitControls
                      enableZoom={false}
                      enablePan={false}
                      autoRotate
                      autoRotateSpeed={1.5}
                    />

                    <Alien
                      scale={2}
                      position={[0, -5.5, 0]}
                      rotation={[0, -0.5, 0]}
                    />
                  </Canvas>
                </div>
              </div>
            </div>

            {/* ================= SOFTWARE DEVELOPMENT ================= */}

            <div className="about-card md:col-span-6 col-span-12 row-span-2">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-3">
                  <h1
                    className="
                      gradient-title
                      md:text-3xl
                      text-2xl
                      font-medium
                      about-text-animation
                    "
                  >
                    Software Development
                  </h1>

                  <p
                    className="
                      md:text-2xl
                      max-w-96
                      leading-relaxed
                      about-text-animation
                    "
                  >
                    Building modern applications with clean code, thoughtful
                    design, and a focus on creating practical solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* ================= AI & ML ================= */}

            <div className="about-card md:col-span-6 col-span-12 row-span-2">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-3">
                  <h1
                    className="
                      gradient-title
                      md:text-3xl
                      text-2xl
                      font-medium
                      about-text-animation
                    "
                  >
                    AI & Machine Learning
                  </h1>

                  <p
                    className="
                      md:text-2xl
                      max-w-96
                      leading-relaxed
                      about-text-animation
                    "
                  >
                    Exploring intelligent technologies and building AI-driven
                    solutions to solve real-world problems.
                  </p>
                </div>
              </div>
            </div>

            {/* ================= MOTIVATION ================= */}

            <div
              className="
                about-card
                motivation-card
                md:col-span-4
                col-span-12
                row-span-2
              "
            >
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-between">
                  {["THINK BETTER", "BUILD BETTER", "BE BETTER"].map(
                    (text, index) => (
                      <h1
                        key={index}
                        className="
                        gradient-title
                        md:text-5xl
                        text-3xl
                        font-bold
                        motivation-text
                      "
                      >
                        {text}
                      </h1>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* ================= SOCIAL LINKS ================= */}

            <div className="social-container contents">
              {bentoSocialLinks.map((item, index) => (
                <div
                  key={index}
                  className="
                    social-card
                    md:col-span-4
                    col-span-12
                    row-span-1
                  "
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      bg-black-300
                      rounded-2xl
                      p-7
                      w-full
                      h-full
                      group
                      cursor-pointer
                      flex
                      items-center
                      justify-between
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-black-100
                    "
                  >
                    {/* Social information */}

                    <div className="flex items-center md:gap-5">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="
                          w-8
                          h-8
                          object-contain
                          transition-transform
                          duration-500
                          group-hover:scale-110
                        "
                      />

                      <h1
                        className="
                          gradient-title
                          md:text-3xl
                          text-xl
                          md:m-0
                          ms-5
                          font-medium
                        "
                      >
                        {item.name}
                      </h1>
                    </div>

                    {/* Arrow */}

                    <div
                      className="
                        lg:block
                        md:hidden
                        group-hover:translate-x-2
                        group-hover:-translate-y-2
                        transition-transform
                        duration-300
                      "
                    >
                      <img
                        src="/images/arrowupright.svg"
                        alt="Open link"
                        className="lg:scale-100 scale-50"
                      />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
