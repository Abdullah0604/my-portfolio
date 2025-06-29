import {
  FaExternalLinkAlt,
  FaGithub,
  FaInfoCircle,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiFirebase,
  SiExpress,
} from "react-icons/si";
import { BiSolidComponent } from "react-icons/bi";
import { Link } from "react-router";

const projects = [
  {
    id: 1,
    title: "Ecobari",
    description:
      "A community-driven web platform for gardening enthusiasts to share tips, connect with local gardeners, ask plant care questions, and join events.",
    features: ["Share Tips", "Update Tips", "Delete Tips"],
    tech: [
      "tailwind css",
      "react",
      "react-router ",
      "firebase authentication",
      "express js",
      "mongoDB",
    ],
    image: "/projects/project-01.png",
    live: "https://ecobary-gardening-community.web.app/",
    github:
      "https://github.com/Abdullah0604/EcoBari-gardening-community-platform",
  },
  {
    id: 2,
    title: "RunNexus",
    description:
      "Welcome to RunNexus, a complete marathon management platform that connects organizers with runners.",
    features: ["Create Marathon", "Join in Marathon", "Secured Data "],
    tech: [
      "tailwind css",
      "react",
      "react-router ",
      "firebase authentication",
      "express js",
      "mongoDB",
      "JWT",
    ],
    image: "/projects/project-02.png",
    live: "https://run-nexus.web.app/",
    github: "https://github.com/Abdullah0604/marathon-management-system",
  },
  {
    id: 3,
    title: "Boxnetic",
    description:
      "Boxnetic is a modern Subscription Box Service Platform that allows users to explore, subscribe to, and manage personalized subscription boxes with ease. ",
    features: ["Dark Mode", "API Integration", "Authentication"],
    tech: [
      "tailwind css",
      "react",
      "react-router ",
      "firebase authentication",
      "express js",
      "mongoDB",
    ],
    image: "/projects/project-03.png",
    live: "https://boxnetic-subscription-website.web.app/",
    github: "https://github.com/Abdullah0604/boxnetic-subscription-platform",
  },
];

const getBadgeIcon = (tech) => {
  const normalized = tech.toLowerCase().trim();
  const icons = {
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    "tailwind css": <SiTailwindcss />,
    javascript: <SiJavascript />,
    react: <FaReact />,
    "react-router": <BiSolidComponent />,
    "firebase authentication": <SiFirebase />,
    "node.js": <FaNodeJs />,
    "express js": <SiExpress />,
    mongodb: <SiMongodb />,
    github: <FaGithub />,
  };

  return icons[normalized] || null;
};

function Projects() {
  const getBadgeColor = (tech) => {
    const normalized = tech.toLowerCase().trim();

    const colors = {
      html: "bg-orange-100 text-orange-700",
      css: "bg-blue-100 text-blue-700",
      "tailwind css": "bg-sky-100 text-sky-700",
      javascript: "bg-yellow-100 text-yellow-800",
      react: "bg-cyan-100 text-cyan-700",
      "react-router": "bg-pink-100 text-pink-700",
      "firebase authentication": "bg-orange-100 text-orange-700",
      "node.js": "bg-green-100 text-green-700",
      "express js": "bg-gray-200 text-gray-700",
      mongodb: "bg-green-100 text-green-700",
      github: "bg-black text-white", // special case
    };

    return colors[normalized] || "bg-gray-100 text-gray-700";
  };

  return (
    <section className=" max-w-6xl mx-auto px-4 md:px-12" id="projects">
      <h2 className="text-3xl font-bold text-center text-gray-200 mb-12">
        Projects I’ve Built
      </h2>

      <div className="space-y-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-2 border-gray-800/80 rounded-lg p-4 md:p-6 flex flex-col md:flex-row gap-6 shadow-md"
          >
            {/* Image */}
            <div className="md:w-1/2 w-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-md"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 w-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-gray-400">
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full ${getBadgeColor(
                        tech
                      )}`}
                    >
                      {getBadgeIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>

                {/* <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${getBadgeColor(
                        tech
                      )}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div> */}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-4 flex-wrap">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#4CAF50] text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  <FaExternalLinkAlt />
                  Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#4CAF50] text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  <FaGithub />
                  GitHub
                </a>
                <Link
                  to={`/project-details/${project.id}`}
                  className="flex items-center gap-2 bg-[#4CAF50] text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  <FaInfoCircle />
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
