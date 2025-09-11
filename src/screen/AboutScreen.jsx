import React from 'react';
import './style/AboutScreenStyle.css';
import '../components/Responsive.css'
import Skills from '../components/SkillProcess';
import SkillItem from '../components/SkillItem'; // Import the SkillItem component
import '../components/Animation.css'
const AboutScreen = () => {
  const skills = [
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', name: 'HTML5' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', name: 'CSS3' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', name: 'JavaScript' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React.js' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', name: 'Next.js' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', name: 'TailwindCSS' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', name: 'Node.js' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', name: 'Git' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg', name: 'Photoshop' },
    { icon: 'https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/illustrator/illustrator-original.svg', name: 'Illustrator' },
    { icon: 'https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/aftereffects/aftereffects-original.svg', name: 'After Effects' },
    { icon: 'https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/premierepro/premierepro-original.svg', name: 'Premiere Pro' },
  ];

  return (
    <div className="container mx-auto autoShow">
      <div className="flex flex-col md:flex-row gap-6">
          {/* Left Box */}
        <div className="md:w-1/2 py-6 px-4 text-white ">
            <h2 className="text-3xl font-bold text-center mb-6">
              ABOUT <span className="brand-color1">ME</span>
            </h2>

            <div className="max-w-4xl mx-auto text-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                  <SkillItem key={index} icon={skill.icon} name={skill.name} />
                ))}
              </div>
            </div>
        </div>
        {/* Right Box */}
        <div className="md:w-1/2 p-4">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;