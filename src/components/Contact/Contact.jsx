// Contact.jsx
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";
import ContactCard from "./ContactCard";
import { toast } from "react-toastify";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Just show a toast and clear form
    toast.success("Message sent successfully! 🚀");

    // Optional: clear fields
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="bg-gray-950 text-white py-12 px-4 md:px-10"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left: Contact Info */}
        <div>
          <ContactCard
            icon={<FaPhoneAlt />}
            title="Phone"
            value="+8801990654835"
          />
          <ContactCard
            icon={<FaEnvelope />}
            title="Email"
            value="mdabdullah6548ctg@gmail.com"
          />
          <ContactCard
            icon={<FaGithub />}
            title="GitHub"
            value="Mohammed Abdullah"
            link="https://github.com/Abdullah0604"
          />
          <ContactCard
            icon={<FaLinkedin />}
            title="LinkedIn"
            value="Mohammed Abdullah"
            link="https://www.linkedin.com/in/mohammed-abdullah-017664280/"
          />
          <ContactCard
            icon={<FaWhatsapp />}
            title="WhatsApp"
            value="Chat Now"
            link="https://wa.me/8801990654835"
          />
        </div>

        {/* Right: Contact Form */}
        <div className="bg-gradient-to-br from-[#111827] to-[#1f2937] p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-[#4CAF50] mb-6">
            Send Me a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-800 rounded-md text-white outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-800 rounded-md text-white outline-none"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 bg-gray-800 rounded-md text-white outline-none"
              required
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 bg-gray-800 rounded-md text-white outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#4CAF50] hover:bg-green-500 text-black font-semibold py-3 rounded-md flex items-center justify-center gap-2 transition"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
