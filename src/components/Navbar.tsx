import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Features", "Pricing", "Testimonials", "Contact"];

  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary">POS SaaS</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-secondary">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className="hidden md:inline-block bg-primary text-white px-5 py-2 rounded-lg hover:bg-indigo-600">
          Get Started
        </button>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {/* hamburger icon */}
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 p-4 bg-white">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-secondary">
                {link}
              </a>
            </li>
          ))}
          <button className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-indigo-600">
            Get Started
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
