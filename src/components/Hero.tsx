function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-amber px-6">
      <h1 className="font-playfair text-5xl sm:text-7xl md:text-[10rem] font-bold tracking-widest text-dark uppercase">
        WAMIRI
      </h1>

      <p className="font-playfair text-sm sm:text-lg md:text-2xl text-gray-500 uppercase tracking-widest mt-4 text-center px-4">
        Where Elegance Meets Craftsmanship
      </p>

      <a
        href="/booking"
        className="mt-12 border border-coral text-coral px-10 py-3 text-sm tracking-widest uppercase hover:bg-coral hover:text-white transition-colors"
      >
        Book Consultation
      </a>
    </section>
  );
}

export default Hero;
