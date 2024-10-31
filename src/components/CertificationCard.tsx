import React from 'react';
import { Award } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  issuer,
  date,
  description,
}) => {
  return (
    <div className="glass-effect rounded-xl p-6 card-hover group">
      <div className="flex items-start gap-4">
        <div className="text-blue-400 transform transition-transform group-hover:scale-110 group-hover:rotate-12">
          <Award size={24} className="animate-float" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
          <p className="text-gray-400 text-sm mb-2">{issuer} • {date}</p>
          <p className="text-gray-300 transition-colors group-hover:text-gray-200">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;