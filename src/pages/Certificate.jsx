import React from "react";
import CertificateCard from "../Components/CertificateCard";

export default function Certificates() {
  const certificates = [
    {
      id: "Odoo-Hackathon-2025",
      title: "Odoo Hackathon 2025 Certification",
      image:
        "https://res.cloudinary.com/dczue3n9b/image/upload/v1756819435/WhatsApp_Image_2025-09-02_at_18.52.23_25b92c3f_bypi27.jpg",
      link: "https://res.cloudinary.com/dczue3n9b/image/upload/v1756819435/WhatsApp_Image_2025-09-02_at_18.52.23_25b92c3f_bypi27.jpg",
    },
    {
      id: "youngturks25",
      title: "youngturks25 round-1 achievement certificate",
      image:
        "https://res.cloudinary.com/dczue3n9b/image/upload/v1762073597/Screenshot_2025-11-02_142112_hy5ebz.png",
      link: "https://res.cloudinary.com/dczue3n9b/image/upload/v1762073597/Screenshot_2025-11-02_142112_hy5ebz.png",
    },
    {
      id: "Outskill",
      title: "Generative AI Mastermind 2025 certificate",
      image:
        "https://res.cloudinary.com/dczue3n9b/image/upload/v1762608006/Screenshot_2025-10-12_222154_gi0tfj.png",
      link: "https://res.cloudinary.com/dczue3n9b/image/upload/v1762608006/Screenshot_2025-10-12_222154_gi0tfj.png",
    },
    {
      id: "GitHub-Copilot",
      title: "GitHub Copilot Fundamentals Certificate",
      image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1757870220/5a013273-e805-4da8-a9b2-ab9ab60f25ba.png",
      link: "https://simpli-web.app.link/e/2eMfZd0ZEWb",
    },
    {
      id: "Basics-of-Azure",
      title: "Introduction to the Basics of Azure Certificate ",
      image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1757870198/f8ea1528-5d39-49e4-a566-c8fc7899a1c3.png",
      link: "https://simpli-web.app.link/e/Skg4GN4ZEWb",
    },
    {
      id: "Amazon-DocumentDB-and-MongoDB",
      title: "Amazon DocumentDB and MongoDB Certificate ",
      image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1762607709/Screenshot_2025-11-08_183723_ebglau.png",
      link: "https://simpli-web.app.link/e/PApyguT27Xb",
    },
    {
      id: "C-Language",
      title: "C Language Certification",
      image:
        "https://res.cloudinary.com/dczue3n9b/image/upload/v1746822335/jicvyt7hahfmpmckvk80.jpg",
      link: "https://res.cloudinary.com/dczue3n9b/image/upload/v1746822335/jicvyt7hahfmpmckvk80.jpg",
    },
    {
      id: "JavaScript",
      title: "JavaScript Certification",
      image:
        "https://res.cloudinary.com/dczue3n9b/image/upload/v1746822334/hu2hnelasdfkqvcquxc7.jpg",
      link: "https://res.cloudinary.com/dczue3n9b/image/upload/v1746822334/hu2hnelasdfkqvcquxc7.jpg",
    },
    {
      id: "css-Certification",
      title: "CSS (Basic) Certification",
      image:
        "https://res.cloudinary.com/dczue3n9b/image/upload/v1756818923/download_3_spc787.png",
      link: "https://res.cloudinary.com/dczue3n9b/image/upload/v1756818923/download_3_spc787.png",
    },
    {
      id: "Problem-Solving-Certification",
      title: "Problem Solving (Intermediate) Certification",
      image:
        "https://res.cloudinary.com/dczue3n9b/image/upload/v1756818923/download_4_aanass.png",
      link: "https://res.cloudinary.com/dczue3n9b/image/upload/v1756818923/download_4_aanass.png",
    },
    {
      id: "JavaScript-Certification",
      title: "JavaScript (Basic) Certification",
      image:
        "https://res.cloudinary.com/dczue3n9b/image/upload/v1756818924/download_2_uroud5.png",
      link: "https://res.cloudinary.com/dczue3n9b/image/upload/v1756818924/download_2_uroud5.png",
    },
    {
      id: "react-Certification",
      title: "React (Basic) Certification",
      image:
        "https://res.cloudinary.com/dczue3n9b/image/upload/v1756818924/download_dhkdrk.png",
      link: "https://res.cloudinary.com/dczue3n9b/image/upload/v1756818924/download_dhkdrk.png",
    },
    {
      id: "ProblemSolving-Certification",
      title: "Problem Solving (Basic) Certification",
      image:
        "https://res.cloudinary.com/dczue3n9b/image/upload/v1756818924/download_1_okrgqq.png",
      link: "https://res.cloudinary.com/dczue3n9b/image/upload/v1756818924/download_1_okrgqq.png",
    },
    {
      id: "TechHack-2025",
      title: "TechHack 2025 Certificate ",
      image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1762073614/WhatsApp_Image_2025-11-02_at_14.20.26_37c5d1d6_h2srla.jpg",
      link: "https://res.cloudinary.com/dczue3n9b/image/upload/v1762073614/WhatsApp_Image_2025-11-02_at_14.20.26_37c5d1d6_h2srla.jpg",
    },
  ];

  return (
    <section className="relative w-full min-h-screen px-6 md:px-16 py-16 flex flex-col items-center justify-center overflow-hidden">
      {/* 🔵 Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-blue-50 animate-gradient" />

      {/* Title */}
      <h2 className="relative text-3xl md:text-4xl font-extrabold mb-12 text-gray-900 text-center z-10">
        My <span className="text-blue-600">Certificates</span>
      </h2>

      {/* Grid Cards */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 z-10 max-w-7xl w-full">
        {certificates.map((cert) => (
          <CertificateCard key={cert.id} {...cert} />
        ))}
      </div>
    </section>
  );
}
