import './App.css';
import About from './components/general/About.js';
import SiteRoadMap from './components/general/SiteRoadMap.js';
import ResumePage from './components/resume/Resume.js';
import ProjectsPage from './components/general/ProjectsPage.js'
import Contact from './components/general/Contact.js';
import NotFound from './components/general/NotFound.js';
import RoadheartRepository from './components/roadheart/RoadheartRepository.js';
import { Outlet, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/CS601TermProject/">Home</Link></li>
          <li><Link to="/resume">My Resume</Link></li>
          <li>
            <div className="dropdown">
              <Link to="/projects" >My Projects</Link>
              <div className="dropdown-content">
                <Link to="/projects/roadheart-repository/">The Roadheart Repository</Link>
              </div>
            </div>
          </li>
          <li><Link to="/contact">Contact Me</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element= { 
          <div className="home-page"> 
            <About /> 
          </div> } />
        <Route path="/resume" element= {<ResumePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/projects/roadheart-repository/*" element={<RoadheartRepository />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
