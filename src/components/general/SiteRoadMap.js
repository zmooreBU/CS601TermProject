import { Link } from 'react-router-dom';

function SiteRoadMap() {
    return(
        <div className="about-roadmap">
            <Link to="/CS601TermProject/resume">
                <img src="/CS601TermProject/assets/docIcon.svg" />
                <h2>View my resume</h2>
            </Link>
            <Link to="/CS601TermProject/projects">
                <img src="/CS601TermProject/assets/stars.svg" />
                <h2>See some of my projects</h2>
            </Link>
            <Link to="/CS601TermProject/contact">
                <img src="/CS601TermProject/assets/mail-icon.svg" />
                <h2>Contact Me</h2>
            </Link>
        </div>
    );
}

export default SiteRoadMap;