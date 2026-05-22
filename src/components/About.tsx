function About() {
  return (
    <section id="about" className="py-24 px-6 bg-coral/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left — Image placeholder */}
        <div className="bg-coral/20 h-96 flex items-center justify-center">
          <p className="text-coral/50 font-playfair text-xl italic">
            About Image
          </p>
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
            WAMIRI was born from a deep love for African elegance and 
            bespoke craftsmanship. Based in Lagos, we create pieces that 
            celebrate your identity — from corporate wear to traditional 
            Asoebi, every outfit tells your unique story.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We believe clothing is more than fabric. It is confidence, 
            culture, and character — all stitched together with care.
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
  )
}

export default About
