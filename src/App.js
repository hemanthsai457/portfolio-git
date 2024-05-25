import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import WorkExp from './components/WorkExp';
import Projects from './components/Projects';
import Contact from './components/Contactme';
import Footer from './components/Footer';

function App() {
  return (
      <div className='App'>
            <NavBar />
            <Home />
            <About />
            <Skills />
            <WorkExp />
            <Projects />
            <Contact />
            <Footer />
      </div>
  );
}

export default App;
