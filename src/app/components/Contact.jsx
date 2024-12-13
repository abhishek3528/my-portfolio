import React from 'react';
import { ContactCard } from './ContactCard';
import { FaLinkedin } from 'react-icons/fa';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { LuMail } from 'react-icons/lu';


export function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNCA0LTEuNzkgNC00LTEuNzktNC00LTR6bTAgNmMtMS4xIDAtMi0uOS0yLTJzLjktMiAyLTIgMiAuOSAyIDItLjkgMi0yIDJ6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz48L2c+PC9zdmc+')] 
        opacity-5"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-600">
            Get in Touch
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-teal-300 mx-auto rounded-full mb-10" />
          <p className="text-white leading-relaxed text-xl  mx-auto">
                  I'm currently looking for new opportunities, so whether you have a question, a project in mind,
                  or just want to say hello, feel free to reach out, and let's create something amazing together!
                </p>
        </div>
        

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ContactCard 
            icon={<MapPinIcon className="w-6 h-6" />}
            title="Location"
            content=" United States"
            subtitle=""
          />
          <ContactCard 
            icon={<LuMail className="w-6 h-6" />}
            title="Email"
            content="abhisheksunkara24@gmail.com"
            subtitle="Send me an email"
            href="mailto:abhisheksunkara24@gmail.com"
          />
          <ContactCard 
            icon={<FaLinkedin className="w-6 h-6" />}
            title="LinkedIn"
            content="Abhishek Srinivas Sunkara"
            subtitle="Let's connect"
            href="https://www.linkedin.com/in/abhishek-sunkara98"
          />
        </div>
      </div>
    </section>
  );
}