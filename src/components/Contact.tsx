import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'venuuday96@gmail.com',
      link: 'mailto:venuuday96@gmail.com',
      color: 'hover:text-pink-600',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      content: '+91 830 906 4373',
      link: 'tel:+918309064373',
      color: 'hover:text-purple-600',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      content: 'India, IN',
      link: 'https://maps.app.goo.gl/Yy3g3YMfv5Cup37M6',
      color: 'hover:text-indigo-600',
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-8 h-8" />,
      href: 'https://github.com/VenuUday/Mande-Venu-Uday',
      color: 'hover:text-gray-800',
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      href: 'https://www.linkedin.com/in/mande-venu-uday-99749a235',
      color: 'hover:text-blue-600',
    },
    {
      icon: <Twitter className="w-8 h-8" />,
      href: 'https://twitter.com/yourusername',
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-purple-50 to-pink-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out to me for any questions or opportunities. I'm
            always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.link}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all group"
              >
                <div
                  className={`p-4 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 group-hover:from-purple-200 group-hover:to-pink-200 ${item.color}`}
                >
                  {item.icon}
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 text-white font-medium rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                Follow Me On
              </h4>
              <div className="flex justify-center space-x-6">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
