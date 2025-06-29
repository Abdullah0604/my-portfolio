const skills = [
  { name: "HTML5", icon: "/icons/html5.svg" },
  { name: "CSS3", icon: "/icons/css3.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwind-css.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "React.js", icon: "/icons/react.svg" },

  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "Express.js", icon: "/icons/express.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "GitHub", icon: "/icons/github.svg" },
];

function Skills() {
  return (
    <section className="bg-white " id="skills">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-black">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-2 hover:scale-105 transition duration-300"
            >
              <img src={skill.icon} alt={skill.name} className="w-22" />
              <p className="text-gray-700 text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
