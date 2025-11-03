import React from "react";
import { motion } from "framer-motion";

export default function CertificateCard({ title, image, link }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="w-full sm:w-80 md:w-96 h-96 mx-auto group"
    >
      <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg border-2 border-transparent group-hover:border-blue-200 transition-all duration-300">
        
        {/* Certificate Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-white">
          
          {/* Title */}
          <motion.h3 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg font-bold mb-3 text-center drop-shadow-lg"
          >
            {title}
          </motion.h3>
          
          {/* Decorative Line */}
          <div className="w-16 h-1 bg-blue-500 rounded-full mb-4 group-hover:w-24 transition-all duration-300"></div>
          
          {/* View Certificate Button */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-sm font-semibold bg-white text-black rounded-lg shadow-lg hover:bg-blue-50 hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 group/button"
          >
            View Certificate
            <svg className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
        
        {/* Checkmark Badge */}
        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}