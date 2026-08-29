import GradientSpheres from "../compononents/GradientSpheres";
import TestimonialCard from "../compononents/TestimonialCard";
import TitleHeader from "../compononents/TitleHeader";
import { testimonials } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  useGSAP(() => {
    // Section heading animation
    gsap.from(".testimonial-header", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#testimonials",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Cards animation
    gsap.from(".testimonial-card-wrapper", {
      opacity: 0,
      y: 80,
      scale: 0.95,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".testimonial-grid",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <section
      id="testimonials"
      className="flex-center relative overflow-hidden md:p-0 px-5"
    >
      {/* Background gradient spheres */}
      <GradientSpheres
        sphere1Class="testimonial-gradient-sphere testimonial-sphere-1"
        sphere2Class="testimonial-gradient-sphere testimonial-sphere-2"
      />

      <div className="container relative z-10 w-full md:my-40 my-20">
        {/* Header */}
        <div className="testimonial-header">
          <TitleHeader
            title="TESTIMONIALS"
            number="03"
            text="What people have to say about my work"
          />
        </div>

        {/* Testimonials */}
        <div className="testimonial-grid mt-12 md:mt-20">
          <div className="grid gap-5 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="testimonial-card-wrapper h-full"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
