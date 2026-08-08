import React from "react";
import GradientSpheres from "../compononents/GradientSpheres";

const About = () => {
  return (
    <section
      id="about"
      className="flex-center relative md:p-0 px-5 border border-red-500"
    >
      <GradientSpheres
        sphere1Class={"about-gradient-sphere about-sphere-1"}
        sphere2Class={"about-gradient-sphere about-sphere-2"}
      />

        <div className="container h-full w-full md:my-40 my-20 relative z-10">

        </div>
    </section>
  );
};

export default About;