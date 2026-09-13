const About = () => {
  return (
    <main>
      <section className="bg-green-50 py-16 text-center px-6">
        <p className="text-green-700 font-semibold tracking-widest">
          ABOUT GREENNEST
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
          Growing Green, Growing Together
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We believe every space can become more beautiful and peaceful with the
          right plants.
        </p>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80"
            alt="Green plants"
            className="w-full h-[450px] object-cover rounded-3xl shadow-lg"
          />
          <div>
            <p className="text-green-700 font-semibold mb-3">OUR STORY</p>
            <h2 className="text-4xl font-bold text-gray-900">
              A Little More Green in Every Home
            </h2>
            <p className="text-gray-600 mt-6 leading-relaxed">
              GreenNest Nursery is dedicated to helping people bring nature
              closer to their everyday lives. We provide a collection of healthy
              indoor, outdoor and decorative plants.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              From choosing the right plant to caring for it, our goal is to
              make gardening simple, enjoyable and accessible for everyone.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-3xl font-bold text-green-700">500+</h3>
                <p className="text-gray-600 mt-1">Happy Plant Lovers</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-700">50+</h3>
                <p className="text-gray-600 mt-1">Plant Varieties</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-green-700 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold">Our Mission</h2>

          <p className="mt-5 text-green-100 text-lg leading-relaxed">
            To create greener spaces by providing quality plants, reliable
            gardening services and helpful guidance to every plant lover.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
