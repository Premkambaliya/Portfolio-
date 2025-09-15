import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Express.js',
  'Tailwind CSS','Git', 'Figma','Framer',
  'MySQL', 'Next.js'
];

export default function InfiniteScrollingSkills() {
  const duplicatedSkills = React.useMemo(() => [...skills, ...skills], []);

  return (
    <div className="py-8">
      <h3 className="text-2xl font-bold mb-8 text-gray-900 text-center">
        Technical <span className="text-blue-600">Skills</span>
      </h3>
      
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6 animate-scroll"
          style={{ width: 'calc(200% + 24px)' }}
        >
          {duplicatedSkills.map((skill, index) => (
            <motion.div
              key={`${skill}-${index}`}
              className="flex-shrink-0 px-6 py-3 bg-white rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-gray-800 font-medium whitespace-nowrap">
                {skill}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}