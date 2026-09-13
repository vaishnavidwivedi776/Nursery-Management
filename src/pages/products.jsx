import { Link } from "react-router-dom";

const plants = [
  {
    id: 1,
    name: "Peace Lily",
    category: "Indoor Plant",
    price: "₹399",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Snake Plant",
    category: "Indoor Plant",
    price: "₹499",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Monstera",
    category: "Decorative Plant",
    price: "₹699",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Aloe Vera",
    category: "Medicinal Plant",
    price: "₹299",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Areca Palm",
    category: "Indoor Plant",
    price: "₹599",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Rubber Plant",
    category: "Decorative Plant",
    price: "₹549",
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=600&q=80",
  },
];

const Products = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="bg-green-50 py-16 text-center px-6">
        <p className="text-green-700 font-semibold tracking-widest">
          OUR COLLECTION
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
          Find Your Perfect Plant
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Explore our collection of healthy indoor, decorative and medicinal
          plants for your home and garden.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plants.map((plant) => (
            <div
              key={plant.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <p className="text-sm text-green-700 font-medium">
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
                    className="bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800 transition"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Products;
