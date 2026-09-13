const Services = () => {
  const services = [
    {
      icon: "🪴",
      title: "Plant Selection",
      description:
        "Get help choosing the right plants according to your space, light and lifestyle.",
    },
    {
      icon: "🌱",
      title: "Plant Care",
      description:
        "Learn simple and effective ways to keep your plants healthy and growing.",
    },
    {
      icon: "🌿",
      title: "Garden Maintenance",
      description:
        "Regular maintenance services to keep your garden clean, fresh and beautiful.",
    },
    {
      icon: "🏡",
      title: "Landscape Design",
      description:
        "Create beautiful green spaces with our simple and practical landscape planning.",
    },
    {
      icon: "🚚",
      title: "Plant Delivery",
      description:
        "Get your favorite plants safely packed and delivered to your doorstep.",
    },
    {
      icon: "💬",
      title: "Gardening Consultation",
      description:
        "Get expert guidance and useful tips for your home garden and plants.",
    },
  ];

  return (
    <main>
      <section className="bg-green-50 py-16 text-center px-6">
        <p className="text-green-700 font-semibold tracking-widest">
          OUR SERVICES
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
          Complete Plant & Gardening Services
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          From choosing the perfect plant to maintaining your garden, GreenNest
          is here to help you create a greener space.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-3xl mb-6">
                {service.icon}
              </div>

              <h2 className="text-2xl font-bold text-gray-900">
                {service.title}
              </h2>

              <p className="text-gray-600 mt-4 leading-relaxed">
                {service.description}
              </p>

              <button className="mt-6 text-green-700 font-semibold hover:text-green-900">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-green-700 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold">Need Help With Your Plants?</h2>

          <p className="mt-4 text-green-100 text-lg">
            Our team is ready to help you create and maintain a beautiful green
            space.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 bg-white text-green-700 px-7 py-3 rounded-full font-semibold hover:bg-green-50 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
};

export default Services;
