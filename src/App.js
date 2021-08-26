
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Cover from './components/cover/Cover.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cover />
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" hieght="400" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#100c08" fill-opacity="1" d="M0,224L120,234.7C240,245,480,267,720,245.3C960,224,1200,160,1320,128L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
        </path>
      </svg>
    </div>
  );
}

export default App;
