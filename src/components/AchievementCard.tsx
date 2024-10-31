import React from 'react';
import { Award } from 'lucide-react';

interface AchievementCardProps {
  title: string;
  description: string;
  year: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  description,
  year,
}) => {
  return (
    <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:transform hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="text-blue-400">
          <Award size={24} />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-300 mb-2">{description}</p>
          <p className="text-gray-400 text-sm">{year}</p>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;