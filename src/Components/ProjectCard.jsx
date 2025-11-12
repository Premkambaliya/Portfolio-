import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Video } from 'lucide-react';

const Button = ({ children, variant = "default", size = "default", className = "", ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    default: "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90 shadow-md",
    outline: "border border-gray-300 bg-white hover:bg-gray-100 text-gray-700"
  };
  
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3 text-sm"
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default function ProjectCard({ title, description, image, year, githubLink, demoLink, videoLink, tech = [] }) {
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
        {tech.length > 0 && (
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
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
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
          {videoLink && (
            <a href={videoLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white hover:opacity-90 shadow-md flex items-center gap-2"
              >
                <Video className="w-4 h-4" /> Video
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Demo usage
function App() {
  const sampleProjects = [
    {
      id: 1,
      title: "Expense Management System",
      description: "A group project to develop an expense management system for tracking and managing personal finances.",
      image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1762165569/e102722c-ab9c-426c-ade1-fe3bbba88e3c.png",
      year: "2025",
      githubLink: "https://github.com/Premkambaliya/odooxamalthea",
      videoLink: "https://www.youtube.com/watch?v=WPnxH9x_8gY",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Second Hand Marketplace",
      description: "A platform for buying and selling used items, built with React and Node.js.",
      image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1762165569/e102722c-ab9c-426c-ade1-fe3bbba88e3c.png",
      year: "2025",
      githubLink: "https://github.com/Premkambaliya/Odoo_Hackathon",
      videoLink: "https://youtu.be/2_RSAnH-9uA",
      tech: ["React", "Node.js"]
    },
    {
      id: 3,
      title: "My Mutual Funds",
      description: "A full-stack mutual funds tracking and management application.",
      image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1760286246/a1099984-ea44-4907-83fe-f5fbd1392855.png",
      year: "2025",
      githubLink: "https://github.com/Premkambaliya/Mutual_Funds",
      demoLink: "https://my-mutual-funds.vercel.app/",
      tech: ["Next.js", "MongoDB", "TypeScript"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">
          My <span className="text-purple-600">Projects</span>
        </h1>
        <p className="text-lg text-gray-600 text-center mb-10">
          A selection of my recent work with videos
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}