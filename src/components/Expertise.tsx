import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faDatabase, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const labelsFrontend = [
    "React",
    "Vue",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS"
];

const labelsBackend = [
    "FastAPI",
    "Next.js",
    "Express.js",
    "JWT",
    "RESTful APIs",
];

const labelsDatabase = [
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "SQL",
    "NoSQL",
    "CRUD"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Front-end Development</h3>
                    <p></p>
                    <p>I have developed a variety of web applications from scratch using modern front-end frameworks such as React, Next.js, and Vue. Most of my personal projects are built with React, focusing on component-based architecture, responsiveness, and clean user interfaces, always aiming for maintainable and scalable code.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFrontend.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faLaptopCode} size="3x"/>
                    <h3>Back-end Development</h3>
                    <p>My experience includes building RESTful APIs, implementing authentication and authorization, and connecting applications to databases. In some projects, I have also integrated machine learning and NLP models as an additional data processing layer, exposing them through back-end services.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsBackend.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Database</h3>
                    <p>Throughout my projects, I have worked with relational and non-relational database management systems, focusing on data modeling and integration with back-end services. I am familiar with designing schemas, performing CRUD operations, and ensuring data consistency within full-stack applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsDatabase.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;