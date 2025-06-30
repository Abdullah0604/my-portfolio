import { Link, useLoaderData, useParams } from "react-router";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

const ProjectDetails = () => {
  const { id } = useParams();
  const projectData = useLoaderData();
  const project = projectData[id];

  if (!project) {
    return (
      <div className="text-center text-white py-20">
        <h2 className="text-2xl font-semibold">Project not found</h2>
      </div>
    );
  }

  return (
    <section className=" text-white min-h-screen py-20 px-4 md:px-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link to="/">
          <button className="flex items-center gap-2 bg-[#4CAF50] hover:bg-green-600 text-gray-200 font-medium px-4 py-2 rounded transition mb-8">
            <FaArrowLeft />
            Back Home
          </button>
        </Link>

        <h1 className="text-3xl font-bold text-[#4CAF50]">{project.title}</h1>

        <div>
          <h2 className="text-xl font-semibold mb-4">🛠 Tech Stack</h2>
          <ul className="flex flex-wrap gap-3">
            {project.techStack.map((tech, i) => (
              <li
                key={i}
                className="bg-[#161b22] text-sm px-3 py-1 rounded-full border border-[#4CAF50]"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">📄 Description</h2>
          <p className="text-gray-300">{project.description}</p>
        </div>

        <div className="flex gap-4 flex-wrap">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#4CAF50] hover:bg-green-600 text-gray-200 font-medium px-4 py-2 rounded transition"
          >
            Live Site <FaExternalLinkAlt />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#24292e] hover:bg-black text-white font-medium px-4 py-2 rounded transition"
          >
            GitHub Repo <FaGithub />
          </a>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">🚧 Challenges Faced</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {project.challenges.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">🚀 Future Improvements</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {project.futurePlans.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
