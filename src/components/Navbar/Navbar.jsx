import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router";
import { toast } from "react-toastify";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full bg-gray-900 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl text-slate-300 font-bold">
          <Link to="/" className="flex items-end">
            <span className="text-[#4CAF50] text-3xl">&lt; </span> Abdullah /
            <span className="text-[#4CAF50] text-3xl ">&gt;</span>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-gray-300 duration-300 cursor-pointer hover:text-[#4CAF50] font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Resume Button */}
        <div className="hidden md:block">
          <a
            onClick={() => toast.warn("Resume is not ready yet!")}
            className="block cursor-pointer duration-300 text-white bg-[#4CAF50] rounded px-4 py-2 text-center hover:bg-green-700"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="cursor-pointer text-gray-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden  px-4 pb-4 space-y-3 bg-gray-900 py-8 shadow-md">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              onClick={() => setIsOpen(false)}
              className="block cursor-pointer text-gray-200 hover:text-[#4CAF50] font-medium"
            >
              {link.name}
            </a>
          ))}

          <a
            onClick={() => toast.warn("Resume is not ready yet!")}
            className="block text-white bg-[#4CAF50] rounded px-4 py-2 text-center hover:bg-green-700"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
