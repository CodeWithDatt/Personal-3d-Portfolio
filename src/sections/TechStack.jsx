import TitleHeader from "../compononents/TitleHeader";
import { iconsList } from "../constants";
import TechIcon from "../compononents/TechIcon";

const TechStack = () => {
  return (
    <section id="tech-stack" className="relative w-full overflow-hidden">
      <div className="w-full md:my-40 my-20">
        {/* Section Header */}
        <div className="container mx-auto md:p-0 px-5">
          <TitleHeader
            title="TECH STACK"
            number="02"
            text="My Go-To Tools for Crafting Solutions"
          />
        </div>

        {/* Tech Stack Marquee */}
        <div className="relative mt-10 md:mt-20">
          {/* Left Gradient */}
          <div
            className="
              tech-stack-gradient-left-box
              pointer-events-none
              absolute
              bottom-0
              left-0
              z-20
              h-full
              w-20
              md:w-36
            "
          />

          {/* Right Gradient */}
          <div
            className="
              tech-stack-gradient-right-box
              pointer-events-none
              absolute
              bottom-0
              right-0
              z-20
              h-full
              w-20
              md:w-36
            "
          />

          {/* Marquee */}
          <div className="marquee h-52">
            <div className="marquee-box md:gap-12 gap-5">
              {/* First set */}
              {iconsList.map((icon, index) => (
                <TechIcon key={`first-${index}`} icon={icon} />
              ))}

              {/* Duplicate set for infinite marquee */}
              {iconsList.map((icon, index) => (
                <TechIcon key={`second-${index}`} icon={icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
