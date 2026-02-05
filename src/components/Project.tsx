import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import project01 from '../assets/images/project01.png';
import '../assets/styles/Project.scss';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Chip } from '@mui/material';

const proj1Stack = [
    "React",
    "Next.js",
    "Tailwind",
    "Python",
    "FastAPI",
    "MongoDB",
    "ML",
    "NLP",
    'BeautifulSoup',
];

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href={project01} target="_blank" rel="noreferrer"><img src={project01} className="zoom" alt="thumbnail" width="100%"/></a>
                <h2><FontAwesomeIcon  icon={faLock} size="2xs"/> Council Vote Prediction System <span style={{fontSize:'16px'}}>(private)</span></h2>
                <p>Designed, developed, and launched a council vote prediction system that uses machine learning and natural language processing to analyze legislative data and textual records. The system processes historical voting data and the political alignment between council members, exposing predictions through an interactive web interface, with a focus on data analysis and transparency.<div className="flex-chips">
                    {proj1Stack.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div></p>
                
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2><a href="https://github.com/Dyeizon" target="_blank" rel="noreferrer"><GitHubIcon/></a> High Speed Chase</h2></a>
                <p>Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Astro Raiders</h2></a>
                <p>Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.</p>
            </div>
            <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Datum: Integrated Learning Platform</h2></a>
                <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;