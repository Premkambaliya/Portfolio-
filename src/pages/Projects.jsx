import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../Components/ProjectCard";

// ✅ All project data (you already have it)
const projects = [
  // 🔥 FullStack Projects
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
  {
    id: "learning-platform",
    title: "My Learning Platform",
    description:
      "An interactive full-stack learning platform for managing courses for developers. (Work ongoing)",
    image:
      "https://res.cloudinary.com/dczue3n9b/image/upload/v1756816915/Screenshot_2025-09-02_181134_e1yrty.png",
    year: "2025",
    githubLink: "YOUR_LEARNING_PLATFORM_REPO_LINK",
    demoLink: "YOUR_LEARNING_PLATFORM_DEMO_LINK",
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
    githubLink: "YOUR_TRAVELLING_PROJECT_REPO_LINK",
    demoLink: "YOUR_TRAVELLING_PROJECT_DEMO_LINK",
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
  // 🔥 Frontend Projects
  {
    id: "crunchyroll-clone",
    title: "Crunchyroll Clone",
    description:
      "A frontend clone of Crunchyroll's anime streaming interface using React",
    image:
      "https://res.cloudinary.com/dczue3n9b/image/upload/v1744192398/fbxheyj3vlv5q8hucxbq.png",
    year: "2023",
    githubLink: "https://github.com/Premkambaliya/Crunchyroll",
    demoLink: "https://crunchyroll-07ll.onrender.com/",
    category: "Frontend",
  },
{
    id: "ajio-clone",
    title: "Ajio Clone",
    description: "A frontend clone of Ajio's e-commerce platform built with React",
    image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1745082381/yn5kb68urodct0wk5jr2.png",
    year: "2023",
    githubLink: "https://github.com/Premkambaliya/AJIO",
    demoLink: "https://ajio-wqkr.vercel.app/",
    category: "Frontend",
  },
  {
    id: "when-in-city",
    title: "When in City",
    description: "A frontend travel guide app for city exploration using JavaScript and React",
    image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1744192418/cn1isteqd4suixmn48g9.png",
    year: "2024",
    githubLink: "https://github.com/Premkambaliya/When-in-City",
    demoLink: "https://when-in-city.onrender.com",
    category: "Frontend",
  },
  {
    id: "fastack",
    title: "Fastack",
    description: "A frontend task management app built with React and Tailwind CSS",
    image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1744192468/wlju0jqkj9wtisvhple8.png",
    year: "2023",
    githubLink: "https://github.com/Premkambaliya/Fastrack",
    demoLink: "https://fastrack.onrender.com/",
    category: "Frontend",
  },
  {
    id: "spotify-clone",
    title: "Spotify Clone",
    description: "A frontend clone of Spotify's music streaming interface using React",
    image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1744192500/d853fudjif0sefvpb9s2.png",
    year: "2024",
    githubLink: "https://github.com/Premkambaliya/Spotify",
    demoLink: "https://task-rouge-two.vercel.app/",
    category: "Frontend",
  },
  {
    id: "youtube-clone",
    title: "YouTube Clone",
    description: "A frontend clone of YouTube's video streaming interface using React",
    image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1744192526/waplkwj60zsfhn5yevq8.png",
    year: "2024",
    githubLink: "https://github.com/Premkambaliya/Youtube",
    demoLink: "https://youtubereact-indol.vercel.app/",
    category: "Frontend",
  },
  {
    id: "static-sudoku",
    title: "Static Sudoku",
    description: "A static Sudoku board UI built with HTML and CSS",
    image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1745084161/lmsrcqmfoeh63fv4bhhv.png",
    year: "2023",
    githubLink: "https://github.com/Premkambaliya/SUDOKU",
    demoLink: "https://sudokucg.netlify.app/",
    category: "Frontend",
  },
  {
    id: "2048-game",
    title: "2048",
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
    year: "2023",
    githubLink: "https://github.com/Premkambaliya/Snack-Game",
    demoLink: "https://snack-game-swart.vercel.app/",
    category: "Games",
  },
  {
    id: "chess-game",
    title: "Chess",
    description: "An interactive Chess game play with your friend ",
    image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1744192579/qi3rnttgwfe5jz0fv9wi.png",
    year: "2024",
    githubLink: "https://github.com/Premkambaliya/Chess-Game",
    demoLink: "https://chess-game-mu-three.vercel.app/",
    category: "Games",
  },
  {
    id: "rock-paper-scissor-game",
    title: "Rock Paper Scissor",
    description: "A fun Rock-Paper-Scissor game built with React",
    image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1756815140/Screenshot_2025-09-02_174142_fk9cjj.png",
    year: "2024",
    githubLink: "https://github.com/Premkambaliya/Chess-Game",
    demoLink: "https://chess-game-mu-three.vercel.app/",
    category: "Games",
  },
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
    id: "scanner-design",
    title: "Scanner App Design",
    description: "A minimalist UI design for a document scanner app in Figma",
    image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1745081480/qha7jhhskalabcipm5dy.png",
    year: "2024",
    demoLink: "https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=2-5&t=yVzUmRSx8AwNhrrV-1",
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
  const categories = ["FullStack","Group Project", "Frontend", "Games", "Figma"];
  const [activeCategory, setActiveCategory] = useState("FullStack");

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

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

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
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}