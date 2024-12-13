import React from 'react';

export function ContactCard({ icon, title, content, subtitle, href }) {
  function CardContent() {
    return (
      <div className="relative flex flex-col items-center text-center">
        <div className="p-3 bg-teal-500/10 rounded-xl mb-4 text-teal-400">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-teal-400 font-medium mb-1">{content}</p>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
    );
  }

  const cardClasses = "group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:transform hover:-translate-y-1 hover:bg-gray-800/70 border border-gray-700/50";

  if (href) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${cardClasses} cursor-pointer`}
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-300" />
        <CardContent />
      </a>
    );
  }

  return (
    <div className={cardClasses}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-300" />
      <CardContent />
    </div>
  );
}