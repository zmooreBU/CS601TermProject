import { Link } from 'react-router-dom';
import MainPageTemplate from './MainPageTemplate';

function ProjectsPage() {
    return (
        <MainPageTemplate title="My Projects" img="/assets/mainpage-img.png">
            <Link to="/projects/roadheart-repository/" className="project-link"><h2>The Roadheart Repository</h2></Link>
        </MainPageTemplate>
    );
}

export default ProjectsPage;