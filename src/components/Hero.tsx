import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/VenuUday/Mande-Venu-Uday',
      color: 'hover:text-gray-800',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://www.linkedin.com/in/mande-venu-uday-99749a235',
      color: 'hover:text-blue-600',
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      href: 'https://twitter.com/yourusername',
      color: 'hover:text-blue-400',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: 'mailto:venuuday96@gmail.com',
      color: 'hover:text-red-500',
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Venu Uday
              </span>
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-8">
              I'm a{' '}
              <TypeAnimation
                sequence={['Software Developer', 2000, 'Web Developer', 2000]}
                wrapper="span"
                speed={50}
                className="font-semibold text-purple-600"
                repeat={Infinity}
              />
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Passionate about creating beautiful and functional web
              experiences. Let's build something amazing together.
            </p>
            <div className="flex gap-6 justify-center lg:justify-start">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-600 transition-colors ${link.color}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 relative"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto">
              <motion.img
                src="venu.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/20 to-pink-600/20 hover:opacity-0 transition-opacity duration-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
