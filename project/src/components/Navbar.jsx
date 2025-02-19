// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Code2, Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           <motion.div
//             whileHover={{ scale: 1.1 }}
//             className="flex items-center space-x-2"
//           >
//             <Code2 className="w-8 h-8 text-blue-500" />
//             <span className="font-bold text-xl">Prem.dev</span>
//           </motion.div>

//           <div className="hidden md:flex items-center space-x-8">
//             <a href="#about" className="nav-link">About</a>
//             <a href="#skills" className="nav-link">Skills</a>
//             <a href="#projects" className="nav-link">Projects</a>
//             <a href="#contact" className="nav-link">Contact</a>
//           </div>

//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-300 hover:text-white"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           className="md:hidden bg-background/95 backdrop-blur-sm"
//         >
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             <a
//               href="#about"
//               className="block px-3 py-2 text-gray-300 hover:text-white"
//               onClick={() => setIsOpen(false)}
//             >
//               About
//             </a>
//             <a
//               href="#skills"
//               className="block px-3 py-2 text-gray-300 hover:text-white"
//               onClick={() => setIsOpen(false)}
//             >
//               Skills
//             </a>
//             <a
//               href="#projects"
//               className="block px-3 py-2 text-gray-300 hover:text-white"
//               onClick={() => setIsOpen(false)}
//             >
//               Projects
//             </a>
//             <a
//               href="#contact"
//               className="block px-3 py-2 text-gray-300 hover:text-white"
//               onClick={() => setIsOpen(false)}
//             >
//               Contact
//             </a>
//           </div>
//         </motion.div>
//       )}
//     </motion.nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-blue-500" />
            <span className="font-bold text-xl">Prem.dev</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/skills" className="nav-link">Skills</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/figma" className="nav-link">Figma</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300 hover:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;