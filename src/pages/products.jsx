import { Link } from "react-router-dom";

const plants = [
  {
    id: 1,
    name: "Peace Lily",
    category: "Indoor Plant",
    price: "₹399",
    emoji: "🌱",
  },
  {
    id: 2,
    name: "Snake Plant",
    category: "Indoor Plant",
    price: "₹499",
    emoji: "🪴",
  },
  {
    id: 3,
    name: "Monstera",
    category: "Decorative Plant",
    price: "₹699",
    emoji: "🌿",
  },
  {
    id: 4,
    name: "Aloe Vera",
    category: "Medicinal Plant",
    price: "₹299",
    emoji: "🌵",
  },
  {
    id: 5,
    name: "Areca Palm",
    category: "Indoor Plant",
    price: "₹599",
    emoji: "🌴",
  },
  {
    id: 6,
    name: "Rubber Plant",
    category: "Decorative Plant",
    price: "₹549",
    emoji: "🌿",
  },
];

const Products = () => {
  return (
    <main>
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-green-700 font-semibold tracking-widest">
            OUR COLLECTION
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Plants for Every Space
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Choose from our collection of healthy indoor, outdoor and decorative
            plants.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {plants.map((plant) => (
              <div
                key={plant.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div className="h-64 bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center">
                  <span className="text-8xl">{plant.emoji}</span>
                </div>

                <div className="p-6">
                  <p className="text-green-700 text-sm font-semibold">
                    {plant.category}
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-2">
                    {plant.name}
                  </h2>

                  <div className="flex items-center justify-between mt-5">
                    <span className="text-xl font-bold text-gray-900">
                      {plant.price}
                    </span>

                    <Link
                      to="/contact"
                      className="bg-green-700 text-white px-5 py-2.5 rounded-full hover:bg-green-800 transition"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-700">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold">
            Need Help Choosing a Plant?
          </h2>

          <p className="mt-4 text-green-100 text-lg">
            Contact us and we will help you find the right plant for your space.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-8 bg-white text-green-700 px-7 py-3 rounded-full font-semibold hover:bg-green-50 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Products;
