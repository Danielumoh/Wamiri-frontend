const services = [
  {
    title: "Corporate Wear",
    description:
      "Sharp, professional outfits tailored to command respect in any boardroom or business setting.",
    image: "/services/corporate-wears.jpg",
  },
  {
    title: "Dresses",
    description:
      "Elegant gowns and everyday dresses crafted to celebrate your femininity and personal style.",
    image: "/services/dresses.jpg",
  },
  {
    title: "Pants",
    description:
      "Perfectly fitted trousers and palazzo pants that blend comfort with sophistication.",
    image: "/services/pants.jpg",
  },
  {
    title: "Asoebi",
    description:
      "Stunning traditional outfits for weddings, celebrations and cultural occasions.",
    image: "/services/asoebi.jpg",
  },
];

function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-coral mb-3">
            What We Offer
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900">
            Our Services
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-coral/20 p-8 flex flex-col gap-4 hover:border-coral hover:shadow-lg transition-all group"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <h3 className="font-playfair text-xl font-bold text-gray-900 group-hover:text-coral transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
              <a
                href="/booking"
                className="text-coral text-sm tracking-widest uppercase mt-auto hover:underline"
              >
                Book Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
