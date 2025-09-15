import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from './ui/button';

export default function ResumeButton() {
  const resumeUrl =
    "https://drive.google.com/file/d/1aLfh6c9yntcjh1T_37UnxDFBdFY0OMbS/view?usp=sharing";

  const handleDownload = () => {
    // Opens resume in a new tab
    window.open(resumeUrl, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <Button
        onClick={handleDownload}
        size="lg"
        className="btn-primary text-white shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <Download className="w-5 h-5 mr-2" />
        Download Resume
      </Button>
    </motion.div>
  );
}
