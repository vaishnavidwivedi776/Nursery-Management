import { useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  };
  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-green-700 font-semibold"
      : "text-gray-700 hover:text-green-700";
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            onClick={closeMenu}
            className="text-2xl font-bold text-green-700"
          >
            GreenNest
          </NavLink>
          <div className="hidden md:flex items-center gap-7">
            <NavLink to="/" className={linkStyle}>
              Home
            </NavLink>
            <NavLink to="/products" className={linkStyle}>
              Plants
            </NavLink>
            <NavLink to="/about" className={linkStyle}>
              About
            </NavLink>
            <NavLink to="/services" className={linkStyle}>
              Services
            </NavLink>
            <NavLink to="/gallery" className={linkStyle}>
              Gallery
            </NavLink>
            <NavLink to="/contact" className={linkStyle}>
              Contact
            </NavLink>
            <NavLink
              to="/contact"
              className="bg-green-700 text-white px-5 py-2.5 rounded-full hover:bg-green-800"
            >
              Get in Touch
            </NavLink>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-gray-700"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden mt-5 pb-3 flex flex-col gap-4">
            <NavLink onClick={closeMenu} to="/" className={linkStyle}>
              Home
            </NavLink>
            <NavLink onClick={closeMenu} to="/products" className={linkStyle}>
              Plants
            </NavLink>
            <NavLink onClick={closeMenu} to="/about" className={linkStyle}>
              About
            </NavLink>
            <NavLink onClick={closeMenu} to="/services" className={linkStyle}>
              Services
            </NavLink>
            <NavLink onClick={closeMenu} to="/gallery" className={linkStyle}>
              Gallery
            </NavLink>
            <NavLink onClick={closeMenu} to="/contact" className={linkStyle}>
              Contact
            </NavLink>
            <NavLink
              onClick={closeMenu}
              to="/contact"
              className="bg-green-700 text-white px-5 py-2.5 rounded-full text-center"
            >
              Get in Touch
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
