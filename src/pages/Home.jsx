import About from "../components/About/About";
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
    </div>
  );
}
export default Home;
