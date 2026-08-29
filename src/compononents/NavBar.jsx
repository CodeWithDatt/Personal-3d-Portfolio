import { useState } from "react";
import { navItems } from "../constants";

const NavBar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleNavClick = (name) => {
    setActiveItem(name);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-5 md:px-0">
      <div className="container mx-auto">
        <nav
          className="
            mt-4
            flex
            items-center
            justify-between
            rounded-full
            border
            border-white/10
            bg-black-100/50
            px-4
            py-2.5
            shadow-[0_8px_40px_rgba(0,0,0,0.25)]
            backdrop-blur-xl
            transition-all
            duration-500
            hover:border-white/15
            hover:bg-black-100/60
            md:mt-6
            md:px-5
          "
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNavClick("Home")}
            className="group relative flex items-center justify-center"
            aria-label="Go to home"
          >
            {/* Glow */}
            <span
              className="
                absolute
                h-10
                w-10
                rounded-full
                bg-blue-50/20
                blur-xl
                opacity-0
                transition-all
                duration-500
                group-hover:opacity-100
                group-hover:scale-125
                md:h-12
                md:w-12
              "
            />

            {/* Logo */}
            <img
              src="/images/logo.png"
              alt="Datt Patel"
              className="
                relative
                h-9
                w-9
                object-contain
                transition-all
                duration-500
                group-hover:scale-110
                md:h-11
                md:w-11
              "
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item, index) => {
              const isActive = activeItem === item.name;

              return (
                <a
                  key={`${item.name}-${index}`}
                  href={item.href}
                  onClick={() => handleNavClick(item.name)}
                  className={`
                    group
                    relative
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    lg:px-5
                    lg:text-base
                    ${
                      isActive ? "text-white" : "text-white/55 hover:text-white"
                    }
                  `}
                >
                  {/* Hover / active background */}
                  <span
                    className={`
                      absolute
                      inset-0
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "bg-white/[0.06]"
                          : "bg-transparent group-hover:bg-white/[0.04]"
                      }
                    `}
                  />

                  {/* Text */}
                  <span className="relative z-10">{item.name}</span>

                  {/* Active indicator */}
                  <span
                    className={`
                      absolute
                      bottom-1.5
                      left-1/2
                      h-[2px]
                      -translate-x-1/2
                      rounded-full
                      bg-blue-50
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "w-5 opacity-100"
                          : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-100"
                      }
                    `}
                  />
                </a>
              );
            })}
          </div>

          {/* Right side status */}
          <div className="hidden items-center gap-2 md:flex">
            {/* Status dot */}
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-blue-50
                  opacity-60
                "
              />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-50" />
            </span>

            <span className="text-xs font-medium text-white/50 lg:text-sm">
              Available for opportunities
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
