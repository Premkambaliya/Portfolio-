import React from "react";
import { motion } from "framer-motion";
import { Button } from "../Components/ui/button";
import { Input } from "../Components/ui/input";
import { Textarea } from "../Components/ui/textarea";
import { Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mjkedvqd");

  return (
    <div className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Contact Me
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Have a question or want to work together? Let's talk.
        </p>

        <motion.div
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {state.succeeded ? (
            <div className="p-8 text-center">
              <h3 className="text-2xl font-semibold text-green-600 mb-2">Thank you!</h3>
              <p className="text-gray-600">Your message has been sent successfully.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-8 rounded-lg border border-gray-200 shadow-sm"
            >
              <div>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="bg-gray-50 border-gray-200 text-gray-900"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-gray-50 border-gray-200 text-gray-900"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="bg-gray-50 border-gray-200 text-gray-900"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>

              <div className="flex justify-between items-center">
                <Button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? "Sending..." : "Send Message"} <Send className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}



// import React, { useState, useRef } from 'react';
// import { Send, Mail, MessageCircle, User } from 'lucide-react';

// export default function Contact() {
//   const [status, setStatus] = useState("");
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const formRef = useRef(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.message) {
//       setStatus("Please fill in all fields!");
//       setTimeout(() => setStatus(""), 3000);
//       return;
//     }
    
//     setStatus("Sending...");
//     try {
//       // Simulate API call (replace with your actual API endpoint)
//       await new Promise(resolve => setTimeout(resolve, 2000));
//       setStatus("Message Sent!");
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       setStatus("Error sending message!");
//     }
//     setTimeout(() => {
//       setStatus("");
//     }, 3000);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleMouseMove = (e) => {
//     if (!formRef.current) return;
//     const rect = formRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;
//     const rotateX = (y - centerY) / 40; // Reduced sensitivity
//     const rotateY = (centerX - x) / 40; // Reduced sensitivity
//     formRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//   };

//   const handleMouseLeave = () => {
//     if (!formRef.current) return;
//     formRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
//   };

//   return (
//     <>
//       <div className="py-16 px-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h1 className="text-4xl font-bold mb-4 text-gray-900">Contact Me</h1>
//             <p className="text-lg text-gray-600">
//               Have a question or want to work together? Let's talk.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             {/* 3D Illustration */}
//             <div className="relative">
//               <div className="w-full max-w-md mx-auto">
//                 <div className="relative transform-gpu animate-float">
//                   <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200 transform rotate-3 hover:rotate-0 transition-all duration-500">
//                     <div className="space-y-6">
//                       <div className="text-center">
//                         <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
//                           <Mail className="w-8 h-8 text-white" />
//                         </div>
//                         <h3 className="text-xl font-semibold text-gray-900">
//                           Get In Touch
//                         </h3>
//                       </div>
//                       <div className="space-y-4">
//                         <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
//                           <MessageCircle className="w-5 h-5 text-blue-600" />
//                           <span className="text-gray-700">
//                             Let's start a conversation
//                           </span>
//                         </div>
//                         <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
//                           <User className="w-5 h-5 text-blue-600" />
//                           <span className="text-gray-700">
//                             Professional & Friendly
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-70 animate-bounce"></div>
//                   <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gray-400 rounded-full opacity-60 animate-pulse"></div>
//                   <div className="absolute top-1/2 -left-6 w-4 h-4 bg-blue-300 rounded-full opacity-50 animate-ping"></div>
//                 </div>
//                 <div className="absolute inset-0 -z-10">
//                   <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
//                   <div className="absolute bottom-10 right-10 w-16 h-16 bg-gray-300 rounded-full opacity-20 animate-bounce"></div>
//                   <div className="absolute top-1/2 right-0 w-12 h-12 bg-blue-100 rounded-full opacity-40 animate-ping"></div>
//                 </div>
//               </div>
//             </div>
//             {/* Form */}
//             <div className="max-w-xl">
//               <div
//                 ref={formRef}
//                 onMouseMove={handleMouseMove}
//                 onMouseLeave={handleMouseLeave}
//                 className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 hover:shadow-3xl"
//                 style={{
//                   transformStyle: "preserve-3d",
//                   transition: "transform 0.1s ease-out",
//                 }}
//               >
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   {/* Name */}
//                   <div className="group">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Your Name
//                     </label>
//                     <div className="relative">
//                       <input
//                         name="name"
//                         type="text"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                         placeholder="Enter your full name"
//                       />
//                       <User className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                     </div>
//                   </div>
//                   {/* Email */}
//                   <div className="group">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Your Email
//                     </label>
//                     <div className="relative">
//                       <input
//                         name="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                         placeholder="Enter your email address"
//                       />
//                       <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                     </div>
//                   </div>
//                   {/* Message */}
//                   <div className="group">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Your Message
//                     </label>
//                     <div className="relative">
//                       <textarea
//                         name="message"
//                         value={formData.message}
//                         onChange={handleInputChange}
//                         required
//                         rows={5}
//                         className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
//                         placeholder="Tell me about your project or question..."
//                       />
//                       <MessageCircle className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
//                     </div>
//                   </div>
//                   {/* Submit */}
//                   <div className="flex justify-between items-center pt-4">
//                     <button
//                       type="submit"
//                       disabled={status === "Sending..."}
//                       className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 hover:shadow-xl hover:scale-105 transform flex items-center space-x-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                       <span>
//                         {status === "Sending..." ? "Sending..." : "Send Message"}
//                       </span>
//                       <Send className="w-4 h-4" />
//                     </button>
//                     {status && (
//                       <p
//                         className={`text-sm font-medium ${
//                           status === "Message Sent!"
//                             ? "text-green-600"
//                             : "text-blue-600"
//                         } animate-fadeIn`}
//                       >
//                         {status}
//                       </p>
//                     )}
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Custom CSS */}
//       <style jsx>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px) rotate(3deg);
//           }
//           50% {
//             transform: translateY(-20px) rotate(3deg);
//           }
//         }
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.5s ease-out;
//         }
//         .hover\\:shadow-3xl:hover {
//           box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
//         }
//         .group:hover input,
//         .group:hover textarea {
//           transform: translateY(-2px);
//         }
//         input, textarea {
//           z-index: 10;
//         }
//       `}</style>
//     </>
//   );
// }