
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Add scroll effect for shrinking navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const navItems = [
    { name: "Home", path: "Home" },
    { name: "About", path: "About" },
    { name: "Skills", path: "Skills" },
    { name: "Projects", path: "Projects" },
    { name: "Certificate", path: "certificate" },
    { name: "Contact", path: "Contact" },
  ];


  const createPageUrl = (path) => `/${path.toLowerCase()}`;

  return (
    <motion.nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="flex items-center justify-between bg-white/80 backdrop-blur-lg border border-gray-200 shadow-lg rounded-full px-4 py-2 w-[90vw] max-w-5xl">
        
        {/* ---- Logo ---- */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-700 rounded-full font-bold text-gray-800">
            PK
          </div>
          
        </Link>

        {/* ---- Desktop Menu ---- */}
        <div className="hidden md:flex items-center gap-4 ml-8">
          {navItems.map((item) => {
            const url = createPageUrl(item.path);
            const isActive = location.pathname === url;

            return (
              <Link
                key={item.name}
                to={url}
                className="relative px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-blue-100 rounded-full z-[-1]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* ---- Mobile Toggle ---- */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ---- Mobile Menu Dropdown ---- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[70px] left-1/2 -translate-x-1/2 w-[85vw] bg-white/90 backdrop-blur-lg border border-gray-200 shadow-lg rounded-2xl py-4 flex flex-col items-center gap-2 md:hidden"
          >
            {navItems.map((item) => {
              const url = createPageUrl(item.path);
              const isActive = location.pathname === url;

              return (
                <Link
                  key={item.name}
                  to={url}
                  onClick={() => setIsMenuOpen(false)}
                  className="relative w-full text-center px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-blue-100 rounded-full z-[-1]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
