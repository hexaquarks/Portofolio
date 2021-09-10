
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Cover from './components/cover/Cover';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Extras from './components/extras/Extras';
import { useEffect } from 'react';
import Contact from './components/contact/Contact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Cover />

      <svg className="firstSeparator" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#100c08" fill-opacity="1" d="M0,224L120,234.7C240,245,480,267,720,245.3C960,224,1200,160,1320,128L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
        </path>
      </svg>

      <About />

      <svg className="secondSeparator" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#e7e7e7" fill-opacity="1" d="M0,64L48,101.3C96,139,192,213,288,240C384,267,480,245,576,213.3C672,181,768,139,864,122.7C960,107,1056,117,1152,122.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>

      <Projects />

      <svg className="thirdSeparator" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#100c08" fill-opacity="1" d="M0,224L120,234.7C240,245,480,267,720,245.3C960,224,1200,160,1320,128L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
        </path>
      </svg>

      <Extras />

      <svg className="fourthSeparator" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#e7e7e7" fill-opacity="1" d="M0,64L48,101.3C96,139,192,213,288,240C384,267,480,245,576,213.3C672,181,768,139,864,122.7C960,107,1056,117,1152,122.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>

      {/* <div className="fourthSeparator">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"  width="100%" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#e7e7e7" fill-opacity="1" d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" ></path>
    </svg>
</div> */}
      <Contact />
    </div>
  );
}

export default App;
