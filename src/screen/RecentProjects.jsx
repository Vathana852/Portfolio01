import ProjectCard from "../components/ProjectCard";
import { projects } from "../components/projects";
import "./style/RecentProjectsStyle.css";

export default function RecentProjects() {
  return (
    <section className="py-2" id="LatestProject">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="RecentProjects mb-18">
          <p className="RecentProjects-subtitle text-lg text-gray-400 mb-2">
            My Work
          </p>
          <h2 className="RecentProjects-title text-4xl font-bold mb-3">
            Recent <span>Project</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
