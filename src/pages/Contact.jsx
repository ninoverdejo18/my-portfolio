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
        className="relative overflow-hidden bg-black py-28 text-white"
      >

        {/* Background Effects */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#CDFF45]/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(205,255,69,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(205,255,69,0.04)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mb-20 max-w-3xl text-center"
          >

            <span className="mb-5 inline-flex rounded-full border border-[#CDFF45]/20 bg-[#CDFF45]/5 px-5 py-2 text-sm tracking-[0.2em] text-[#CDFF45]">
              CONTACT
            </span>

            <h2 className="mb-6 text-5xl font-black leading-tight md:text-6xl">
              Let’s work on your
              <span className="block bg-gradient-to-r from-[#CDFF45] via-white to-[#A3E635] bg-clip-text text-transparent">
                next digital project
              </span>
            </h2>

            <p className="text-lg leading-relaxed text-white/60">
              Whether you need a modern website, responsive user interface,
              or front-end development support, I’m available to help bring
              your ideas to life.
            </p>

          </motion.div>

          {/* Main Grid */}
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">

            {/* Left Professional Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[2.5rem] border border-[#CDFF45]/10 bg-gradient-to-b from-[#111] to-black p-8 shadow-[0_0_60px_rgba(205,255,69,0.05)]"
            >

              {/* Glow */}
              <div className="absolute -left-16 top-10 h-52 w-52 rounded-full bg-[#CDFF45]/10 blur-3xl" />

              <div className="relative z-10">

                <div className="mb-12">

                  <h3 className="mb-4 text-3xl font-bold">
                    Contact Information
                  </h3>

                  <p className="leading-relaxed text-white/60">
                    Feel free to reach out for freelance projects,
                    collaborations, or front-end development opportunities.
                  </p>

                </div>

                {/* Contact Cards */}
                <div className="space-y-5">

                  <div className="rounded-3xl border border-[#CDFF45]/10 bg-white/[0.03] p-6 transition duration-300 hover:border-[#CDFF45]/30">

                    <p className="mb-2 text-sm tracking-wide text-[#CDFF45]">
                      EMAIL
                    </p>

                    <h4 className="text-lg font-semibold text-white">
                      ninoverdejo@gmail.com
                    </h4>

                  </div>

                  <div className="rounded-3xl border border-[#CDFF45]/10 bg-white/[0.03] p-6 transition duration-300 hover:border-[#CDFF45]/30">

                    <p className="mb-2 text-sm tracking-wide text-[#CDFF45]">
                      AVAILABILITY
                    </p>

                    <h4 className="text-lg font-semibold text-white">
                      Open for Freelance & Remote Work
                    </h4>

                  </div>

                  <div className="rounded-3xl border border-[#CDFF45]/10 bg-white/[0.03] p-6 transition duration-300 hover:border-[#CDFF45]/30">

                    <p className="mb-2 text-sm tracking-wide text-[#CDFF45]">
                      RESPONSE TIME
                    </p>

                    <h4 className="text-lg font-semibold text-white">
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
              className="rounded-[2.5rem] border border-[#CDFF45]/10 bg-gradient-to-b from-[#111] to-black p-10 shadow-[0_0_60px_rgba(205,255,69,0.05)] backdrop-blur-xl"
            >

              <form
                ref={form}
                onSubmit={sendEmail}
                className="grid gap-7"
              >

                {/* Name & Email */}
                <div className="grid gap-6 md:grid-cols-2">

                  <div>
                    <label className="mb-3 block text-sm font-medium tracking-wide text-white/70">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="from_name"
                      placeholder="John Doe"
                      className="w-full rounded-2xl border border-[#CDFF45]/15 bg-black/50 px-5 py-4 text-white outline-none transition duration-300 placeholder:text-white/25 focus:border-[#CDFF45]/50 focus:ring-2 focus:ring-[#CDFF45]/20"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-medium tracking-wide text-white/70">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="from_email"
                      placeholder="john@example.com"
                      className="w-full rounded-2xl border border-[#CDFF45]/15 bg-black/50 px-5 py-4 text-white outline-none transition duration-300 placeholder:text-white/25 focus:border-[#CDFF45]/50 focus:ring-2 focus:ring-[#CDFF45]/20"
                      required
                    />
                  </div>

                </div>

                {/* Subject */}
                <div>
                  <label className="mb-3 block text-sm font-medium tracking-wide text-white/70">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry"
                    className="w-full rounded-2xl border border-[#CDFF45]/15 bg-black/50 px-5 py-4 text-white outline-none transition duration-300 placeholder:text-white/25 focus:border-[#CDFF45]/50 focus:ring-2 focus:ring-[#CDFF45]/20"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="mb-3 block text-sm font-medium tracking-wide text-white/70">
                    Project Details
                  </label>

                  <textarea
                    name="message"
                    rows="7"
                    placeholder="Tell me about your project, goals, or collaboration idea..."
                    className="w-full resize-none rounded-2xl border border-[#CDFF45]/15 bg-black/50 px-5 py-4 text-white outline-none transition duration-300 placeholder:text-white/25 focus:border-[#CDFF45]/50 focus:ring-2 focus:ring-[#CDFF45]/20"
                    required
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`group flex items-center justify-center gap-3 rounded-2xl py-4 text-lg font-bold text-black transition duration-300 ${
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

                {/* Success Message */}
                {success && (
                  <div className="rounded-2xl border border-[#CDFF45]/20 bg-[#CDFF45]/10 px-5 py-4 text-sm font-medium text-[#CDFF45]">
                    {success}
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-sm font-medium text-red-400">
                    {error}
                  </div>
                )}

              </form>

            </motion.div>

          </div>

        </div>
      </section>
    </AnimatedSection>
  );
}

export default Contact;