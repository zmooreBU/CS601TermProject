import { Link } from 'react-router-dom';
import MainPageTemplate from './MainPageTemplate';

function ProjectsPage() {
    return (
        <MainPageTemplate title="My Projects" img="/CS601TermProject/assets/mainpage-img.png">
            <Link to="/CS601TermProject/projects/roadheart-repository/" className="project-link"><h2>The Roadheart Repository</h2></Link>
        </MainPageTemplate>
    );
}

export default ProjectsPage;