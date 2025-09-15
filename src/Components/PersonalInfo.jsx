import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Phone, Mail, User, GraduationCap } from 'lucide-react';

export default function PersonalInfo() {
  const personalDetails = [
    { icon: User, label: 'Name', value: 'Prem Kambaliya' },
    { icon: Calendar, label: 'Age', value: '18 Years' },
    { icon: MapPin, label: 'Location', value: 'Gujarat, India' },
    { icon: Phone, label: 'Phone', value: '+91 95123 75141' },
    { icon: Mail, label: 'Email', value: 'premkambaliya1@gmail.com' },
    { icon: GraduationCap, label: 'Degree', value: 'Computer Science' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {personalDetails.map((detail, index) => (
        <motion.div
          key={detail.label}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
        >
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <detail.icon className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">{detail.label}</p>
            <p className="font-semibold text-gray-900">{detail.value}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}