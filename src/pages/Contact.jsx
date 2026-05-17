import { useRef, useState } from "react"
import AnimatedSection from "../components/AnimatedSection"
import emailjs from "@emailjs/browser"

emailjs.init("Um40NagmPxC9YUZAO")

function Contact() {
  const form = useRef()

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const sendEmail = async (e) => {
    e.preventDefault()

    setLoading(true)
    setSuccess("")
    setError("")

    try {
      await emailjs.sendForm(
        "service_js1an7v",
        "template_sym6wks",
        form.current,
        "Um40NagmPxC9YUZAO"
      )

      alert("Successfully sent message.")
      setSuccess("Successfully sent message.")
      form.current.reset()
    } catch (err) {
      console.error("EmailJS send error:", err)
      const message = err?.text || err?.message || "Failed to send message. Please try again."

      alert(message)
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatedSection>
      <section
        id="contact"
        className="py-20 bg-white dark:bg-black text-black dark:text-white"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Contact Me
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Send me a message and I’ll get back to you.
          </p>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="grid gap-4"
          >

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="p-3 rounded-xl bg-gray-100 dark:bg-gray-900 outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              className="p-3 rounded-xl bg-gray-100 dark:bg-gray-900 outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="p-3 rounded-xl bg-gray-100 dark:bg-gray-900 outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className={`py-3 rounded-xl text-white transition duration-300 ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-cyan-500 hover:bg-cyan-600"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-500 font-medium">
                {success}
              </p>
            )}

            {error && (
              <p className="text-red-500 font-medium">
                {error}
              </p>
            )}

          </form>
        </div>
      </section>
    </AnimatedSection>
  )
}

export default Contact