import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as Z from "zod";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const contactFormSchema = Z.object({
  name: Z.string().trim().min(2, "Name must be at least 2 characters"),

  email: Z.string().trim().email("Please enter a valid email address"),

  subject: Z.string().trim().min(3, "Subject must be at least 3 characters"),

  message: Z.string().trim().min(10, "Message must be at least 10 characters"),
});

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sendError, setSendError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setSuccess(false);
    setSendError("");

    try {
      const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

      if (!serviceID || !templateID || !publicKey) {
        throw new Error("EmailJS environment variables are missing.");
      }

      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_name: "Datt Patel",
        reply_to: data.email,
      };

      await emailjs.send(serviceID, templateID, templateParams, {
        publicKey,
      });

      setSuccess(true);
      reset(initialValues);
    } catch (error) {
      console.error("EmailJS Error:", error);

      setSendError("Unable to send your message right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-w-0">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full min-w-0 flex-col gap-6 text-[#a7a7a7] sm:gap-7"
      >
        {/* ================= NAME ================= */}
        <div className="w-full min-w-0">
          <label
            htmlFor="name"
            className="mb-2 block text-lg font-semibold text-white md:text-2xl"
          >
            Name
          </label>

          <input
            id="name"
            type="text"
            placeholder="Your name"
            autoComplete="name"
            {...register("name")}
            className="
              box-border
              block
              w-full
              min-w-0
              rounded-md
              bg-black-300
              px-4
              py-3.5
              text-sm
              font-light
              text-white
              outline-none
              transition-all
              duration-300
              placeholder:text-white/30
              focus:ring-1
              focus:ring-blue-50
              md:py-4
              md:text-base
            "
          />

          {errors.name && (
            <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>

        {/* ================= EMAIL ================= */}
        <div className="w-full min-w-0">
          <label
            htmlFor="email"
            className="mb-2 block text-lg font-semibold text-white md:text-2xl"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            placeholder="hello@example.com"
            autoComplete="email"
            {...register("email")}
            className="
              box-border
              block
              w-full
              min-w-0
              rounded-md
              bg-black-300
              px-4
              py-3.5
              text-sm
              font-light
              text-white
              outline-none
              transition-all
              duration-300
              placeholder:text-white/30
              focus:ring-1
              focus:ring-blue-50
              md:py-4
              md:text-base
            "
          />

          {errors.email && (
            <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>

        {/* ================= SUBJECT ================= */}
        <div className="w-full min-w-0">
          <label
            htmlFor="subject"
            className="mb-2 block text-lg font-semibold text-white md:text-2xl"
          >
            Subject
          </label>

          <input
            id="subject"
            type="text"
            placeholder="How can I help you?"
            {...register("subject")}
            className="
              box-border
              block
              w-full
              min-w-0
              rounded-md
              bg-black-300
              px-4
              py-3.5
              text-sm
              font-light
              text-white
              outline-none
              transition-all
              duration-300
              placeholder:text-white/30
              focus:ring-1
              focus:ring-blue-50
              md:py-4
              md:text-base
            "
          />

          {errors.subject && (
            <p className="mt-2 text-sm text-red-400">
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* ================= MESSAGE ================= */}
        <div className="w-full min-w-0">
          <label
            htmlFor="message"
            className="mb-2 block text-lg font-semibold text-white md:text-2xl"
          >
            Message
          </label>

          <textarea
            id="message"
            rows="5"
            placeholder="Tell me about your project..."
            {...register("message")}
            className="
              box-border
              block
              w-full
              min-w-0
              resize-none
              rounded-md
              bg-black-300
              px-4
              py-3.5
              text-sm
              font-light
              text-white
              outline-none
              transition-all
              duration-300
              placeholder:text-white/30
              focus:ring-1
              focus:ring-blue-50
              md:py-4
              md:text-base
            "
          />

          {errors.message && (
            <p className="mt-2 text-sm text-red-400">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* ================= SUCCESS MESSAGE ================= */}
        {success && (
          <div
            className="
              rounded-md
              border
              border-green-400/20
              bg-green-400/10
              px-4
              py-3
              text-sm
              text-green-300
            "
          >
            Message sent successfully. Thank you for reaching out!
          </div>
        )}

        {/* ================= ERROR MESSAGE ================= */}
        {sendError && (
          <div
            className="
              rounded-md
              border
              border-red-400/20
              bg-red-400/10
              px-4
              py-3
              text-sm
              text-red-300
            "
          >
            {sendError}
          </div>
        )}

        {/* ================= SUBMIT BUTTON ================= */}
        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            rounded-md
            bg-blue-50
            px-4
            py-4
            font-semibold
            text-white
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-blue-300
            hover:shadow-[0_10px_30px_rgba(80,120,255,0.25)]
            active:scale-[0.98]
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
