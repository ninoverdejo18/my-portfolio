import { useRef, useState } from "react";
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

      setSuccess("Successfully sent message.");
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
        className="relative overflow-hidden bg-black py-20 text-white"
      >
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(205,255,69,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(205,255,69,0.08)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

          {/* Heading */}
          <h2 className="mb-6 text-4xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-[#CDFF45] via-white to-[#A3E635] bg-clip-text text-transparent">
              Contact Me
            </span>
          </h2>

          <p className="mb-10 text-slate-400">
            Send me a message and I’ll get back to you.
          </p>

          {/* Form Container */}
          <div className="rounded-[2rem] border border-[#CDFF45]/20 bg-black/70 p-8 backdrop-blur-xl">

            <form
              ref={form}
              onSubmit={sendEmail}
              className="grid gap-5"
            >

              {/* Name */}
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="rounded-xl border border-[#CDFF45]/20 bg-slate-900 p-4 text-white outline-none transition duration-300 focus:border-[#CDFF45] focus:ring-2 focus:ring-[#CDFF45]"
                required
              />

              {/* Email */}
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                className="rounded-xl border border-[#CDFF45]/20 bg-slate-900 p-4 text-white outline-none transition duration-300 focus:border-[#CDFF45] focus:ring-2 focus:ring-[#CDFF45]"
                required
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="resize-none rounded-xl border border-[#CDFF45]/20 bg-slate-900 p-4 text-white outline-none transition duration-300 focus:border-[#CDFF45] focus:ring-2 focus:ring-[#CDFF45]"
                required
              />

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className={`rounded-xl py-4 font-semibold text-black transition duration-300 ${
                  loading
                    ? "cursor-not-allowed bg-gray-600"
                    : "bg-gradient-to-r from-[#CDFF45] to-[#A3E635] hover:scale-[1.02]"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {/* Success Message */}
              {success && (
                <p className="font-medium text-[#CDFF45]">
                  {success}
                </p>
              )}

              {/* Error Message */}
              {error && (
                <p className="font-medium text-red-400">
                  {error}
                </p>
              )}

            </form>

          </div>

        </div>
      </section>
    </AnimatedSection>
  );
}

export default Contact;