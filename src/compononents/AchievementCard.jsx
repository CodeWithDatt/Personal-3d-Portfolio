const AchievementCard = ({ achievement }) => {
  return (
    <article
      className="
        achievement-card
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-black-300/80
        p-6
        md:p-8
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-white/20
        hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)]
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-64
          w-64
          rounded-full
          bg-blue-50/10
          blur-3xl
          opacity-0
          transition-all
          duration-700
          group-hover:opacity-100
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-32
          h-64
          w-64
          rounded-full
          bg-pink-100/10
          blur-3xl
          opacity-0
          transition-all
          duration-700
          group-hover:opacity-100
        "
      />

      {/* Top Section */}
      <div className="relative flex items-start justify-between gap-5">
        {/* Icon */}
        <div
          className="
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-white/10
            bg-white/[0.05]
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:border-blue-50/30
            group-hover:bg-blue-50/10
          "
        >
          <img
            src={achievement.icon}
            alt={achievement.title}
            className="h-7 w-7 object-contain"
          />
        </div>

        {/* Number */}
        <span
          className="
            text-sm
            font-medium
            tracking-wider
            text-white/30
            transition-colors
            duration-300
            group-hover:text-white/60
          "
        >
          {achievement.number}
        </span>
      </div>

      {/* Content */}
      <div className="relative mt-7">
        {/* Type */}
        <div className="mb-3 flex items-center gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-50/60">
            {achievement.type}
          </span>

          <span className="h-px w-8 bg-white/15" />

          <span className="text-xs text-white/40">{achievement.year}</span>
        </div>

        {/* Title */}
        <h2
          className="
            gradient-title
            text-2xl
            font-semibold
            leading-tight
            md:text-3xl
          "
        >
          {achievement.title}
        </h2>

        {/* Organization */}
        <p className="mt-2 text-sm font-medium text-white/60 md:text-base">
          {achievement.organization}
        </p>

        {/* Description */}
        <p
          className="
            mt-5
            text-sm
            leading-relaxed
            text-white/45
            md:text-base
          "
        >
          {achievement.description}
        </p>
      </div>

      {/* Bottom */}
      <div className="relative mt-7 flex items-center justify-between">
        {/* Category */}
        <span
          className="
            rounded-full
            border
            border-white/10
            bg-white/[0.04]
            px-3
            py-1.5
            text-xs
            text-white/50
            transition-all
            duration-300
            group-hover:border-blue-50/20
            group-hover:text-white/70
          "
        >
          {achievement.category}
        </span>

        {/* View Certificate */}
        {achievement.link && (
          <a
            href={achievement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-2
              text-sm
              font-medium
              text-white/60
              transition-all
              duration-300
              hover:text-white
            "
          >
            <span>View</span>

            <img
              src="/images/arrowupright.svg"
              alt="View certificate"
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </a>
        )}
      </div>

      {/* Bottom Accent */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-0
          bg-gradient-to-r
          from-blue-50
          to-pink-100
          transition-all
          duration-700
          group-hover:w-full
        "
      />
    </article>
  );
};

export default AchievementCard;
