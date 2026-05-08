import About from "./pages/About";
import Experience from "./pages/Experiences";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import ProjectsPage from "./pages/Projects";
import SkillsPage from "./pages/Skills";

function App() {
  return (
    <section className="container max-w-3xl mx-auto p-6">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <ProjectsPage />
      <SkillsPage />
    </section>
  );
}

export default App;
