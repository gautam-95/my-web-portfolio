import Header from "./components/Header/Header";
import Profiles from "./components/Profiles/Profiles";
import classes from "./App.module.scss";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className={classes.app}>
      <div>
        <Header />
        <div className={classes.profilesDesktop}>
          <Profiles />
        </div>
        <Home />
      </div>
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <div className={classes.profilesMobile}>
        <Profiles />
      </div>
    </div>
  );
}

export default App;
