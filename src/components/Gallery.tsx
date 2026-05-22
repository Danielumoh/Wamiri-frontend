const placeholders = [1, 2, 3, 4, 5, 6];

function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-coral/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-coral mb-3">
            Our Work
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900">
            The Gallery
          </h2>
          <p className="text-gray-500 mt-4 max-w-md mx-auto">
            A glimpse into the pieces we have crafted with love and precision.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholders.map((item) => (
            <div
              key={item}
              className="bg-coral/20 h-72 flex items-center justify-center hover:bg-coral/30 transition-colors group cursor-pointer"
            >
              <p className="text-coral/50 font-playfair italic text-lg group-hover:text-coral transition-colors">
                Gallery Image {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
