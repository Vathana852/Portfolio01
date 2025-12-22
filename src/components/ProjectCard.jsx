import React from "react";
import "./style/ProjectCardStyle.css";


export default function ProjectCard({ project }) {
  return (
    <div className="Project-card group rounded-2xl overflow-hidden hover:border-blue-500/40 transition">
      
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="content-subtitle text-sm text-blue-400 mb-1">
          {project.category}
        </p>

        <h3 className="content-title text-lg font-semibold mb-4">
          {project.title}
        </h3>

        <a
          href={project.link}
          className="Card-btn inline-flex items-center gap-2 text-sm font-medium text-white  px-4 py-2 rounded-full transition"
        >
          View Project
          →
        </a>
      </div>
    </div>
  );
}
