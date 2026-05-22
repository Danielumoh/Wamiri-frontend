function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <h2 className="font-playfair text-3xl font-bold text-coral tracking-widest">
            WAMIRI
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Bespoke tailoring rooted in Lagos. Every stitch tells your story.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm tracking-widest uppercase text-coral">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2 list-none">
            <li>
              <a
                href="#about"
                className="text-gray-400 text-sm hover:text-coral transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-400 text-sm hover:text-coral transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="text-gray-400 text-sm hover:text-coral transition-colors"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="/booking"
                className="text-gray-400 text-sm hover:text-coral transition-colors"
              >
                Book Consultation
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm tracking-widest uppercase text-coral">
            Get In Touch
          </h3>
          <ul className="flex flex-col gap-2 list-none">
            <li className="text-gray-400 text-sm">📍 Lagos, Nigeria</li>
            <li>
              <a
                href="https://wa.me/2348188390636"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 text-sm hover:text-coral transition-colors"
              >
                💬 Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-500 text-sm">{`© ${new Date().getFullYear()} WAMIRI. All rights reserved.`}</p>
      </div>
    </footer>
  );
}

export default Footer;
