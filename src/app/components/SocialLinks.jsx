import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/abhishek3528',
    color: 'hover:text-gray-100'
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/abhishek-sunkara98',
    color: 'hover:text-blue-500'
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:abhisheksunkara24@gmail.com',
    color: 'hover:text-red-500'
  }
];

const SocialLinks = () => {
  return (
    <div className="flex gap-4 mt-6 justify-center sm:justify-normal ">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-400 transition-colors duration-200 ${social.color}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.3 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <social.icon className="w-6 h-6" />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;