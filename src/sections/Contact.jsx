function Contact() {
  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-8">
          Feel free to reach out for collaborations or projects.
        </p>

        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded bg-black border border-gray-700"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded bg-black border border-gray-700"
          />

          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  )
}

export default Contact