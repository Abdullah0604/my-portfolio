import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

function Home() {
  return (
    <div className="space-y-24">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
export default Home;
