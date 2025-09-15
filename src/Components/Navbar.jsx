// import { createPageUrl } from "@/utils";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll effect for shrinking navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Your navigation items
  const navItems = [
    { name: "Home", path: "Home" },
    { name: "About", path: "About" },
    { name: "Skills", path: "Skills" },
    { name: "Projects", path: "Projects" },
    { name: "Certificate", path: "certificate" },
    { name: "Contact", path: "Contact" },
  ];

  // Helper to create URLs
  const createPageUrl = (path) => `/${path.toLowerCase()}`;

  return (
    <motion.nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="flex items-center gap-4 bg-white/80 backdrop-blur-lg border border-gray-200 shadow-lg rounded-full px-4 py-2">
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
    </motion.nav>
  );
}
