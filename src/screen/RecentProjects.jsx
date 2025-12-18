import ProjectCard from "../components/ProjectCard";
import { projects } from "../components/projects";

export default function RecentProjects() {
  return (
    <section className="bg-[#07162b] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="mb-12">
          <p className="text-blue-400 text-sm mb-2">
            My Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Recent Project
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
