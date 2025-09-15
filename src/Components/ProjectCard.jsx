import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from './ui/button'; // ✅ path lowercase

export default function ProjectCard({ title, description, image, year, githubLink, demoLink, tech = [] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
    >
      {/* Project Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-3">{year}</p>
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <motion.span
              key={t}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs font-medium rounded-full shadow-sm"
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-300 hover:bg-gray-100 flex items-center gap-2"
              >
                <Github className="w-4 h-4" /> Code
              </Button>
            </a>
          )}
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90 shadow-md flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" /> Demo
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
