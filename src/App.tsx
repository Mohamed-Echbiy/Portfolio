import About from "./components/About/About";
import Form from "./components/Form/Form";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="app dark:text-white min-h-screen max-1900">
      <section className="relative bg-[url('/HeroBgLight.png')] bg-no-repeat bg-cover bg-center w-full min-h-screen">
        <Navbar />
        <Herosection />
      </section>
      <About />
      <Skills />
      <Projects />
      <Form />
    </div>
  );
}

export default App;
