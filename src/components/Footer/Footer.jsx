import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-gray-900 text-gray-300 py-8 px-4 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-center md:text-left">
        {/* Left */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Your Name
        </div>

        {/* Center */}
        <div className="text-sm font-medium text-gray-200">
          Designed & Built with ❤️ by
        </div>

        {/* Right - Social Icons */}
        <div className="flex justify-center md:justify-end gap-4 text-xl">
          <a
            href="https://github.com/Abdullah0604"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 hover:text-green-400 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-abdullah-017664280/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 hover:text-green-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:mdabdullah6548ctg@email.com"
            className="hover:text-green-400 transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
