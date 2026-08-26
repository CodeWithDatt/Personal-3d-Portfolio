import React from "react";
import GradientSpheres from "../compononents/GradientSpheres";
import TitleHeader from "../compononents/TitleHeader";
import { Canvas } from "@react-three/fiber";
import { Alien } from "../../public/models/Alien";
import { OrbitControls } from "@react-three/drei";
const About = () => {
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
                    className="md:w-32 w-12 flower"
                    src="/images/flower.svg"
                    alt="flower"
                  />
                </div>
                <div className="mt-5">
                  <h1 className="text-blue-50 md:text-5xl text-3xl">
                    Datt Patel
                  </h1>
                  <p className="md:text-2xl mt-2">
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
              <div className="bg-[#c8d751] hover:cursor-grab w-full md:h-full h-60 rounded-2xl">
                <div className="w-full h-full">
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
            <div className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium">
                    Software Development
                  </h1>
                  <p className="md:text-2xl max-w-96">
                    Building modern, scalable applications with clean code and a
                    focus on practical, user-focused solutions.
                  </p>
                </div>
              </div>
            </div>
            {/* AI & ML Card */}
            <div className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium">
                    AI & Machine Learning
                  </h1>
                  <p className="md:text-2xl max-w-96">
                    Exploring intelligent technologies and building AI-driven
                    solutions to solve real-world problems.
                  </p>
                </div>
              </div>
            </div>
            {/* Motivational Card */}
            <div className="md:col-span-4 col-span-12 row-span-4">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-between">
                  {["THINK BETTER", "BUILD BETTER", "BE BETTER"].map(
                    (text, index) => (
                      <h1
                        className="gradient-title md:text-5xl text-3xl font-bold"
                        key={index}
                      >
                        {text}
                      </h1>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
