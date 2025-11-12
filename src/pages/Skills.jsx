import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", color: "bg-[#B4E5F9]", textColor: "text-gray-800" },
      { name: "JavaScript", color: "bg-[#FDF6B2]", textColor: "text-gray-800" },
      { name: "Tailwind CSS", color: "bg-[#A5F3FC]", textColor: "text-gray-800" },
      { name: "Next.js", color: "bg-gray-800", textColor: "text-white" },
      { name: "HTML5", color: "bg-[#FDC4B0]", textColor: "text-gray-800" },
      { name: "CSS3", color: "bg-[#A3C9E2]", textColor: "text-gray-800" }
    ]
  },
  {
    title: "Backend", 
    skills: [
      { name: "Node.js", color: "bg-[#B8E6C0]", textColor: "text-gray-800" },
      { name: "Express.js", color: "bg-gray-700", textColor: "text-white" },
      { name: "REST APIs", color: "bg-[#B2DFDB]", textColor: "text-gray-800" }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", color: "bg-[#C8E6C9]", textColor: "text-gray-800" },
      { name: "MySQL", color: "bg-[#BBDEFB]", textColor: "text-gray-800" },
      { name: "Supabase", color: "bg-[#B9F6CA]", textColor: "text-gray-800" }
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", color: "bg-[#FFCCBC]", textColor: "text-gray-800" },
      { name: "GitHub", color: "bg-gray-700", textColor: "text-white" },
      { name: "Figma", color: "bg-[#FFB3BA]", textColor: "text-gray-800" },
      { name: "Prototype", color: "bg-[#DDD6FE]", textColor: "text-gray-800" },
      { name: "Framer", color: "bg-[#BFDBFE]", textColor: "text-gray-800" },
      { name: "Postman", color: "bg-[#FFCCBC]", textColor: "text-gray-800" },
      { name: "Render", color: "bg-[#B2F5EA]", textColor: "text-gray-800" },
      { name: "Netlify", color: "bg-[#99F6E4]", textColor: "text-gray-800" },
      { name: "Vercel", color: "bg-gray-800", textColor: "text-white" }
    ]
  }
];

function SkillCategory({ category }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-600 pb-2 inline-block">
        {category.title}
      </h2>
      <div className="flex flex-wrap gap-3 mt-6">
        {category.skills.map((skill) => (
          <motion.span
            key={skill.name}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`${skill.color} ${skill.textColor} px-4 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200`}
          >
            {skill.name}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

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