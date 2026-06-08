import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // Controls whether mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-coral/20 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h1 className="font-playfair text-2xl font-bold text-coral tracking-widest">
            WAMIRI
          </h1>
        </Link>

        {/* Desktop Nav Links — hidden on mobile */}
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

        {/* Right side — Book button + Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            to="/booking"
            className="bg-coral text-white px-6 py-2 text-sm tracking-widest uppercase hover:bg-coral/80 transition-colors"
          >
            Book Now
          </Link>

          {/* Hamburger button — only shows on mobile */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {/* Three lines that animate */}
            <span
              className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu — slides down when open */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-0 list-none pt-4 pb-2 border-t border-coral/10 mt-4">
          <li>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm tracking-widest uppercase hover:text-coral transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm tracking-widest uppercase hover:text-coral transition-colors"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm tracking-widest uppercase hover:text-coral transition-colors"
            >
              Gallery
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
