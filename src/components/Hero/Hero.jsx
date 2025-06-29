import { FaGithub, FaLinkedin } from "react-icons/fa";
import { toast } from "react-toastify";

function Hero() {
  return (
    <section id="home" className=" text-white pt-36">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Left Side Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-300 font-extrabold mb-2">
            Mohammed Abdullah
          </h1>
          <h2 className="text-xl md:text-2xl  text-gray-300 font-bold mb-2">
            Frontend Developer
          </h2>
          <p className="text-gray-400 mb-4 max-w-[500px]">
            I build responsive, user-friendly web interfaces using React and
            modern frontend tools.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4 mb-4 text-xl">
            <a
              href="https://github.com/Abdullah0604"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition duration-300"
            >
              <FaGithub className="" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-abdullah-017664280/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition duration-300"
            >
              <FaLinkedin className="text-[#0A66C2]" />
            </a>
          </div>

          {/* Resume Button */}
          <a
            onClick={() => toast.warn(" Resume is not ready yet!")}
            className="inline-block cursor-pointer bg-[#4CAF50] duration-500 text-white px-5 py-2 rounded hover:bg-green-700"
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
