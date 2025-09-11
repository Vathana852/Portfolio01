import React from 'react';
import './SkillItem.css';

const SkillItem = ({ icon, name }) => {
  return (
    <div className="skillItem-Container flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
      <img src={icon} alt={name} className="w-12 h-12 mb-2" />
      <span className="skillName text-gray-300">{name}</span>
    </div>
  );
};

export default SkillItem;