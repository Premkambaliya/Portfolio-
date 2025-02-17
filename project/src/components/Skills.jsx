import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Wrench, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code2 className="text-blue-500" size={24} />,
      skills: ['ReactJS', 'HTML', 'CSS', 'TailwindCSS', 'JavaScript'],
    },
    {
      title: 'Backend',
      icon: <Database className="text-blue-500" size={24} />,
      skills: ['Node.js', 'Express.js', 'MongoDB'],
    },
    {
      title: 'Tools',
      icon: <Wrench className="text-blue-500" size={24} />,
      skills: ['Git & GitHub', 'Figma', 'Postman'],
    },
    {
      title: 'Soft Skills',
      icon: <Brain className="text-blue-500" size={24} />,
      skills: ['Problem Solving', 'Team Collaboration', 'Communication'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Skills & Expertise</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;