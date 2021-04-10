import './App.css';
import Navbar from './components/navbar';
import AboutMe from './components/aboutMe';
import Education from './components/education';
import Skills from './components/skills';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <AboutMe/>
      <Education/>
      <Skills/>
    </div>
  );
}

export default App;
