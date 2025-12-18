export default function ProjectCard({ project }) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-[#0b1d33] border border-white/10 hover:border-blue-500/40 transition">
      
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-sm text-blue-400 mb-1">
          {project.category}
        </p>

        <h3 className="text-lg font-semibold text-white mb-4">
          {project.title}
        </h3>

        <a
          href={project.link}
          className="inline-flex items-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full transition"
        >
          View Project
          →
        </a>
      </div>
    </div>
  );
}
