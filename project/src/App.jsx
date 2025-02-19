// import React from 'react';
// import { motion } from 'framer-motion';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Hero from './components/Hero';
// import About from './components/About';
// import Figma from './components/Figma';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';

// function App() {
//   return (
//     <div className="min-h-screen bg-background text-foreground">
//       <ToastContainer theme="dark" />
//       <Navbar />
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Hero />
//         <About />
//         <Figma />
//         <Skills />
//         <Projects />
//         <Contact />
//         <Footer />
//       </motion.div>
//     </div>
//   );
// }

// export default App;



// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Figma from './components/Figma';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <ToastContainer theme="dark" />
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/figma" element={<Figma />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </motion.div>
      </div>
    </Router>
  );
}

export default App;