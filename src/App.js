import Navbar from "./components/navbar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/About";
import Skills from "./components/Skills/skills";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Skills />
    </div>
  );
}

export default App;
