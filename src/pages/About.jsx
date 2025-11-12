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
              My expertise lies in <strong>React.js</strong>, <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>.
              I thrive on <strong>solving complex problems</strong> and crafting <strong>intuitive UI designs</strong> that not only look great but also deliver
              <strong>seamless user experiences</strong>.
            </p>

            <p>
              In 2025, I participated in the <strong>Odoo Hackathon</strong>, where our team was selected from over
              <strong>18,000+ registered teams</strong> to advance to the <strong>Main Round in Gandhinagar</strong> after successfully completing the
              <strong>Virtual Round</strong>. This incredible experience provided me with hands-on exposure to
              <strong>real-world problem-solving</strong>, <strong>teamwork</strong>, and <strong>building impactful solutions</strong> under time constraints.
            </p>

            <p>
              My current focus is on mastering <strong>state management</strong>, <strong>advanced MongoDB queries</strong>, and
              <strong> full-stack deployment practices</strong>. I also explore <strong>UI/UX design</strong>, using tools like
              <strong>Figma</strong> and <strong>Framer</strong> to create <strong>clean</strong> and <strong>user-friendly interfaces</strong>.
            </p>

            <p>
              Beyond coding, I enjoy <strong>experimenting with new technologies</strong>,
              and exploring the <strong>latest design trends</strong>. Apart from coding,
              <span class="text-blue-600 font-semibold">I am a national player in archery</span>, and I also enjoy playing
              <strong> football</strong>, <strong>mobile gaming</strong>, and <strong>listening music</strong>.
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