import React from 'react';
import { ReactNode } from 'react';

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills }) => {
  return (
    <div className="glass-effect rounded-xl p-6 card-hover group">
      <div className="text-blue-400 mb-4 transform transition-transform group-hover:scale-110 group-hover:rotate-3">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-400 transition-colors">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li 
            key={index} 
            className="text-gray-300 flex items-center gap-2 transition-transform hover:translate-x-1"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;