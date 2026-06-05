const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    title: "Corporate Wear",
  },
  {
    url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    title: "Evening Dress",
  },
  {
    url: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
    title: "Asoebi",
  },
  {
    url: "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=600&q=80",
    title: "Bespoke Dress",
  },
  {
    url: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80",
    title: "Corporate Style",
  },
  {
    url: "https://images.unsplash.com/photo-1544441893-675973e31985?w=600&q=80",
    title: "Traditional Wear",
  },
];

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative h-64 md:h-72 lg:h-80 overflow-hidden group cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-coral/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="font-playfair text-white text-xl italic">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
