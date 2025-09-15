import React from 'react';
import { motion } from 'framer-motion';

export default function SkillCategory({ category }) {
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
      whileHover={{ y: -5 }}
    >
      <h3 className="text-xl font-bold mb-4 text-gray-900 border-b-2 border-blue-600 pb-2 inline-block">
        {category.title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {category.skills.map((skill, index) => (
          <motion.div
            key={skill}
            variants={skillVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
            className="bg-gray-50 px-3 py-2 rounded-lg text-center hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-default group"
          >
            <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
              {skill}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}