import './App.css';
import About from './components/general/About.js';
import ResumePage from './components/resume/Resume.js';
import ProjectsPage from './components/general/ProjectsPage.js'
import Contact from './components/general/Contact.js';
import NotFound from './components/general/NotFound.js';
import RoadheartRepository from './components/roadheart/RoadheartRepository.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/CS601TermProject/">Home</Link></li>
          <li><Link to="/CS601TermProject/resume">My Resume</Link></li>
          <li>
            <div className="dropdown">
              <Link to="/CS601TermProject/projects" >My Projects</Link>
              <div className="dropdown-content">
                <Link to="/CS601TermProject/projects/roadheart-repository/">The Roadheart Repository</Link>
              </div>
            </div>
          </li>
          <li><Link to="/CS601TermProject/contact">Contact Me</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/CS601TermProject/" element= { 
          <div className="home-page"> 
            <About /> 
          </div> } />
        <Route path="/CS601TermProject/resume" element= {<ResumePage />} />
        <Route path="/CS601TermProject/contact" element={<Contact />} />
        <Route path="/CS601TermProject/projects" element={<ProjectsPage />} />
        <Route path="/CS601TermProject/*" element={<NotFound />} />
        <Route path="/CS601TermProject/projects/roadheart-repository/*" element={<RoadheartRepository />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
