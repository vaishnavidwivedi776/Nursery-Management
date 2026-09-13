const Gallery = () => {
  const images = [
    {
      image:
        "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=800&q=80",
      title: "Indoor Plants",
    },
    {
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
      title: "Beautiful Nursery",
    },
    {
      image:
        "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
      title: "Garden Plants",
    },
    {
      image:
        "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80",
      title: "Decorative Plants",
    },
    {
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
      title: "Fresh Greenery",
    },
    {
      image:
        "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=800&q=80",
      title: "Home Gardening",
    },
  ];

  return (
    <main>
      <section className="bg-green-50 py-16 text-center px-6">
        <p className="text-green-700 font-semibold tracking-widest">
          OUR GALLERY
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
          A Glimpse of GreenNest
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Explore our collection of beautiful plants and green spaces.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end">
                <h2 className="text-white text-xl font-semibold p-6">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-green-700 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold">
            Bring More Green Into Your Space
          </h2>

          <p className="mt-4 text-green-100 text-lg">
            Discover plants that make your home fresh, peaceful and beautiful.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
