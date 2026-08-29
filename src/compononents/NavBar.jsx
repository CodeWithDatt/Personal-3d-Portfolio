import { useState } from "react";
import { navItems } from "../constants";

const NavBar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleNavClick = (name) => {
    setActiveItem(name);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-4 sm:px-5 md:px-0">
      <div className="container mx-auto">
        <nav
          className="
            relative
            mt-4
            flex
            items-center
            justify-between
            rounded-full
            border
            border-white/10
            bg-black-100/55
            px-3
            py-2.5
            shadow-[0_10px_50px_rgba(0,0,0,0.35)]
            backdrop-blur-2xl
            transition-all
            duration-500
            hover:border-white/15
            hover:bg-black-100/65
            md:mt-6
            md:px-5
          "
        >
          {/* =====================================================
              LOGO
          ====================================================== */}
          <a
            href="#home"
            onClick={() => handleNavClick("Home")}
            className="
              group
              relative
              flex
              shrink-0
              items-center
              justify-center
            "
            aria-label="Go to home"
          >
            {/* Logo glow */}
            <span
              className="
                pointer-events-none
                absolute
                h-10
                w-10
                rounded-full
                bg-blue-50/20
                blur-xl
                opacity-0
                transition-all
                duration-500
                group-hover:scale-150
                group-hover:opacity-100
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
                z-10
                h-9
                w-9
                object-contain
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:rotate-3
                md:h-11
                md:w-11
              "
            />
          </a>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}
          <div
            className="
              hidden
              items-center
              gap-0.5
              md:flex
              lg:gap-1
            "
          >
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
                    overflow-hidden
                    rounded-full
                    px-3
                    py-2
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    lg:px-4
                    lg:text-[15px]
                    xl:px-5
                    ${
                      isActive ? "text-white" : "text-white/50 hover:text-white"
                    }
                  `}
                >
                  {/* Active / Hover background */}
                  <span
                    className={`
                      absolute
                      inset-0
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "bg-white/[0.07]"
                          : "bg-transparent group-hover:bg-white/[0.04]"
                      }
                    `}
                  />

                  {/* Subtle hover glow */}
                  <span
                    className="
                      pointer-events-none
                      absolute
                      -bottom-5
                      left-1/2
                      h-8
                      w-8
                      -translate-x-1/2
                      rounded-full
                      bg-blue-50/20
                      blur-xl
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />

                  {/* Navigation text */}
                  <span className="relative z-10 whitespace-nowrap">
                    {item.name}
                  </span>

                  {/* Active indicator */}
                  <span
                    className={`
                      absolute
                      bottom-1
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

          {/* =====================================================
              RIGHT SIDE
          ====================================================== */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Availability status */}
            <div
              className="
                hidden
                items-center
                gap-2
                rounded-full
                border
                border-white/5
                bg-white/[0.02]
                px-3
                py-2
                lg:flex
              "
            >
              {/* Animated status dot */}
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
                    opacity-50
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-blue-50
                    shadow-[0_0_12px_rgba(80,120,255,0.8)]
                  "
                />
              </span>

              <span className="text-xs font-medium text-white/45">
                Available
              </span>
            </div>

            {/* =================================================
                RESUME BUTTON
            ================================================== */}
            <a
              href="/resume/Datt-Patel-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                flex
                items-center
                gap-2
                overflow-hidden
                rounded-full
                border
                border-white/20
                bg-white
                px-3.5
                py-2.5
                text-sm
                font-semibold
                text-black
                shadow-[0_5px_20px_rgba(255,255,255,0.08)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-blue-50
                hover:bg-blue-50
                hover:shadow-[0_10px_35px_rgba(80,120,255,0.3)]
                active:scale-95
                md:px-4
                lg:px-5
              "
            >
              {/* Moving shine */}
              <span
                className="
                  pointer-events-none
                  absolute
                  -left-[100%]
                  top-0
                  h-full
                  w-[50%]
                  skew-x-[-20deg]
                  bg-white/50
                  transition-all
                  duration-700
                  group-hover:left-[150%]
                "
              />

              {/* Resume icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="
                  relative
                  z-10
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  md:h-[18px]
                  md:w-[18px]
                "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5V6.75A2.25 2.25 0 0 0 12.375 4.5h-3.75A2.25 2.25 0 0 0 6.375 6.75v10.5A2.25 2.25 0 0 0 8.625 19.5h6.75a2.25 2.25 0 0 0 2.25-2.25v-1.5m-7.5-7.5h3m-3 3h3m-3 3h1.5"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 15.75h4.5m0 0-2.25-2.25m2.25 2.25-2.25 2.25"
                />
              </svg>

              <span className="relative z-10">Resume</span>
            </a>

            {/* =================================================
                MOBILE RESUME ICON
            ================================================== */}
            <a
              href="/resume/Datt-Patel-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Resume"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.05]
                text-white
                transition-all
                duration-300
                hover:border-blue-50/30
                hover:bg-white
                hover:text-black
                active:scale-90
                md:hidden
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5V6.75A2.25 2.25 0 0 0 12.375 4.5h-3.75A2.25 2.25 0 0 0 6.375 6.75v10.5A2.25 2.25 0 0 0 8.625 19.5h6.75a2.25 2.25 0 0 0 2.25-2.25v-1.5"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 9h3m-3 3h3m-3 3h1.5"
                />
              </svg>
            </a>
          </div>

          {/* =====================================================
              NAVBAR EDGE GLOW
          ====================================================== */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-1/2
              h-px
              w-1/3
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-blue-50/30
              to-transparent
              opacity-50
            "
          />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
