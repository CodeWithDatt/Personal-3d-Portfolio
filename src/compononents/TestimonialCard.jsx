const TestimonialCard = ({ testimonial }) => {
  return (
    <article
      className="
        group
        relative
        col-span-1
        h-full
        overflow-hidden
        rounded-xl
        bg-black-300
        p-6
        transition-all
        duration-500
        hover:-translate-y-1
        hover:bg-black-100
        md:p-10
      "
    >
      {/* Subtle hover glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-40
          w-40
          rounded-full
          bg-blue-50/10
          blur-3xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Top section */}
      <div className="relative z-10 flex items-start justify-between">
        <img
          src={testimonial.imgPath}
          alt={testimonial.name}
          className="
            h-20
            w-20
            rounded-xl
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
            md:h-36
            md:w-36
          "
        />

        <img
          src="/images/quote.png"
          alt="Quote"
          className="
            h-12
            w-12
            opacity-70
            transition-transform
            duration-500
            group-hover:rotate-6
            md:h-28
            md:w-28
          "
        />
      </div>

      {/* Review */}
      <div className="relative z-10 mt-8 md:mt-10">
        <p
          className="
            text-base
            font-light
            leading-relaxed
            text-white/70
            md:text-2xl
          "
        >
          {testimonial.review}
        </p>
      </div>

      {/* Bottom information */}
      <div
        className="
          relative
          z-10
          mt-10
          flex
          flex-col
          justify-between
          gap-6
          md:mt-20
          md:flex-row
          md:items-end
        "
      >
        {/* Name & position */}
        <div>
          <h2
            className="
              mb-1
              text-lg
              font-medium
              text-blue-50
              md:text-3xl
            "
          >
            {testimonial.name}
          </h2>

          <p
            className="
              text-sm
              font-light
              opacity-60
              md:text-xl
            "
          >
            {testimonial.pos}
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3">
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              transition-all
              duration-300
              hover:scale-110
              hover:bg-white
            "
          >
            <img src="/images/x.svg" alt="X" className="h-5 w-5" />
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              transition-all
              duration-300
              hover:scale-110
              hover:bg-white
            "
          >
            <img src="/images/fb.svg" alt="Facebook" className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Bottom hover line */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-0
          bg-blue-50
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </article>
  );
};

export default TestimonialCard;
