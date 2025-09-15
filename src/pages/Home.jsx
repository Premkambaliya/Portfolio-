
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../Components/ui/button';
import { ArrowRight } from 'lucide-react';

// Helper function to create URLs
const createPageUrl = (path) => `/${path.toLowerCase()}`;


export default function HomePage() {
  const roles = React.useMemo(() => ['FullStack Developer', 'UI/UX Designer', 'Problem Solver ', 'Database Designer'], []);
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    let mounted = true;

    const interval = setInterval(() => {
      if (mounted) {
        setCurrentRole(prev => (prev + 1) % roles.length);
      }
    }, 3000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [roles.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
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
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const backgroundCircleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 0.1, scale: 1, transition: { delay: 0.6, duration: 1.2, ease: "easeOut" } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full min-h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center justify-center relative overflow-hidden px-6 py-12"
    >
      {/* Background elements */}
      <motion.div
        variants={backgroundCircleVariants}
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-500 opacity-5 hidden md:block"
      />
      <motion.div
        variants={backgroundCircleVariants}
        className="absolute bottom-20 -left-20 w-64 h-64 rounded-full bg-blue-500 opacity-5 hidden md:block"
      />

      {/* Main content */}
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2">
          <motion.span
            variants={itemVariants}
            className="inline-block text-blue-600 text-lg font-medium mb-4 border-b-2 border-blue-600 pb-1"
          >
            WELCOME TO MY WORLD
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="block text-gray-900">Hi, I'm</span>
            <span className="block text-blue-600 mt-2">Prem Kambaliya</span>
            <span className="block mt-2 text-gray-900">
              <span className="inline typing-text relative">
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-blue-600"
                >
                  {roles[currentRole]}
                </motion.span>
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg mb-8 max-w-2xl text-gray-700 leading-relaxed"
          >
            I build clean, scalable, and user-friendly web applications with a focus on modern design and real-world impact. Currently pursuing Computer Science while crafting digital experiences.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Link to={createPageUrl("Projects")}>
              <Button size="lg" className="btn-primary">
                EXPLORE MY WORK <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>

            <Link to={createPageUrl("Contact")}>
              <Button
                size="lg" 
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                CONTACT ME
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full lg:w-2/5 flex justify-center lg:justify-end"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 relative">
            <div className="w-full h-full rounded-full bg-blue-500/20 overflow-hidden flex items-center justify-center">
              <div className="w-[90%] h-[90%] rounded-full bg-blue-500/30 flex items-center justify-center">
                <div className="w-[85%] h-[85%] rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src="https://res.cloudinary.com/dczue3n9b/image/upload/v1757873814/Photo_k40lt8.jpg"
                    alt="Prem Kambaliya"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 md:bottom-0 md:right-0 rounded-full py-2 px-4 bg-white shadow-xl border border-gray-200"
            >
              <p className="text-blue-600 font-bold text-sm">STILL</p>
              <p className="text-xs text-gray-600">LEARNING</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
