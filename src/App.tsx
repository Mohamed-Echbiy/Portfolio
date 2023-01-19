import About from "./components/About/About";
import Form from "./components/Form/Form";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="app dark:text-white min-h-screen max-1900">
      <motion.section
        className="relative bg-[url('/HeroBgLight.png')] bg-no-repeat bg-cover bg-center w-full min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <Navbar />
        <Herosection />
      </motion.section>
      <About />
      <Skills />
      <Projects />
      <Form />
    </div>
  );
}
export default App;
