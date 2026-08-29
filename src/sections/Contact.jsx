import ContactExperience from "../compononents/ContactExperience";
import ContactForm from "../compononents/ContactForm";
import TitleHeader from "../compononents/TitleHeader";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative flex-center overflow-hidden px-5 md:px-0"
    >
      <div className="container relative z-10 h-full w-full md:my-40 my-20">
        {/* ================= HEADER ================= */}
        <TitleHeader
          title="CONTACT ME"
          number="07"
          text="Let's collaborate and build something meaningful"
        />

        {/* ================= CONTENT ================= */}
        <div className="mt-12 md:mt-20">
          <div className="grid grid-cols-12 items-center gap-10 md:gap-5">
            {/* ================= CONTACT FORM ================= */}
            <div className="relative z-20 col-span-12 md:col-span-5">
              <ContactForm />
            </div>

            {/* ================= 3D EXPERIENCE ================= */}
            <div className="relative col-span-12 md:col-span-7">
              <div
                className="
                  relative
                  h-96
                  w-full
                  md:absolute
                  md:left-0
                  md:top-1/2
                  md:-translate-y-1/2
                  md:h-[650px]
                "
              >
                <ContactExperience />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
