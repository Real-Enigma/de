import React from 'react';

type SustainabilityCardProps = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const SustainabilityCard: React.FC<SustainabilityCardProps> = ({ title, description, icon }) => {
  const Icon = icon;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 mr-2" />
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default SustainabilityCard;
