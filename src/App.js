import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import WorkExp from './components/WorkExp';
import Projects from './components/Projects';
import Contactme from './components/contactme';
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
            <Contactme />
            <Footer />
      </div>
  );
}

export default App;
