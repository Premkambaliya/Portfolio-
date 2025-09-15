import React from "react";
import { motion } from "framer-motion";

export default function CertificateCard({ title, image, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
      className="w-full sm:w-80 md:w-96 h-96 mx-auto [perspective:1000px]"
    >
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
        
        {/* Front Side */}
        <div className="absolute w-full h-full rounded-xl overflow-hidden shadow-md backface-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-white/90 text-black rounded-xl shadow-xl p-6 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] backface-hidden">
          <h3 className="text-lg font-semibold mb-4">{title}</h3>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-4 py-2 text-sm font-medium bg-black text-white rounded-lg shadow hover:bg-gray-800 transition-all duration-300"
          >
            View Certificate →
          </a>
        </div>
      </div>
    </motion.div>
  );
}
