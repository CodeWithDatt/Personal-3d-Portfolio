import React from "react";
import GradientSpheres from "../compononents/GradientSpheres";
import TitleHeader from "../compononents/TitleHeader";
import { Canvas } from "@react-three/fiber";
import { Alien } from "../../public/models/Alien";
import { OrbitControls } from "@react-three/drei";
import { div } from "three/tsl";
import { bentoSocialLinks } from "../constants";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const About = () => {
  useGSAP(() => {
    // Slide-in animation for the cards
    gsap.from("#card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
      },
    });

    gsap.from("#left-ani", {
      opacity: 0,
      x: "-50%",
      stagger: 0.2,
      duration: 1.2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
      },
    });

    gsap.from("#right-ani", {
      opacity: 0,
      x: "50%",
      stagger: 0.2,
      duration: 1.2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
      },
    });

    // Staggered text animations
    gsap.from(".animated-text", {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.6,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
      },
    });
  });

  return (
    <section id="about" className="flex-center relative md:p-0 px-5">
      <GradientSpheres
        sphere1Class={"about-gradient-sphere about-sphere-1"}
        sphere2Class={"about-gradient-sphere about-sphere-2"}
      />

      <div className="container h-full w-full md:my-40 my-20 relative z-10">
        <TitleHeader
          title={"About Me"}
          text={"Passionate Creator , Lifelong Learner"}
          number={"01"}
        />
        <div className="md:mt-20 mt-10">
          <div className="grid grid-cols-12 md:grid-rows-12 gap-5">
            <div className="md:col-span-7 col-span-12 row-span-5 ">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div>
                  <img
                    id="left-ani"
                    className="md:w-32 w-12 flower"
                    src="/images/flower.svg"
                    alt="flower"
                  />
                </div>
                <div className="mt-5">
                  <h1
                    id="left-ani"
                    className="text-blue-50 md:text-5xl text-3xl"
                  >
                    Datt Patel
                  </h1>
                  <p id="left-ani" className="md:text-2xl mt-2">
                    Datt Patel I am an Information Technology student and
                    aspiring software engineer with a passion for software
                    development, artificial intelligence, and machine learning.
                    I enjoy building modern web applications, exploring new
                    technologies, and turning ideas into practical projects. I
                    have experience working with technologies such as React,
                    JavaScript, Python, Java, Node.js, MongoDB, Firebase, and
                    Three.js, while continuously improving my problem-solving
                    and development skills.
                  </p>
                </div>
              </div>
            </div>
            {/* 3D cute alien */}
            <div className="md:col-span-5 col-span-12 row-span-5">
              <div className="bg-[#c8d751] hover:cursor-grab w-full md:h-full h-60 rounded-2xl ">
                <div id="right-ani" className="w-full h-full">
                  <Canvas>
                    <OrbitControls enableZoom={false} />
                    <Alien
                      scale={2}
                      position={[0, -5.5, 0]}
                      rotation={[0, -0.5, 0]}
                    />
                  </Canvas>
                </div>
              </div>
            </div>
            {/* Software Development Card */}
            <div id="card" className="md:col-span-6 col-span-12 row-span-2">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium animated-text">
                    Software Development
                  </h1>
                  <p className="md:text-2xl max-w-96 animated-text">
                    Building modern, scalable applications with clean code and a
                    focus on practical, user-focused solutions.
                  </p>
                </div>
              </div>
            </div>
            {/* AI & ML Card */}
            <div id="card" className="md:col-span-6 col-span-12 row-span-2">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium animated-text">
                    AI & Machine Learning
                  </h1>
                  <p className="md:text-2xl max-w-96 animated-text">
                    Exploring intelligent technologies and building AI-driven
                    solutions to solve real-world problems.
                  </p>
                </div>
              </div>
            </div>
            {/* Motivational Card */}
            <div id="card" className="md:col-span-4 col-span-12 row-span-2">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-between">
                  {["THINK BETTER", "BUILD BETTER", "BE BETTER"].map(
                    (text, index) => (
                      <h1
                        className="gradient-title md:text-5xl text-3xl font-bold animated-text"
                        key={index}
                      >
                        {text}
                      </h1>
                    ),
                  )}
                </div>
              </div>
            </div>
            {/* Bento Social Links */}
            {bentoSocialLinks.map((item, index) => (
              <div key={index} className="md:col-span-4 col-span-12 row-span-1">
                <div className="bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer">
                  <div className="flex justify-between items-center h-full">
                    <div className="flex items-center md:gap-5">
                      <img src={item.icon} alt={item.icon} />
                      <h1 className="gradient-title md:text-3xl text-xl md:m-0 ms-5 font-medium">
                        {item.name}
                      </h1>
                    </div>
                    <div className="lg:block md:hidden group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform ">
                      <img
                        src="images/arrowupright.svg"
                        alt="arrow-up"
                        className="lg:scale-100 scale-50"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
