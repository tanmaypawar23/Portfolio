import Navbar from "./components/navbar/navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/skills";
import Home from "./components/Home/home";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
