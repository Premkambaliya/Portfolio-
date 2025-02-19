import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Languages } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-blue-500" size={24} />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium">The Imperial Science School</p>
                    <p className="text-gray-400">12th Board (2023 - 2024)</p>
                    <p className="text-blue-400">Percentage: 82.5%</p>
                  </li>
                  <li>
                    <p className="font-medium">Sorath International School</p>
                    <p className="text-gray-400">10th Board (2021 - 2022)</p>
                    <p className="text-blue-400">Percentage: 88%</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <Languages className="text-blue-500" size={24} />
                  <h3 className="text-xl font-semibold">Languages</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-20">English</span>
                    <div className="h-2 bg-blue-500/20 rounded-full flex-1">
                      <div className="h-full w-[25%] bg-blue-500 rounded-full"></div>
                    </div>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-20">Gujarati</span>
                    <div className="h-2 bg-blue-500/20 rounded-full flex-1">
                      <div className="h-full w-[100%] bg-blue-500 rounded-full"></div>
                    </div>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-20">Hindi</span>
                    <div className="h-2 bg-blue-500/20 rounded-full flex-1">
                      <div className="h-full w-[85%] bg-blue-500 rounded-full"></div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-blue-500" size={24} />
                  <h3 className="text-xl font-semibold">Location</h3>
                </div>
                <p className="text-gray-300">Ahmedabad, Gujarat, India</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;