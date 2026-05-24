function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black px-6 py-6 text-white-500">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row">
        
        {/* Left */}
        <div className="text-sm">
          © 2025 Niño. All rights reserved.
        </div>

        {/* Center */}
        <div className="text-sm">
          Built with React & Tailwind CSS
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 text-sm">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            Vercel
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;