import { useRef, useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import emailjs from "@emailjs/browser";

emailjs.init("Um40NagmPxC9YUZAO");

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await emailjs.sendForm(
        "service_js1an7v",
        "template_sym6wks",
        form.current,
        "Um40NagmPxC9YUZAO"
      );

      setSuccess("Your message has been sent successfully.");
      form.current.reset();
    } catch (err) {
      console.error("EmailJS send error:", err);

      const message =
        err?.text || err?.message || "Failed to send message.";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatedSection>
      <section
        id="contact"
        className="relative overflow-hidden bg-black py-16 text-white sm:py-20 lg:py-28"
      >
        {/* MAIN GLOW */}
        <div className="absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[#CDFF45]/10 blur-3xl animate-pulse sm:h-[450px] sm:w-[450px] lg:h-[550px] lg:w-[550px]" />

        {/* SIDE LIGHTS */}
        <div className="absolute left-0 top-0 h-full w-[300px] bg-gradient-to-r from-[#CDFF45]/10 to-transparent blur-3xl" />

        <div className="absolute right-0 top-0 h-full w-[300px] bg-gradient-to-l from-[#CDFF45]/10 to-transparent blur-3xl" />

        {/* FLOATING ORBS */}
        <div className="absolute left-10 top-20 h-40 w-40 rounded-full bg-[#CDFF45]/10 blur-3xl animate-[float_8s_ease-in-out_infinite]" />

        <div className="absolute bottom-20 right-10 h-52 w-52 rounded-full bg-[#CDFF45]/10 blur-3xl animate-[float_10s_ease-in-out_infinite]" />

        {/* MOVING CODE BACKGROUND */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.10]">

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-0 top-0 h-full w-[250%]"
          >

            {/* FIRST BLOCK */}
            <pre className="code-bg absolute left-0 top-0 w-1/2">
{`
const sendEmail = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    await emailjs.sendForm(
      "service_js1an7v",
      "template_sym6wks",
      form.current,
      "PUBLIC_KEY"
    );

    setSuccess("Message sent.");
  } catch (err) {
    setError("Something went wrong.");
  }
};

function Contact() {
  return (
    <section className="contact-section">
      <div className="background-glow"></div>
      <div className="floating-orbs"></div>

      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Project Details" />
      </form>
    </section>
  );
}

export default Contact;

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("active");
  });
});
`}
            </pre>

            {/* DUPLICATE FOR LOOP */}
            <pre className="code-bg absolute left-1/2 top-0 w-1/2">
{`
const sendEmail = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    await emailjs.sendForm(
      "service_js1an7v",
      "template_sym6wks",
      form.current,
      "PUBLIC_KEY"
    );

    setSuccess("Message sent.");
  } catch (err) {
    setError("Something went wrong.");
  }
};

function Contact() {
  return (
    <section className="contact-section">
      <div className="background-glow"></div>
      <div className="floating-orbs"></div>

      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Project Details" />
      </form>
    </section>
  );
}

export default Contact;

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("active");
  });
});
`}
            </pre>

          </motion.div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mb-14 max-w-3xl text-center sm:mb-16 lg:mb-20"
          >

            <span className="contact-badge mb-4 inline-flex rounded-full border border-[#CDFF45]/20 bg-[#CDFF45]/5 px-4 py-2 text-xs tracking-[0.2em] text-[#CDFF45] shadow-[0_0_20px_rgba(205,255,69,0.35)] sm:mb-5 sm:px-5 sm:text-sm">
              CONTACT
            </span>

            <h2 className="mb-5 text-3xl font-black leading-tight sm:text-5xl md:text-6xl">
              Let’s work on your
              <span className="block bg-gradient-to-r from-[#CDFF45] via-white to-[#A3E635] bg-clip-text text-transparent">
                next digital project
              </span>
            </h2>

            <p className="text-base leading-relaxed text-white/60 sm:text-lg">
              Whether you need a modern website, responsive user interface,
              or front-end development support, I’m available to help bring
              your ideas to life.
            </p>

          </motion.div>

          {/* Main Grid */}
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-8">

            {/* Left Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[2rem] border border-[#CDFF45]/10 bg-gradient-to-b from-[#111] to-black p-6 shadow-[0_0_60px_rgba(205,255,69,0.05)] sm:p-8 lg:rounded-[2.5rem]"
            >

              <div className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-[#CDFF45]/10 blur-3xl sm:h-52 sm:w-52" />

              <div className="relative z-10">

                <div className="mb-10 sm:mb-12">

                  <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
                    Contact Information
                  </h3>

                  <p className="text-sm leading-relaxed text-white/60 sm:text-base">
                    Feel free to reach out for freelance projects,
                    collaborations, or front-end development opportunities.
                  </p>

                </div>

                <div className="space-y-4 sm:space-y-5">

                  <div className="rounded-2xl border border-[#CDFF45]/10 bg-white/[0.03] p-5 transition duration-300 hover:border-[#CDFF45]/30 sm:rounded-3xl sm:p-6">

                    <p className="mb-2 text-xs tracking-wide text-[#CDFF45] sm:text-sm">
                      EMAIL
                    </p>

                    <h4 className="break-words text-base font-semibold text-white sm:text-lg">
                      ninoverdejo@gmail.com
                    </h4>

                  </div>

                  <div className="rounded-2xl border border-[#CDFF45]/10 bg-white/[0.03] p-5 transition duration-300 hover:border-[#CDFF45]/30 sm:rounded-3xl sm:p-6">

                    <p className="mb-2 text-xs tracking-wide text-[#CDFF45] sm:text-sm">
                      AVAILABILITY
                    </p>

                    <h4 className="text-base font-semibold text-white sm:text-lg">
                      Open for Freelance & Remote Work
                    </h4>

                  </div>

                  <div className="rounded-2xl border border-[#CDFF45]/10 bg-white/[0.03] p-5 transition duration-300 hover:border-[#CDFF45]/30 sm:rounded-3xl sm:p-6">

                    <p className="mb-2 text-xs tracking-wide text-[#CDFF45] sm:text-sm">
                      RESPONSE TIME
                    </p>

                    <h4 className="text-base font-semibold text-white sm:text-lg">
                      Within 24 Hours
                    </h4>

                  </div>

                </div>

              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-[#CDFF45]/10 bg-gradient-to-b from-[#111] to-black p-6 shadow-[0_0_60px_rgba(205,255,69,0.05)] backdrop-blur-xl sm:p-8 lg:rounded-[2.5rem] lg:p-10"
            >

              <form
                ref={form}
                onSubmit={sendEmail}
                className="grid gap-6 sm:gap-7"
              >

                <div className="grid gap-5 md:grid-cols-2 md:gap-6">

                  <div>
                    <label className="mb-3 block text-sm font-medium tracking-wide text-white/100">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="from_name"
                      placeholder="John Doe"
                      className="w-full rounded-2xl border border-[#CDFF45]/15 bg-black/50 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-white/25 focus:border-[#CDFF45]/50 focus:ring-2 focus:ring-[#CDFF45]/20 sm:px-5 sm:py-4 sm:text-base"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-medium tracking-wide text-white/100">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="from_email"
                      placeholder="john@example.com"
                      className="w-full rounded-2xl border border-[#CDFF45]/15 bg-black/50 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-white/25 focus:border-[#CDFF45]/50 focus:ring-2 focus:ring-[#CDFF45]/20 sm:px-5 sm:py-4 sm:text-base"
                      required
                    />
                  </div>

                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium tracking-wide text-white/100">
                    Project Details
                  </label>

                  <textarea
                    name="message"
                    rows="7"
                    placeholder="Tell me about your project, goals, or collaboration idea..."
                    className="w-full resize-none rounded-2xl border border-[#CDFF45]/15 bg-black/50 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-white/25 focus:border-[#CDFF45]/50 focus:ring-2 focus:ring-[#CDFF45]/20 sm:px-5 sm:py-4 sm:text-base"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`group flex items-center justify-center gap-3 rounded-2xl py-3 text-base font-bold text-black transition duration-300 sm:py-4 sm:text-lg ${
                    loading
                      ? "cursor-not-allowed bg-gray-600"
                      : "bg-[#CDFF45] hover:-translate-y-1 hover:bg-[#bdfc24]"
                  }`}
                >
                  {loading ? "Sending Message..." : "Send Message"}

                  {!loading && (
                    <span className="transition duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  )}
                </button>

                {success && (
                  <div className="rounded-2xl border border-[#CDFF45]/20 bg-[#CDFF45]/10 px-5 py-4 text-sm font-medium text-[#CDFF45]">
                    {success}
                  </div>
                )}

                {error && (
                  <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-sm font-medium text-red-400">
                    {error}
                  </div>
                )}

              </form>

            </motion.div>

          </div>

        </div>

        {/* CUSTOM ANIMATIONS */}
        <style>
          {`
            @keyframes jump {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-10px);
              }
            }

            @keyframes float {
              0%, 100% {
                transform: translateY(0px) translateX(0px);
              }
              50% {
                transform: translateY(-30px) translateX(10px);
              }
            }

            .contact-badge {
              animation: jump 1.8s ease-in-out infinite;
            }

            .code-bg {
              color: #CDFF45;
              font-family: "Fira Code", monospace;
              white-space: pre;

              font-size: 15px;
              line-height: 2.2;

              min-width: 100%;
              padding: 70px;

              text-shadow:
                0 0 10px rgba(205,255,69,0.25),
                0 0 20px rgba(205,255,69,0.15);

              background: linear-gradient(
                to right,
                transparent,
                rgba(0,0,0,0.82),
                transparent
              );
            }
          `}
        </style>

      </section>
    </AnimatedSection>
  );
}

export default Contact;