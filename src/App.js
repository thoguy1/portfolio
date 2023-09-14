import Navbar from "./components/NavBar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />   
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
