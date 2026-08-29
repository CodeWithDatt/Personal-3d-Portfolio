import { useEffect, useRef, useState } from "react";
import { slides } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const isAnimating = useRef(false);
  const currentIndex = useRef(0);

  // Last slide is a duplicate of the first slide
  const totalSlides = slides.length - 1;

  /*
   * Move carousel to a specific slide
   */
  const goToSlide = (index) => {
    if (index < 0 || index >= totalSlides) return;
    if (isAnimating.current) return;
    if (index === currentIndex.current) return;

    isAnimating.current = true;
    currentIndex.current = index;

    setCurrentSlide(index);

    gsap.to(trackRef.current, {
      x: `-${index * 63}vw`,
      duration: 0.9,
      ease: "power3.inOut",
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  };

  /*
   * Scroll control
   */
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const handleWheel = (event) => {
      const delta = event.deltaY;

      /*
       * Scrolling DOWN
       */
      if (delta > 0) {
        // There are still projects to show
        if (currentIndex.current < totalSlides - 1) {
          event.preventDefault();

          goToSlide(currentIndex.current + 1);
        }

        /*
         * If we're already at the last project,
         * DON'T prevent the event.
         *
         * This allows the page to continue scrolling
         * to the next section.
         */
      }

      /*
       * Scrolling UP
       */
      if (delta < 0) {
        // There are previous projects
        if (currentIndex.current > 0) {
          event.preventDefault();

          goToSlide(currentIndex.current - 1);
        }

        /*
         * At project 1 we don't prevent scrolling,
         * allowing the page to go back to the previous section.
         */
      }
    };

    /*
     * Use non-passive listener so preventDefault works.
     */
    section.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      section.removeEventListener("wheel", handleWheel);
    };
  }, []);

  /*
   * GSAP ScrollTrigger
   *
   * This makes the carousel section feel like a
   * pinned horizontal-scrolling section.
   */
  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        invalidateOnRefresh: true,
      });
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      {/* Project carousel */}
      <div className="relative w-full lg:h-[70vh] md:h-[55vh] h-[60vh]">
        {/* Left fade */}
        <div
          className="
            carousel-gradient-left-box
            pointer-events-none
            absolute
            bottom-0
            left-0
            z-20
            h-full
            w-16
            md:w-52
          "
        />

        {/* Right fade */}
        <div
          className="
            carousel-gradient-right-box
            pointer-events-none
            absolute
            bottom-0
            right-0
            z-20
            h-full
            w-16
            md:w-52
          "
        />

        {/* Track wrapper */}
        <div className="absolute top-0 -left-[43vw] w-full">
          {/* Track */}
          <div
            ref={trackRef}
            className="
              flex
              items-center
              gap-[3vw]
              w-full
              lg:h-[70vh]
              md:h-[55vh]
              h-[60vh]
            "
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="
                  slider-item
                  group
                  relative
                  h-full
                  w-[60vw]
                  flex-none
                  overflow-hidden
                  rounded-2xl
                "
              >
                {/* Image */}
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* Image overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/95
                    via-black/30
                    to-transparent
                  "
                />

                {/* Project information */}
                <div className="absolute bottom-0 left-0 w-full p-5 md:p-7">
                  <div
                    className="
                    flex
                    flex-col
                    gap-5
                    md:flex-row
                    md:items-end
                    md:justify-between
                  "
                  >
                    {/* Project title */}
                    <div>
                      <h2
                        className="
                          gradient-title
                          text-3xl
                          font-semibold
                          md:text-5xl
                        "
                      >
                        {slide.title}
                      </h2>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-3">
                      {/* Live Demo */}
                      <a
                        href={slide.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onWheel={(e) => e.stopPropagation()}
                        className="
                          flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-white/20
                          bg-white/10
                          px-4
                          py-2.5
                          text-sm
                          text-white
                          backdrop-blur-md
                          transition-all
                          duration-300
                          hover:bg-white
                          hover:text-black
                          md:px-5
                          md:py-3
                          md:text-base
                        "
                      >
                        <span>Live Demo</span>

                        <img
                          src="/images/arrowupright.svg"
                          alt="Live Demo"
                          className="
                            h-4
                            w-4
                            transition-transform
                            duration-300
                            md:h-5
                            md:w-5
                          "
                        />
                      </a>

                      {/* GitHub */}
                      <a
                        href={slide.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onWheel={(e) => e.stopPropagation()}
                        className="
                          flex
                          items-center
                          gap-2
                          rounded-full
                          bg-white
                          px-4
                          py-2.5
                          text-sm
                          text-black
                          transition-all
                          duration-300
                          hover:bg-pink-100
                          md:px-5
                          md:py-3
                          md:text-base
                        "
                      >
                        <img
                          src="/images/github.svg"
                          alt="GitHub"
                          className="h-4 w-4 md:h-5 md:w-5"
                        />

                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom controls */}
      <div
        className="
          mt-8
          flex
          items-center
          justify-between
          px-5
          md:mt-10
          md:px-0
        "
      >
        {/* Counter */}
        <div className="flex items-center gap-3 text-white/50">
          <span className="text-lg font-medium text-white md:text-xl">
            {String(currentSlide + 1).padStart(2, "0")}
          </span>

          <span>/</span>

          <span>{String(totalSlides).padStart(2, "0")}</span>
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-3">
          {/* Previous */}
          <button
            type="button"
            onClick={() => goToSlide(currentIndex.current - 1)}
            disabled={currentSlide === 0}
            aria-label="Previous project"
            className="
              flex-center
              h-12
              w-12
              rounded-full
              border
              border-white/10
              bg-black-300
              transition-all
              duration-300
              hover:bg-blue-50
              active:scale-90
              disabled:cursor-not-allowed
              disabled:opacity-30
            "
          >
            <img
              src="/images/CaretLeft.svg"
              alt="Previous"
              className="h-5 w-5"
            />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={() => goToSlide(currentIndex.current + 1)}
            disabled={currentSlide === totalSlides - 1}
            aria-label="Next project"
            className="
              flex-center
              h-12
              w-12
              rounded-full
              border
              border-white/10
              bg-black-300
              transition-all
              duration-300
              hover:bg-pink-100
              active:scale-90
              disabled:cursor-not-allowed
              disabled:opacity-30
            "
          >
            <img src="/images/CaretRight.svg" alt="Next" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
