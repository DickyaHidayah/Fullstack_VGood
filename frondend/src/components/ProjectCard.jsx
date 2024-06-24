import React from 'react';

const ProjectCard = ({ image, title, date, location }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <img src={image} alt={title} className="w-full h-32 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-1">{date}</p>
      <p className="text-gray-600">{location}</p>
    </div>
  );
};

export default ProjectCard;
