import React, { useState } from "react";
import "./style/LatestProjectsScreen.css";

import wb01 from "../assets/latestProject/01-Web-Design.png";



const categories = [
  "All",
  "Web Design",
  "Mobile Design",
  "Graphic Design",
  "Other",
];

const projects = [
  {
    title: "Banner design",
    img: wb01,
    desc: "UX UI design AWS challenge.",
    category: "Web Design",
  },
  
  {
    title: "Flyer design",
    img: "https://i.pinimg.com/736x/10/6b/6a/106b6a3252c9cad8453dbafb7b300947.jpg",
    desc: "Anther project will upload soon.",
    category: "Graphic Design",
  },
  
];

export default function LatestProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const visibleProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className=" min-h-screen text-white py-8 px-6" id="LatestProject">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="mainTitle text-4xl font-bold mb-3">My <span>Latest</span> Projects</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          The convention is the main event of the year for professionals in the
          world of design and architecture.
        </p>

        {/* Category Buttons */}
        <div className="categoryBtn flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              aria-pressed={selectedCategory === cat}
              className="category-btn"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, idx) => (
            <div
              key={idx}
              className="group rounded-2xl overflow-hidden shadow-lg transition"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-80  transform transition duration-300 ease-out group-hover:scale-105"
              />
              <div className="p-5">
                <p className="text-gray-400 text-sm transform transition duration-300 ease-out group-hover:scale-105" >{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}