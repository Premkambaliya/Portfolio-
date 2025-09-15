import React from 'react';
import { motion } from 'framer-motion';
import PersonalInfo from '../Components/PersonalInfo';
import InfiniteScrollingSkills from '../Components/InfiniteScrollingSkills';
import Education from '../Components/Education';
import ResumeButton from '../Components/ResumeButton';

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
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
      className="w-full min-h-screen overflow-y-auto py-16 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            ABOUT <span className="text-blue-600">ME</span>
          </h1>
          <div className="flex items-center gap-2">
            <span className="w-12 h-1 bg-blue-600"></span>
            <span className="text-sm text-gray-600">
              PERSONAL INFO
            </span>
          </div>
        </motion.div>

        {/* About Me Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            Hello! I'm Prem Kambaliya, a <span className="text-blue-600">passionate Full-Stack Developer</span> and UI/UX Designer.
          </h3>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              My expertise lies in React.js, Next.js, Tailwind CSS, Node.js, and MongoDB. I thrive on solving complex problems and crafting intuitive UI designs that not only look great but also deliver seamless user experiences.
            </p>

            <p>
              In 2025, I participated in the **Odoo Hackathon**, where I successfully completed the **Virtual Round** and advanced to the **Main Round in Gandhinagar**. This experience gave me hands-on exposure to real-world problem-solving, teamwork, and building impactful solutions under time constraints.
            </p>
            <p>
              My current focus is on mastering state management, advanced MongoDB queries, and full-stack
              deployment practices. I also explore UI/UX design, using tools like Figma and Framer
              to create clean and user-friendly interfaces.
            </p>

            <p>
              Beyond coding, I enjoy experimenting with new technologies, contributing to open-source projects, and exploring the latest design trends. Apart from coding, <span className="text-blue-600 font-semibold">I am national player in archery</span>, and I also enjoy playing football, mobile gaming, and listening to music.
            </p>
          </div>

          <PersonalInfo />

          <div className="mt-12">
            <ResumeButton />
          </div>
        </motion.div>

        {/* Skills Section with Infinite Scroll */}
        <motion.div variants={itemVariants} className="mb-16">
          <InfiniteScrollingSkills />
        </motion.div>

        {/* Education Section */}
        <motion.div variants={itemVariants} className="mb-8">
          <Education />
        </motion.div>
      </div>
    </motion.div>
  );
}