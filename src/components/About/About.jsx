function About() {
  return (
    <section id="about">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-end">
          <img
            src="/hero.jpg"
            alt="Abdullah"
            className="w-72 h-72 rounded-lg object-cover shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-black">About Me</h2>
          <p className="text-gray-500 leading-relaxed">
            I'm Md Abdullah, a passionate frontend developer who loves building
            modern, user-friendly web applications using React, Tailwind CSS,
            and JavaScript. I focus on clean code and responsive design to
            deliver seamless experiences across all devices.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
