import './resume.css';
import { Link } from 'react-router-dom';

function ResumePage() {
    return(
    <div className="resume">
        <h1 className="resume-title">Zoe Moore</h1>
        <Link to="/contact" className="contact-me">
            <img src="/CS601TermProject/assets/mail-icon.svg" />
            <h2>Contact Me</h2>
        </Link>
        <h2 className="resume-title">Education</h2>
        <div className="resume-section">
            <p><b>Bachelor of Science and the Arts, Mathematics and Art</b> / Carnegie Mellon<br></br>
            MAY 2021, PITTSBURGH, PA<br></br>
            <b>Andrew Carnegie Scholar</b> / 2021<br></br>
            <b>Senior Leadership Recognition</b> / 2021</p>
            <p><b>Master of Science, Computer Information Systems</b> / Boston University <br></br>
            IN PROGRESS. GRADUATION: MAY 2025, ONLINE</p>

            <div className="resume-coursework">
                <h3>Completed Coursework:</h3>
                <ul>
                    <li>Information Systems Analysis and Design</li>
                    <li>Multivariable Claculus</li>
                    <li>Database Design and Implementation</li>
                </ul>
                <ul>
                    <li>Intro to Computer Systems</li>
                    <li>Algebraic Structures</li>
                    <li>IT Strategy and Management</li>
                </ul>
                <ul>
                    <li>Computer Graphics</li>
                    <li>Business Data Communication and Networks</li>
                </ul>
            </div>
        </div>
        <h2 className="resume-title">Experience</h2>
        <div className="resume-section">
            <p><b>En Garde Systems</b> / Contract Worker <br></br>
            May 2023 - present <br></br>
            I develop web-based UI for software defined radio programs using the Vue framework. I do research and write-ups on technology for possible projects, including GPS and virtual reality.</p>
            <p><b>Joann Fabrics</b> / Part-Time Team Member<br></br>
            September 2022 - July 2023<br></br>
            I worked as a cashier, stocked shelves, and helped customers find the right supplis for their projects.</p>
        </div>
        <h2 className="resume-title">Projects & Skills</h2>
        <div className="resume-section resume-projects">
            <div>
            <p><b>Web Design and Development</b><br />
            I am well-versed in HTML, CSS, and Javascript, and create layout wireframes, graphics and animations to support my designs.</p>
            <ul>
                <li><b>This Website</b><br />
                I used React to develop this website.</li>
                <li><b>Manifesto Machine</b><br />
                I coded an interactive work that asks its user questions about themselves, and uses the user's response to generate the text of a personalize manifesto.</li>
            </ul>
            <p><b>MAGE Art Jam</b><br />
            I planned an event for creating mathematically based art in Desmos and Matlab. Attendees were taugh how to use Desmos and Matlab, then encouraged to make unique imagery using equations and functions.</p>
            </div>
            <div>
            <p><b>Coding in C</b><br />
            I have completed numerous projects in C, utilizing version control through Git.</p>
            <ul>
                <li>I created my own cache system and dynamic memory allocator from scratch, ensureing that both met basic Big O efficiency requirements.</li>
                <li>I coded a multithreaded proxy server that cached web objects and used sockets to connect to a network.</li>
            </ul>
            <div className="technical-skills">
                <b>Technical Skills</b>
                <ul>
                    <li>Agile/Scrum</li>
                    <li>Git, Github</li>
                    <li>Javascript, JSON</li>
                    <li>C, C++, C#</li>
                    <li>Python</li>
                    <li>React, Vue</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Audition, Premiere</li>
                    <li>UML Modeling</li>
                    <li>Risk Analysis</li>
                    <li>Matlab</li>
                </ul>
            </div>
            </div>
        </div>
    </div>)
}

export default ResumePage;