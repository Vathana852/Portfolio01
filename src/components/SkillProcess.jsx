import React, { useEffect, useState } from "react";
import './SkillProcessStyle.css';

const skills = [
  { name: "Graphics Design | Video Editing", level: 95 },
  { name: "Web Development", level: 85 },
  { name: "App Development", level: 75 },
  { name: "UI/UX Design", level: 90 },
  { name: "Photography (More than 2 years experiences)", level: 95 },
];

export default function Skills() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="skills-section" className=" text-white ">
      
      <p className="max-w-3xl mx-auto  text-gray-300 mb-10 text-justify">
        I am a graduate in Financial Technology from ACLEDA Institute of Business with strong expertise in Programming and IT support. 
        Throughout my academic journey, I have successfully completed multiple projects that showcase my technical skills and problem-solving abilities. 
        Additionally, I excel in collaboration and maintain strong relationships with peers and colleagues.
      </p>

      <div className="space-y-4 max-w-3xl skills-container mx-auto">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span className="brand-color1">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="brand-bg1 h-3 rounded-full transition-all duration-[2000ms] ease-out"
                style={{
                  width: inView ? `${skill.level}%` : "0%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
