"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});
  const [typedText, setTypedText] = useState("");
  const fullText = "Fullstack Developer";

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust speed here (lower = faster)

    return () => clearInterval(typingInterval);
  }, []);

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "services", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const skills = [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 88 },
    { name: "React Native", level: 85 },
    { name: "TailwindCSS", level: 92 },
    { name: "HTML5 & CSS3", level: 95 },
    { name: "Node.js & Express", level: 80 },
    { name: "PHP", level: 82 },
    { name: "MySQL", level: 83 },
    { name: "MongoDB", level: 78 },
    { name: "Firebase", level: 75 },
    { name: "Android Studio (Java/Kotlin)", level: 76 },
    { name: "Git & GitHub", level: 88 },
  ];

  const projects = [
    {
      title: "Telebirr & Chapa Payment Integration",
      description: "AddisGebeya e-commerce platform with H5 + SuperApp Telebirr and Chapa payment integration for seamless checkout",
      image: "/globe.svg",
      technologies: ["php", "Telebirr API", ],
    },
    {
      title: "EthioDiabetics Health Platform",
      description: "Health information and awareness platform built with Next.js and WordPress CMS",
      image: "/window.svg",
      technologies: ["Next.js", "WordPress", "TailwindCSS"],
    },
    {
      title: "EthioAutoSafety System",
      description: "Complete website, Android app, and stock management system for Auto Safety PLC",
      image: "/file.svg",
      technologies: [ "Android for app", "PHP for site"],
    },
    {
      title: "Attendance with Face Detection",
      description: "Real-time check-in/out system with GPS tracking built using Android Studio (Java)",
      image: "/globe.svg",
      technologies: ["Android Studio", "Java", "GPS" , "python"],
    },
    {
      title: "Kids Study App",
      description: "Educational Android app for children",
      image: "/window.svg",
      technologies: ["Android", "java"],
    },
    {
      title: "EtegeFashion E-commerce",
      description: "Responsive fashion e-commerce frontend built with Next.js",
      image: "/file.svg",
      technologies: ["Next.js", "TailwindCSS"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#0d1b2a] to-[#1b263b]">
      {/* Navigation */}
      <motion.nav 
        className="fixed w-full bg-[#0a1628]/90 backdrop-blur-md z-50 border-b border-white/5"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <motion.span 
                className="text-2xl font-bold text-white"
                whileHover={{ scale: 1.05 }}
              >
                Portf<span className="text-cyan-400">o</span>lio
              </motion.span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "About", "Skills", "Services", "Portfolio", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium ${
                    activeSection === item.toLowerCase()
                      ? "text-white" 
                      : "text-gray-400"
                  } hover:text-white transition-colors`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
            
            {/* Mobile menu button & CTA */}
            <div className="flex items-center space-x-4">
              <motion.button 
                className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
              >
                <motion.svg 
                  className="h-6 w-6" 
                  stroke="currentColor" 
                  fill="none" 
                  viewBox="0 0 24 24"
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? (
                    <motion.path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M6 18L18 6M6 6l12 12" 
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  ) : (
                    <motion.path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M4 6h16M4 12h16M4 18h16" 
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden border-t border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 pt-4 pb-6 space-y-2 bg-[#0a1628]/95 backdrop-blur-md">
                {["Home", "About", "Skills", "Services", "Portfolio", "Contact"].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block px-4 py-3 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-20 md:pt-32 md:pb-32 px-4 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image - Left Side */}
            <motion.div 
              className="lg:w-5/12 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* Glowing background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-2xl opacity-60"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.6, 0.8, 0.6]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                
                {/* Profile container with border */}
                <motion.div 
                  className="relative w-72 h-96 md:w-80 md:h-[450px] bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-[40%_60%_70%_30%/60%_30%_70%_40%] border-4 border-cyan-400/30 overflow-hidden shadow-2xl"
                  animate={{
                    borderRadius: [
                      "40% 60% 70% 30% / 60% 30% 70% 40%",
                      "60% 40% 30% 70% / 40% 70% 30% 60%",
                      "40% 60% 70% 30% / 60% 30% 70% 40%"
                    ]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Profile image */}
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src="/betty.png"
                      alt="Betelhem Mekonnen"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </motion.div>
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute -top-6 -left-6 w-12 h-12 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 15, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                <motion.div 
                  className="absolute -bottom-6 -right-6 w-10 h-10 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"
                  animate={{
                    y: [0, 20, 0],
                    x: [0, -15, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                ></motion.div>
              </div>
            </motion.div>
            
            {/* Content - Right Side */}
            <motion.div 
              className="lg:w-7/12 text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h3 
                className="text-cyan-400 text-xl md:text-2xl font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Hello, I'm
              </motion.h3>
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Betelhem Mekonnen
              </motion.h1>
              <motion.h2 
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                And I'm a <span className="text-cyan-400 inline-block">
                  {typedText}
                  <motion.span
                    className="inline-block w-0.5 h-8 bg-cyan-400 ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                </span>
              </motion.h2>
              <motion.p 
                className="mt-6 text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                I am a dedicated Software Engineer with a focus on React.js, Next.js, React Native, and modern web technologies. 
                I build scalable and efficient web and mobile applications that enhance user experience and achieve business goals. 
                With over a year of industry experience, I deliver complete, high-quality solutions using strong technical and problem-solving skills.
              </motion.p>
              
              {/* Social Links */}
              <motion.div 
                className="mt-8 flex justify-center lg:justify-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {['LinkedIn', 'GitHub', 'Twitter', 'Instagram'].map((platform, index) => (
                  <motion.a
                    key={platform}
                    href="#"
                    className="w-11 h-11 flex items-center justify-center rounded-full border-2 border-gray-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-400/30 transition-all"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <div className="w-5 h-5 bg-gray-500 rounded" />
                  </motion.a>
                ))}
              </motion.div>
              
              <motion.div 
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <motion.a 
                  href="/Betelhem Mekonnen (4).pdf" 
                  download="Betelhem_Mekonnen_CV.pdf"
                  className="inline-block px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-lg font-semibold rounded-full shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/50 transition-all"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(236, 72, 153, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download CV
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Stats Section */}
          <motion.div 
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {[
              { number: '1+', label: 'Years of', sublabel: 'Experience' },
              { number: '15+', label: 'Projects', sublabel: 'Completed' },
              { number: '10+', label: 'Technologies', sublabel: 'Mastered' },
              { number: '15+', label: 'Satisfied', sublabel: 'Clients' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="relative text-center py-8 px-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
                <div className="text-cyan-400 font-medium">{stat.sublabel}</div>
                {index < 3 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gray-700"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#0f1d2e]/50 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-cyan-400">Me</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                I'm Betelhem and I'm a <span className="text-cyan-400">Software Engineer</span>
              </h3>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                I am Betelhem Mekonnen, a dedicated Full-Stack Developer with a focus on React.js, Next.js, 
                React Native, Node.js, PHP, MySQL, and MongoDB. I build scalable and efficient web and 
                mobile applications that enhance user experience and achieve business goals.
              </p>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                With over a year of industry experience, I deliver complete, high-quality solutions using 
                strong technical and problem-solving skills. I'm passionate about continuous learning, 
                collaboration, and creating innovative digital experiences.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: 'Name:', value: 'Betelhem Mekonnen' },
                  { label: 'Education:', value: 'B.S. Software Engineering' },
                  { label: 'From:', value: 'Addis Ababa, Ethiopia' },
                  { label: 'Email:', value: 'bmekonnenad@gmail.com' },
                  { label: 'Phone:', value: '0989860174' },
                  { label: 'Freelance:', value: 'Available' }
                ].map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <span className="text-cyan-400 font-semibold min-w-[100px]">{info.label}</span>
                    <span className="text-gray-300">{info.value}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <motion.a 
                  href="#contact" 
                  className="inline-block px-8 py-3.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/50 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hire Me
                </motion.a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-8">My Journey</h3>
                <div className="space-y-8">
                  {[
                    {
                      year: 'Jan 2024 - Present',
                      title: 'Fullstack Developer',
                      company: 'RightTech Solution PLC, Addis Ababa',
                      description: 'Focused on developing React, Next.js, and React Native applications. Integrated Telebirr payment system, delivered WordPress sites, and built mobile apps for various clients.'
                    },
                    {
                      year: 'Jun 2023 - Oct 2023',
                      title: 'Full Stack Developer Intern',
                      company: 'Tech Ethio IT Solution PLC, Addis Ababa',
                      description: 'Built a full-stack blogging system with React.js, Node.js, and Tailwind CSS. Implemented authentication, CRUD operations, and RESTful API integration.'
                    },
                    {
                      year: 'Sep 2019 - Jun 2024',
                      title: 'B.S. Software Engineering',
                      company: 'Addis Ababa Science and Technology University',
                      description: 'Graduated with a Bachelor of Degree in Software Engineering, specializing in web development, mobile applications, and modern software practices.'
                    }
                  ].map((exp, index) => (
                    <motion.div 
                      key={index}
                      className="relative pl-8 border-l-2 border-cyan-400/30 hover:border-cyan-400 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
                      <div className="text-cyan-400 text-sm font-semibold mb-1">{exp.year}</div>
                      <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                      <p className="text-purple-400 font-medium mb-2">{exp.company}</p>
                      <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-cyan-400">Skills</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left column - Technical Skills with bars */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-3xl font-bold text-white mb-10">
                Technical Expertise
              </h3>
              <div className="space-y-8">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex justify-between mb-3">
                      <span className="font-semibold text-white text-lg">{skill.name}</span>
                      <span className="text-cyan-400 font-bold text-lg">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full shadow-lg shadow-cyan-400/50"
                        style={{ width: 0 }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Right column - Professional Skills with icons */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-3xl font-bold text-white mb-10">
                Professional Skills
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  "Continuous Learning",
                  "Collaboration & Teamwork",
                  "Time Management",
                  "Problem Solving",
                  "Adaptability",
                  "Code Review",
                  "Agile Methodology",
                  "Organization"
                ].map((skill, index) => (
                  <motion.div 
                    key={index} 
                    className="relative group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all cursor-pointer">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-600/20 group-hover:from-cyan-400/30 group-hover:to-purple-600/30 transition-all">
                        <div className="text-cyan-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-gray-200 text-center font-medium group-hover:text-white transition-colors">{skill}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="portfolio" className="py-20 bg-[#0f1d2e]/50 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-cyan-400">Portfolio</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
              Explore my latest projects showcasing creativity, innovation, and technical excellence
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-56 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-400/10 to-purple-600/10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-dashed border-white/30 flex items-center justify-center" >
                      <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex} 
                        className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-sm rounded-full"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 211, 238, 0.2)" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.button 
                      className="flex-1 py-2.5 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/30 transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Live Demo
                    </motion.button>
                    <motion.button 
                      className="p-2.5 bg-white/5 border border-white/10 text-gray-300 rounded-lg hover:bg-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.button 
              className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 text-lg font-semibold rounded-full hover:bg-cyan-400 hover:text-[#0a1628] transition-all"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(34, 211, 238, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact <span className="text-cyan-400">Me</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let's work together to create something amazing!
            </p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Call Button */}
              <motion.a
                href="tel:+251989860174"
                className="group flex flex-col items-center justify-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 hover:border-cyan-400/50 transition-all cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-2xl group-hover:from-green-400/30 group-hover:to-emerald-600/30 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">Call Me</h3>
                <p className="text-gray-400 text-center text-sm">+251 989 860 174</p>
              </motion.a>

              {/* WhatsApp Button */}
              <motion.a
                href="https://wa.me/251989860174"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 hover:border-cyan-400/50 transition-all cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl group-hover:from-green-500/30 group-hover:to-green-600/30 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-500 transition-colors">WhatsApp</h3>
                <p className="text-gray-400 text-center text-sm">Message me directly</p>
              </motion.a>

              {/* Telegram Button */}
              <motion.a
                href="https://t.me/Mekbetty"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 hover:border-cyan-400/50 transition-all cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-2xl group-hover:from-cyan-400/30 group-hover:to-blue-600/30 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Telegram</h3>
                <p className="text-gray-400 text-center text-sm">@Mekbetty</p>
              </motion.a>

              {/* LinkedIn Button */}
              <motion.a
                href="https://www.linkedin.com/in/betelhem-mekonnen-7b0b86256"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 hover:border-cyan-400/50 transition-all cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-2xl group-hover:from-blue-500/30 group-hover:to-blue-700/30 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-500 transition-colors">LinkedIn</h3>
                <p className="text-gray-400 text-center text-sm">Connect with me</p>
              </motion.a>
            </motion.div>
          </div>

          {/* Contact Info Section */}
          <motion.div
            className="mt-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Additional Contact Info
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    title: "Email Me",
                    content: "bmekonnenad@gmail.com",
                    href: "mailto:bmekonnenad@gmail.com"
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    title: "Location",
                    content: "Addis Ababa, Bole Dembel",
                    href: null
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                    {...(item.href && {
                      as: "a",
                      href: item.href,
                      style: { cursor: "pointer" }
                    })}
                  >
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-xl text-cyan-400 group-hover:from-cyan-400/30 group-hover:to-purple-600/30 transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-10 pt-8 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <h4 className="text-lg font-semibold text-white mb-4 text-center">Follow Me</h4>
                <div className="flex justify-center gap-4">
                  {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((platform, index) => (
                    <motion.a 
                      key={index}
                      href="#" 
                      className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:bg-gradient-to-br hover:from-cyan-400/20 hover:to-purple-600/20 hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
                      whileHover={{ 
                        y: -5,
                        scale: 1.1
                      }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="w-5 h-5 bg-gray-500 rounded" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1016] border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div 
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl font-bold text-white">
                Portf<span className="text-cyan-400">o</span>lio
              </span>
              <p className="mt-2 text-gray-400">
                Creating beautiful digital experiences
              </p>
            </motion.div>
            
            <motion.div 
              className="flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((platform, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:bg-gradient-to-br hover:from-cyan-400/20 hover:to-purple-600/20 hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
                  whileHover={{ 
                    y: -5,
                    scale: 1.1
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">{platform}</span>
                  <div className="w-5 h-5 bg-gray-500 rounded" />
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-8 pt-8 border-t border-white/10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400">
              &copy; 2024 Betelhem Mekonnen. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}