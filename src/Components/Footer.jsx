import React from 'react';
import { Github, Linkedin, Mail, Youtube,Instagram } from 'lucide-react';
// import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-card py-8">
      <div className="max-w-6xl mx-auto px-6 text-center text-muted">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/Premkambaliya" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/premkambaliya/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            <Linkedin />
          </a>
          <a href="https://www.youtube.com/@PremKambaliya" className="hover:text-accent transition-colors">
            <Youtube />
          </a>
          <a href="https://www.instagram.com/premkambaliya/?igsh=c3h3MmtreXR2eHdq#" className="hover:text-accent transition-colors">
            <Instagram />
          </a>
          {/* <a href="https://www.instagram.com/premkambaliya/?igsh=c3h3MmtreXR2eHdq#" className="hover:text-accent transition-colors">
            <SiLeetcode />
          </a> */}
        </div>
        <p>&copy; {new Date().getFullYear()} Prem. All rights reserved.</p>
        <p className="text-sm mt-2">Built with React, Tailwind CSS, and Framer Motion.</p>
      </div>
    </footer>
  );
}