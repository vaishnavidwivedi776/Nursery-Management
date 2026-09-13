import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <section className="bg-green-50">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green-700 font-semibold tracking-widest mb-4">
              WELCOME TO GREENNEST
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Bring Nature
              <span className="text-green-700"> Into Your Life</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              Discover healthy plants, gardening essentials and expert services
              to create a beautiful and peaceful green space.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="bg-green-700 text-white px-7 py-3 rounded-full font-semibold hover:bg-green-800 transition"
              >
                Explore Plants
              </Link>

              <Link
                to="/contact"
                className="border border-green-700 text-green-700 px-7 py-3 rounded-full font-semibold hover:bg-green-700 hover:text-white transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80"
              alt="Plants in GreenNest nursery"
              className="w-full h-[480px] object-cover rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-green-700 font-semibold tracking-widest">
              WHY CHOOSE US
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Everything Your Plants Need
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-green-50 rounded-2xl text-center">
              <div className="text-4xl mb-4">🌱</div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Healthy Plants
              </h3>

              <p className="text-gray-600">
                Carefully selected plants that are healthy and ready to grow.
              </p>
            </div>

            <div className="p-8 bg-green-50 rounded-2xl text-center">
              <div className="text-4xl mb-4">🚚</div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Safe Delivery
              </h3>

              <p className="text-gray-600">
                We carefully pack your plants for safe and secure delivery.
              </p>
            </div>

            <div className="p-8 bg-green-50 rounded-2xl text-center">
              <div className="text-4xl mb-4">🌿</div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Expert Guidance
              </h3>

              <p className="text-gray-600">
                Get simple and useful advice to keep your plants healthy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-700">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center text-white">
          <h2 className="text-4xl font-bold">
            Ready to Make Your Space Greener?
          </h2>

          <p className="mt-4 text-green-100 text-lg">
            Explore our plants and find something perfect for your space.
          </p>

          <Link
            to="/products"
            className="inline-block mt-8 bg-white text-green-700 px-7 py-3 rounded-full font-semibold hover:bg-green-50 transition"
          >
            View Plants
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
