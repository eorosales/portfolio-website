import "./App.css";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className='App'>
      <TopNavBar />
      <Hero />
      <Projects />
      {/* <About />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
