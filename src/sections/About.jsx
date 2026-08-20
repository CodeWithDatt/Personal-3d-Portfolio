import React from "react";
import GradientSpheres from "../compononents/GradientSpheres";
import TitleHeader from "../compononents/TitleHeader";

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
                    className="md:w-32 w-12 flower"s
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
