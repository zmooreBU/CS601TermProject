import './mainpage.css';
import SiteRoadMap from './SiteRoadMap.js';
import MainPageTemplate from './MainPageTemplate.js';

function About() {
    return(
        <MainPageTemplate title="Hello and Welcome." img="/assets/mainpage-img.png">
            <div>
                    <p>My name is Zoe Moore. I am a software and web developer, illustrator, mathematician, sewist, and avid tabletop roleplaying gamer. I have a Bachelor of Science and the Arts with concentrations in Mathematics and Fine Arts from Carnegie Mellon, and I am in the process of getting my Master of Science, Computer Information Systems from Boston Unviersity.</p>
                    <p>This website is intended to be a living resume, CV and  demonstration of my skills as I develop little tools to relevant to my hobbies and interests. Enjoy! </p>
            </div>
            <SiteRoadMap />
        </MainPageTemplate>
    );
}

export default About;

/**<div className="about">
            <div className="about-section">
                <h1 >Hello and Welcome.</h1>
            </div>
            <div className="about-section">
                <img src="mainpage-img.png" />
            </div>
            <div className="about-section">
                <div>
                    <p>My name is Zoe Moore. I am a software and web developer, illustrator, mathematician, sewist, and avid tabletop roleplaying gamer. I have a Bachelor of Science and the Arts with concentrations in Mathematics and Fine Arts from Carnegie Mellon, and I am in the process of getting my Master of Science, Computer Information Systems from Boston Unviersity.</p>
                    <p>This website is intended to be a living resume, CV and  demonstration of my skills as I develop little tools to relevant to my hobbies and interests. </p>
                </div>
                <SiteRoadMap />
            </div>
        </div> */