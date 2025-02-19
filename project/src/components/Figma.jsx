// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { ExternalLink, Github, Play } from 'lucide-react';

// // const Figma = () => {
// //   const Figmaprojects = [
// //     {
// //       title: 'Anime World',
// //       description: 'A comprehensive anime information platform with future plans for season tracking and reward system based on episodes watched.',
// //       Link: 'https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=2-9&t=aT0bYLZg1sRu0Z7j-1'
// //     },
// //     {
// //       title: 'Games Collection',
// //       description: 'A collection of classic games including 2048, Snake Game, and Ludo implemented with modern web technologies.',
// //       Link: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop'
// //     },
// //     {
// //       title: 'Fast Shopping',
// //       description: 'E-commerce prototype with modern UI/UX design and seamless shopping experience.',
// //       Link: 'https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=5-17&t=aT0bYLZg1sRu0Z7j-1'
// //     },
// //     {
// //       title: 'Instagram Clone',
// //       description: 'A social media platform clone with focus on UI/UX design and core features.',
// //       Link: 'https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=1-3&t=aT0bYLZg1sRu0Z7j-1'
// //     },
// //     {
// //       title: 'Coding Gita',
// //       description: 'that is clone of Coding gita website help of figma',
// //       Link: 'https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=1-5&t=aT0bYLZg1sRu0Z7j-1'
// //     },
// //     {
// //       title: 'INDIAN GOVERNMENT WEBSITES AND APPS',
// //       description: 'this is INDIAN GOVERNMENT WEBSITE',
// //       Link: 'https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=1-10&t=aT0bYLZg1sRu0Z7j-1'
// //     }
// //   ];

// //   return (
// //    <>
   
// //    </>
// //   );
// // };

// // export default Figma;




// import React from 'react';
// import { motion } from 'framer-motion';
// import { ExternalLink } from 'lucide-react';

// const Figma = () => {
//   const Figmaprojects = [
//     {
//       title: 'Anime World',
//       description: 'A comprehensive anime information platform with future plans for season tracking and reward system based on episodes watched.',
//       Link: 'https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=2-9&t=aT0bYLZg1sRu0Z7j-1'
//     },
//     {
//       title: 'Ludo',
//       description: 'static board only in future i add different games in this project',
//       Link: 'https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=1-2&t=aT0bYLZg1sRu0Z7j-1'
//     },
//     {
//       title: 'Fast Shopping',
//       description: 'E-commerce prototype with modern UI/UX design and seamless shopping experience.',
//       Link: 'https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=5-17&t=aT0bYLZg1sRu0Z7j-1'
//     },
//     {
//       title: 'Instagram Clone',
//       description: 'A social media platform clone with focus on UI/UX design and core features.',
//       Link: 'https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=1-3&t=aT0bYLZg1sRu0Z7j-1'
//     },
//     {
//       title: 'Coding Gita',
//       description: 'A clone of the Coding Gita website designed in Figma.',
//       Link: 'https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=1-5&t=aT0bYLZg1sRu0Z7j-1'
//     },
//     {
//       title: 'Indian Government Websites and Apps',
//       description: 'A design collection of Indian government websites.',
//       Link: 'https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=1-10&t=aT0bYLZg1sRu0Z7j-1'
//     }
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold mb-6">Figma Projects</h1>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {Figmaprojects.map((project, index) => (
//           <motion.div 
//             key={index} 
//             className="bg-white shadow-lg rounded-xl p-5 hover:shadow-xl transition-all duration-300"
//             whileHover={{ scale: 1.05 }}>
//             <h2 className="text-xl font-semibold">{project.title}</h2>
//             <p className="text-gray-600 mt-2">{project.description}</p>
//             <a 
//               href={project.Link} 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="mt-4 flex items-center text-blue-500 hover:text-blue-700">
//               <ExternalLink className="w-5 h-5 mr-2" /> View Project
//             </a>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Figma;






import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Figma = () => {
  const projects = [
    {
              title: 'Anime World',
              description: 'A comprehensive anime information platform with future plans for season tracking and reward system based on episodes watched.',
              Link: 'https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=2-9&t=aT0bYLZg1sRu0Z7j-1'
            },
            {
              title: 'Instagram Clone',
              description: 'A social media platform clone with focus on UI/UX design and core features.',
              Link: 'https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=1-3&t=aT0bYLZg1sRu0Z7j-1'
            },
            {
                title: 'Fast Shopping',
                description: 'E-commerce prototype with modern UI/UX design and seamless shopping experience.',
                Link: 'https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=5-17&t=aT0bYLZg1sRu0Z7j-1'
            },
            {
                title: 'Coding Gita',
                description: 'A clone of the Coding Gita website designed in Figma.',
                Link: 'https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=1-5&t=aT0bYLZg1sRu0Z7j-1'
            },
            {
                title: 'Indian Government Websites and Apps',
                description: 'A design collection of Indian government websites.',
                Link: 'https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=1-10&t=aT0bYLZg1sRu0Z7j-1'
            },
                {
                  title: 'Ludo',
                  description: 'static board only in future i add different games in this project',
                  Link: 'https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=1-2&t=aT0bYLZg1sRu0Z7j-1'
                } 
        ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Figma Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="bg-gray-800 shadow-lg rounded-xl p-5 hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}>
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center text-blue-400 hover:text-blue-600">
              <ExternalLink className="w-5 h-5 mr-2" /> View Project
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Figma;
