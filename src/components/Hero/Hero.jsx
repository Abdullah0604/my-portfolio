import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="bg-white text-black pt-36">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Left Side Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 font-extrabold mb-2">
            Mohammed Abdullah
          </h1>
          <h2 className="text-xl md:text-2xl  text-gray-800 font-bold mb-2">
            Frontend Developer
          </h2>
          <p className="text-gray-700 mb-4 max-w-[500px]">
            I build responsive, user-friendly web interfaces using React and
            modern frontend tools.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4 mb-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4CAF50] duration-300 hover:text-green-700 text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4CAF50] duration-300 hover:text-green-700 text-xl"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4CAF50] duration-500 text-white px-5 py-2 rounded hover:bg-green-700"
          >
            Resume
          </a>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/hero.jpg"
            alt="Md Abdullah"
            className="w-60 h-60 lg:w-80 lg:h-80 xl:w-90 xl:h-90 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
