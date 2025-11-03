import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'CodingGita x Rai University',
      period: '2024 - Present',
      cgpa: '9.28/10',
      description:
        "Currently pursuing a Bachelor's degree in Computer Science at Rai University, Ahmedabad (Second Year). Exploring core subjects like programming, data structures, and algorithms while building a strong foundation in problem-solving and analytical thinking. Engaging in coursework and projects to enhance my understanding of computer systems and software development.",
    },
    {
      degree: 'Higher Secondary (12th)',
      institution: 'The Imperial Science School',
      period: '2023 - 2024',
      percentage: '88%',
      jee: 'JEE Main: 72 percentile',
      description:
        "I secured 99 marks in Mathematics, showcasing strong analytical and problem-solving skills, 88 marks in Chemistry, reflecting a solid understanding of chemical concepts, and 77 marks in Physics, demonstrating proficiency in fundamental principles and logical reasoning.",
    },
    {
      degree: 'Secondary (10th)',
      institution: 'Sorath International School',
      period: '2021 - 2022',
      percentage: '82.5%',
      description: '',
    },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold mb-8 text-gray-900">
        My <span className="text-blue-600">Education</span>
      </h3>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {edu.degree}
                </h4>
                <p className="text-blue-600 font-medium mb-1">{edu.institution}</p>

                {/* Period */}
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">{edu.period}</span>
                </div>

                {/* Extra details */}
                {edu.cgpa && (
                  <p className="text-gray-700 font-medium">CGPA: {edu.cgpa}</p>
                )}
                {edu.percentage && (
                  <p className="text-gray-700 font-medium">
                    Percentage: {edu.percentage}
                  </p>
                )}
                {edu.jee && (
                  <p className="text-gray-700 font-medium">{edu.jee}</p>
                )}

                {/* Description */}
                {edu.description && (
                  <p className="text-gray-700 mt-2">{edu.description}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
