import { useState, useEffect } from "react";

// Placeholder images — replace with real ones later
const carouselImages = [
  "/gallery/pinterest cooperate.jpg",
  "/gallery/pinterest pants.jpg",
  "/gallery/pinterest asoebi.jpg",
  "/gallery/dresses-pin.jpg",
];

function About() {
  // Tracks which image is currently showing
  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 3000);

    // Cleanup — stop the timer when component unmounts
    return () => clearInterval(timer);
  }, []);

  // Go to previous image
  function handlePrev() {
    setCurrent((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  }

  // Go to next image
  function handleNext() {
    setCurrent((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  }

  return (
    <section id="about" className="py-24 px-6 bg-coral/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left — Carousel */}
        <div className="relative w-full h-96 md:h-[500px] overflow-hidden">
          {/* Images */}
          {carouselImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`WAMIRI outfit ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 w-10 h-10 flex items-center justify-center transition-colors z-10"
          >
            ←
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 w-10 h-10 flex items-center justify-center transition-colors z-10"
          >
            →
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === current ? "bg-coral" : "bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right — Text */}
        <div className="flex flex-col gap-6">
          <p className="text-sm tracking-widest uppercase text-coral">
            Our Story
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Crafted with Intention,
            <span className="text-coral italic"> Worn with Pride</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            WAMIRI was born from a deep love for African elegance and bespoke
            craftsmanship. Based in Lagos, we create pieces that celebrate your
            identity from corporate wear to traditional Asoebi, every outfit
            tells your unique story.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We believe clothing is more than fabric. It is confidence, culture,
            and character all stitched together with care.
          </p>

          <a
            href="/booking"
            className="self-start border border-coral text-coral px-8 py-3 text-sm tracking-widest uppercase hover:bg-coral hover:text-white transition-colors"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
