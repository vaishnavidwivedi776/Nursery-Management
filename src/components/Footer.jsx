import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="text-2xl font-bold text-green-400">
              GreenNest
            </Link>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Bringing nature closer to your home with healthy plants, gardening
              services and expert guidance.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col gap-3 mt-5">
              <Link to="/" className="text-gray-400 hover:text-white">
                Home
              </Link>
              <Link to="/products" className="text-gray-400 hover:text-white">
                Plants
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-white">
                About
              </Link>
              <Link to="/services" className="text-gray-400 hover:text-white">
                Services
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Explore</h3>
            <div className="flex flex-col gap-3 mt-5">
              <Link to="/gallery" className="text-gray-400 hover:text-white">
                Gallery
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
              <span className="text-gray-400">Plant Care</span>
              <span className="text-gray-400">Gardening Tips</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="flex flex-col gap-4 mt-5 text-gray-400">
              <p>📍 Indore, Madhya Pradesh</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ hello@greennest.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 GreenNest Nursery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
