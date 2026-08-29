import { footerIconsList } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full bg-black-300 py-10">
      <div className="flex-center flex-col gap-7 md:gap-10">
        {/* Logo */}
        <a
          href="#home"
          aria-label="Go to home"
          className="group"
        >
          <img
            src="/images/logo.png"
            alt="Datt Patel"
            className="
              h-8
              w-8
              object-contain
              transition-all
              duration-500
              group-hover:scale-110
              group-hover:rotate-6
            "
          />
        </a>

        {/* Social Links */}
        <div className="flex items-center gap-8 md:gap-16">
          {footerIconsList.map((icon, index) => (
            <a
              key={`${icon.name}-${index}`}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${icon.name}`}
              className="
                group
                flex
                items-center
                justify-center
                rounded-full
                p-2
                transition-all
                duration-500
                hover:-translate-y-2
              "
            >
              <img
                src={icon.icon}
                alt={icon.name}
                className="
                  h-8
                  w-8
                  object-contain
                  transition-all
                  duration-500
                  group-hover:scale-110
                  md:h-10
                  md:w-10
                "
              />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-sm font-regular text-white/40 md:text-lg">
          © 2026 Datt Patel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;