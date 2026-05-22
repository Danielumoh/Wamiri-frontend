function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-coral/20 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-playfair text-2xl font-bold text-coral tracking-widest">
          WAMIRI
        </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 list-none">
          <li>
            <a
              href="#about"
              className="text-sm tracking-widest uppercase hover:text-coral transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-sm tracking-widest uppercase hover:text-coral transition-colors"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className="text-sm tracking-widest uppercase hover:text-coral transition-colors"
            >
              Gallery
            </a>
          </li>
        </ul>

        {/* Book Button */}
        <a
          href="/booking"
          className="bg-coral text-white px-6 py-2 text-sm tracking-widest uppercase hover:bg-coral/80 transition-colors"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
