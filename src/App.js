import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import WorkExp from './components/WorkExp';

function App() {
  return (
      <div className='App'>
            <NavBar />
            <Home />
            <About />
            <Skills />
            <WorkExp />
      </div>
  );
}

export default App;
