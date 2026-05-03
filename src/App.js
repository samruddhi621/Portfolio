
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import "./App.css";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Profile/>
    </div>
  );
}

export default App;