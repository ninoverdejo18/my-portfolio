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

      alert("Successfully sent message.");
      setSuccess("Successfully sent message.");
      form.current.reset();
    } catch (err) {
      console.error("EmailJS send error:", err);

      const message =
        err?.text || err?.message || "Failed to send message. Please try again.";

      alert(message);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatedSection>
      <section
        id="contact"
        className="py-20 bg-black text-white relative overflow-hidden"
      >

        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#CDFF45]/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#CDFF45]/10 blur-3xl rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center">

          {/* Heading */}
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#CDFF45] via-white to-[#A3E635] bg-clip-text text-transparent">
            Contact Me
          </h2>

          <p className="text-slate-400 mb-10">
            Send me a message and I’ll get back to you.
          </p>

          {/* Form Container */}
          <div className="rounded-[2rem] border border-[#CDFF45]/20 bg-black/70 p-8 shadow-2xl shadow-[#CDFF45]/10 backdrop-blur-xl">

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
                className="p-4 rounded-xl bg-slate-900 border border-[#CDFF45]/20 text-white outline-none transition duration-300 focus:ring-2 focus:ring-[#CDFF45] focus:border-[#CDFF45]"
                required
              />

              {/* Email */}
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                className="p-4 rounded-xl bg-slate-900 border border-[#CDFF45]/20 text-white outline-none transition duration-300 focus:ring-2 focus:ring-[#CDFF45] focus:border-[#CDFF45]"
                required
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="p-4 rounded-xl bg-slate-900 border border-[#CDFF45]/20 text-white outline-none transition duration-300 focus:ring-2 focus:ring-[#CDFF45] focus:border-[#CDFF45] resize-none"
                required
              />

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className={`py-4 rounded-xl font-semibold text-black transition duration-300 ${
                  loading
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#CDFF45] to-[#A3E635] hover:scale-[1.02] hover:shadow-lg hover:shadow-[#CDFF45]/20"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {/* Success Message */}
              {success && (
                <p className="text-[#CDFF45] font-medium">
                  {success}
                </p>
              )}

              {/* Error Message */}
              {error && (
                <p className="text-red-400 font-medium">
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