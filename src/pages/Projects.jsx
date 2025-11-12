import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../Components/ProjectCard";

// ✅ All project data (you already have it)
const projects = [
  // 🔥 FullStack Projects
  {
    id: "learning-platform",
    title: "My Learning Platform",
    description:
      "An interactive full-stack learning platform for managing courses for Students and in that add quiz and query solver.",
    image:
      "https://res.cloudinary.com/dczue3n9b/image/upload/v1756816915/Screenshot_2025-09-02_181134_e1yrty.png",
    year: "2025",
    githubLink: "https://github.com/Premkambaliya/My-Learning-Platform",
    demoLink: "https://mylearning-platform.vercel.app/",
    category: "FullStack",
  },
  {
    id: "Mutual-Funds",
    title: "My Mutual Funds",
    description:
      " A full-stack mutual funds tracking and management application built with Next.js and MongoDB.",
    image:
      "https://res.cloudinary.com/dczue3n9b/image/upload/v1760286246/a1099984-ea44-4907-83fe-f5fbd1392855.png",
    year: "2025",
    githubLink: "https://github.com/Premkambaliya/Mutual_Funds",
    demoLink: "https://my-mutual-funds.vercel.app/",
    category: "FullStack",
  },
  {
    id: "travelling-platform",
    title: "Travelling",
    description:
      "A full-stack travel website with booking and exploration features built with React, Node.js, and MongoDB. (Work ongoing)",
    image:
      "https://res.cloudinary.com/dczue3n9b/image/upload/v1756816918/Screenshot_2025-09-02_181039_rjiu5y.png",
    year: "2025",
    githubLink: "",
    demoLink: "",
    category: "FullStack",
  },
  {
    id: "anime-world-fullstack",
    title: "Anime World Fullstack",
    description:
      "A full-stack anime streaming platform built with React, Node.js, and MongoDB",
    image:
      "https://res.cloudinary.com/dczue3n9b/image/upload/v1745082459/ovezvrhpyypbxspkohcf.png",
    year: "2024",
    githubLink: "https://github.com/Premkambaliya/anime_world",
    demoLink: "https://anime-world-frontend.vercel.app",
    category: "FullStack",
  },
  // Group Project
  {
    id: "travelling-platform",
    title: "College Notes Exchange Platform",
    description:
      "A collaborative full-stack platform for college students to share and exchange notes, built with Typescript, Node.js, and Supabase. (Group Project)",
    image:
      "https://res.cloudinary.com/dczue3n9b/image/upload/v1762165569/e102722c-ab9c-426c-ade1-fe3bbba88e3c.png",
    year: "2025",
    githubLink: "https://github.com/Premkambaliya/TechHack-2025",
    demoLink: "https://notes-exchange.netlify.app/",
    category: "Group Project",
  },
  {
    id: "ai-mirror-chatbot",
    title: "Ai Mirror chatbot",
    description:
      "AI-Mirror is a student-focused web platform that helps learners explore tech careers, practice with AI-generated quizzes, stay updated on tech news and events, and celebrate achievements — all powered by the Gemini API and managed via an admin panel.",
    image:
      "https://res.cloudinary.com/dczue3n9b/image/upload/v1762971579/eb2ea1ab-0d62-492b-ab3e-c8578f0c2431.png",
    year: "2025",
    githubLink: "",
    demoLink: "https://ai-mirror-chatbot.vercel.app/",
    category: "Group Project",
  },
  {
    id: "Expense-Management-System",
    title: "Expense Management System",
    description:
      " For Employee User ID : EM003, Password : 123456,Company ID : COMP002 (Group Project)",
    image:
      "https://res.cloudinary.com/dczue3n9b/image/upload/v1762612006/7ae2a473-c445-4adb-b1c7-c97bd5b64454.png",
    year: "2025",
    githubLink: "https://github.com/Premkambaliya/odooxamalthea",
    demoLink: "https://expense-manager-ten-lovat.vercel.app/",
    videoLink:"https://www.youtube.com/watch?v=WPnxH9x_8gY",
    category: "Group Project",
  },
  {
    id: "Second-Hand-platform",
    title: "Second Hand Marketplace",
    description:
      "A group project to develop a second-hand marketplace platform for buying and selling used items, built with React and Node.js.(Group Project)",
    image:
      "https://res.cloudinary.com/dczue3n9b/image/upload/v1762875531/7724e5b4-52d5-4298-bd27-f9d5f5043fee.png",
    year: "2025",
    githubLink: "https://github.com/Premkambaliya/Odoo_Hackathon/tree/main",
    demoLink: "",
    videoLink:"https://youtu.be/2_RSAnH-9uA?si=6MduB2cYKxkXzrwV",
    category: "Group Project",
  },
  {
    id: "Rental-managment-system",
    title: "Rental Managment Platform",
    description:
      "A group project to develop a rental management platform for property owners and tenants, built with React and Node.js.(Group Project)",
    image:
      "https://res.cloudinary.com/dczue3n9b/image/upload/v1762874551/4e8c9022-bb23-4472-9b7d-8509b2c765eb.png",
    year: "2025",
    githubLink: "https://github.com/Premkambaliya/Rental_management/tree/main",
    demoLink: "",
    videoLink:"http://youtube.com/watch?v=7GKUQdv_xFU&feature=youtu.be",
    category: "Group Project",
  },
  {
    id: "Skill-swap-platform",
    title: "Skill swap Platform",
    description:
      "A group project to develop a skill swap platform for users to exchange skills and services, built with React and Node.js.(Group Project)",
    image:
      "https://res.cloudinary.com/dczue3n9b/image/upload/v1762874448/c10efbdd-27f4-4c24-9d4c-f5ea921bb746.png",
    year: "2025",
    githubLink: "https://github.com/Premkambaliya/Odoo_Hackathon/tree/main",
    demoLink: "",
    videoLink:"https://youtu.be/2zRxmeweEU0?si=esdCTDamf5NnSbqR",
    category: "Group Project",
  },
  // 🔥 Frontend Projects
  {
    id: "crunchyroll-clone",
    title: "Crunchyroll Landing Page Redisign",
    description:
      "A frontend clone of Crunchyroll's anime streaming interface using React",
    image:
      "https://res.cloudinary.com/dczue3n9b/image/upload/v1744192398/fbxheyj3vlv5q8hucxbq.png",
    year: "2024",
    githubLink: "https://github.com/Premkambaliya/Crunchyroll",
    demoLink: "https://crunchyroll-07ll.onrender.com/",
    category: "Frontend",
  },
 {
    id: "ajio-clone",
    title: "Ajio Landing Page Redesign",
    description: "A frontend clone of Ajio's e-commerce platform built with React",
    image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1745082381/yn5kb68urodct0wk5jr2.png",
    year: "2024",
    githubLink: "https://github.com/Premkambaliya/AJIO",
    demoLink: "https://ajio-wqkr.vercel.app/",
    category: "Frontend",
  },
  {
    id: "when-in-city",
    title: "When in City Redisign",
    description: "A frontend travel guide app for city exploration using JavaScript and React",
    image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1744192418/cn1isteqd4suixmn48g9.png",
    year: "2024",
    githubLink: "https://github.com/Premkambaliya/When-in-City",
    demoLink: "https://when-in-city.onrender.com",
    category: "Frontend",
  },
  //Games Projects

  {
    id: "2048-game",
    title: "2048 Game",
    description: "A classic 2048 number puzzle game built with JavaScript With full responsive",
    image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1745081736/qsupsr3cdbivmk3iyagt.png",
    year: "2024",
    githubLink: "https://github.com/Premkambaliya/2048-Game",
    demoLink: "https://2048game-opal.vercel.app/",
    category: "Games",
  },
  {
    id: "snake-game",
    title: "Snake Game",
    description: "A retro Snake game developed using JavaScript and HTML5 Canvas",
    image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1744192552/mhnscynznpyvbgllqjhv.png",
    year: "2024",
    githubLink: "https://github.com/Premkambaliya/Snack-Game",
    demoLink: "https://snack-game-swart.vercel.app/",
    category: "Games",
  },
  {
    id: "chess-game",
    title: "Chess Game",
    description: "An interactive Chess game play with your friend ",
    image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1744192579/qi3rnttgwfe5jz0fv9wi.png",
    year: "2024",
    githubLink: "https://github.com/Premkambaliya/Chess-Game",
    demoLink: "https://chess-game-mu-three.vercel.app/",
    category: "Games",
  },
  {
    id: "rock-paper-scissor-game",
    title: "Rock Paper Scissor Game",
    description: "A fun Rock-Paper-Scissor game built with React",
    image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1756815140/Screenshot_2025-09-02_174142_fk9cjj.png",
    year: "2024",
    githubLink: "https://github.com/Premkambaliya/Rock-Paper-Scissors",
    demoLink: "rock-paper-scissors-red-seven.vercel.app",
    category: "Games",
  },

  // 🔥 Figma Designs

  {
    id: "anime-world-figma",
    title: "Anime World Design",
    description: "A vibrant UI design for an anime streaming platform in Figma",
    image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1745081078/pemxndt7vrjau3qudwzf.png",
    year: "2024",
    demoLink: "https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=2-9&t=yVzUmRSx8AwNhrrV-1",
    category: "Figma",
  },
  {
    id: "coding-gita",
    title: "Coding Gita",
    description: "A clean UI design for a coding education platform in Figma",
    image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1745081418/mhyff1jnzq1couvvukvu.png",
    year: "2024",
    demoLink: "https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=1-5&t=yVzUmRSx8AwNhrrV-1",
    category: "Figma",
  },
  {
    id: "University-figma",
    title: "University project",
    description: " A sleek UI design for a mutual funds tracking app in Figma",
    image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1760286898/Landing_Page_zharii.png",
    year: "2025",
    demoLink: "https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=2-7&t=mjSNpMXINLdXFvOi-1",
    category: "Figma",
  },
  {
    id: "Rental-Management-redesign",
    title: "Rental Management Redesign",
    description: "A clean and user-friendly redesign of a Rental Management system in Figma, created for the Odoo Hackathon 2025 Main Round.",
    image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1756816535/Screenshot_2025-09-02_180430_hryxv9.png",
    year: "2025",
    demoLink: "https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=1-3&t=yVzUmRSx8AwNhrrV-1",
    category: "Figma",
  },
  {
    id: "instagram-redesign",
    title: "Instagram Redesign",
    description: "A modern UI/UX redesign of Instagram's interface in Figma",
    image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1756815576/Screenshot_2025-09-02_174829_rb72au.png",
    year: "2024",
    demoLink: "https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=1-3&t=yVzUmRSx8AwNhrrV-1",
    category: "Figma",
  },
  {
    id: "fast-shopping",
    title: "Fast Shopping",
    description: "A sleek e-commerce UI design for quick shopping in Figma",
    image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1745081340/i4t8gudt5ttfpjqrbqk9.png",
    year: "2024",
    demoLink: "https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=0-1&t=yVzUmRSx8AwNhrrV-1",
    category: "Figma",
  },
  {
    id: "roadhelp-design",
    title: "RoadHelp",
    description: "A UI design for a roadside assistance app in Figma",
    image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1745081521/vsmid7jolub5syrnv3uc.png",
    year: "2024",
    demoLink: "https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=2-8&t=yVzUmRSx8AwNhrrV-1",
    category: "Figma",
  },
  {
    id: "ludo-design",
    title: "Ludo App Design",
    description: "A playful and intuitive UI design for a Ludo game app in Figma",
    image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1745081187/boudja9vw37eake0zndn.png",
    year: "2024",
    demoLink: "https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=1-2&t=yVzUmRSx8AwNhrrV-1",
    category: "Figma",
  },
  {
    id: "Skill-Swap-design",
    title: "SkillSwap Redesign",
    description: "A modern UI/UX redesign of the SkillSwap platform in Figma, created for the Odoo Hackathon 2025 Virtual Round.",
    image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1756816534/Screenshot_2025-09-02_180502_ba6aeb.png",
    year: "2025",
    demoLink: "https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=1-3&t=yVzUmRSx8AwNhrrV-1",
    category: "Figma",
  },
  {
    id: "indian-gov-design",
    title: "Indian Government Websites and Apps",
    description: "A user-friendly redesign of Indian government digital interfaces in Figma",
    image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1745081442/mtc7ky2ozbutzazw5lbx.png",
    year: "2024",
    demoLink: "https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=1-10&t=yVzUmRSx8AwNhrrV-1",
    category: "Figma",
  },
];

export default function Projects() {
  const categories = ["All", "FullStack", "Group Project", "Frontend", "Games", "Figma"];
  const [activeCategory, setActiveCategory] = useState("All");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="px-6 md:px-16 lg:px-24 py-16 bg-gray-50 min-h-screen">
      {/* Section Heading */}
      <h1 className="text-4xl font-bold text-center mb-4">
        My <span className="text-purple-600">Work</span>
      </h1>
      <p className="text-lg text-gray-600 text-center mb-10">
        A selection of my recent projects.
      </p>

      {/* Category Tabs */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                year={project.year}
                githubLink={project.githubLink}
                demoLink={project.demoLink}
                videoLink={project.videoLink} // 🎥 added
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
