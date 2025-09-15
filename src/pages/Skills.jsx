import React from 'react';
import { motion } from 'framer-motion';
import SkillCategory from '../Components/SkillCategory';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "Tailwind CSS", "Next.js","HTML","CSS"]
  },
  {
    title: "Backend", 
    skills: ["Node.js", "Express.js","REST APIs"]
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL"]
  },
  {
    title: "Tools & Others",
    skills: ["Git","GitHUb", "Figma","Framer","Postman","Render","Netlify","Vercel" ]
  }
];

export default function SkillsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full min-h-screen py-16 px-6 md:px-12 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            My <span className="text-blue-600">Skills</span>
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-12 h-1 bg-blue-600"></span>
            <span className="text-sm text-gray-600 uppercase tracking-wider">
              Technical Expertise
            </span>
            <span className="w-12 h-1 bg-blue-600"></span>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div key={category.title} variants={itemVariants}>
              <SkillCategory category={category} />
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  );
}