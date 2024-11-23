import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-lg text-gray-600"
          >
            <p>
              Hello! I'm an aspiring software engineer and web developer, eager
              to kickstart my career by building innovative and user-friendly
              applications. My journey into technology stems from a passion for
              problem-solving and a desire to create solutions that make a
              meaningful impact.
            </p>
            <p>
              With a foundation in designing, developing, and testing software
              and web applications across various technologies, I am
              continuously learning and upgrading my skills to stay ahead in the
              ever-evolving tech landscape. I am excited to bring my creativity
              and dedication to new challenges where I can grow and contribute
              effectively.
            </p>
            <p>
              When I'm not honing my skills, I enjoy exploring the latest
              technologies, working on personal projects, and seeking
              opportunities to make a positive impact through software and web
              development.
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-purple-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-purple-600 mb-2">1+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-pink-600 mb-2">4+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-purple-600 mb-2">
                10+
              </h3>
              <p className="text-gray-600">Team Members</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-pink-600 mb-2">2+</h3>
              <p className="text-gray-600">Certificates Won</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
