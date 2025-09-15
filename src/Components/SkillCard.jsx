import React from 'react';
import { motion } from 'framer-motion';

export default function SkillCard({ name, icon: Icon }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-4 p-6 bg-card border border-card rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
      whileHover={{ scale: 1.05 }}
    >
      <Icon className="w-12 h-12 text-accent" />
      <p className="font-semibold text-primary">{name}</p>
    </motion.div>
  );
}