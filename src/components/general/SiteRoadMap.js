import { Link } from 'react-router-dom';

function SiteRoadMap() {
    return(
        <div className="about-roadmap">
            <Link to="/resume">
                <img src="/assets/docIcon.svg" />
                <h2>View my resume</h2>
            </Link>
            <Link to="/projects">
                <img src="/assets/stars.svg" />
                <h2>See some of my projects</h2>
            </Link>
            <Link to="/contact">
                <img src="/assets/mail-icon.svg" />
                <h2>Contact Me</h2>
            </Link>
        </div>
    );
}

export default SiteRoadMap;