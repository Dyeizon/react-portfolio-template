import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import project01 from '../assets/images/project01.png';
import project02 from '../assets/images/project02.png';
import project03 from '../assets/images/project03.png';
import project04 from '../assets/images/project04.png';
import project05 from '../assets/images/project05.png';
import project06 from '../assets/images/project06.png';

import '../assets/styles/Project.scss';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Chip } from '@mui/material';

const proj1Stack = [
    "React",
    "Next",
    "TailwindCSS",
    "Python",
    "FastAPI",
    "MongoDB",
    "ML",
    "NLP",
    'BeautifulSoup',
];

const proj2Stack = [
    "React",
    "Next",
    "TypeScript",
    "TailwindCSS",
    "Node",
    "MongoDB",
    "Mongoose",
    "JWT",
];

const proj3Stack = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT",
];

const proj4Stack = [
    "React",
    "TailwindCSS",
    "Supabase",
    "Weather API",
    "Data Analysis",
];

const proj5Stack = [
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "bcryptjs",
    "MVC",
];

const proj6Stack = [
    "Vue",
    "Bootstrap",
    "Vite",
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
                <a href={project02} target="_blank" rel="noreferrer"><img src={project02} className="zoom" alt="thumbnail" width="100%"/></a>
                <h2><a href="https://github.com/Dyeizon/OrderManager" target="_blank" rel="noreferrer"><GitHubIcon/> Agiliza Aí</a></h2>
                <p><b>Agiliza Aí</b> is a web-based order management system for restaurants and food service businesses. The application allows staff to register and organize customer orders, manage kitchen workflows using a drag-and-drop interface across order stages such as queue, in production, and ready, and handle payments via Pix. The system also displays ready orders on a public screen, improving order tracking, kitchen efficiency, and customer experience.<div className="flex-chips">
                    {proj2Stack.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div></p>
            </div>

            <div className="project">
                <a href={project03} target="_blank" rel="noreferrer"><img src={project03} className="zoom" alt="thumbnail" width="100%"/></a>
                <h2><a href="https://github.com/Dyeizon/bau-da-saude" target="_blank" rel="noreferrer"><GitHubIcon/> Baú da Saúde</a></h2>
                <p>The web application <b>Baú da Saúde</b> allows patients to organize medical exams, register health metrics, visualize historical data through interactive time-based charts, and receive periodic email reminders for recurring medical exams.<div className="flex-chips">
                    {proj3Stack.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div></p>
            </div>

            <div className="project">
                <a href={project04} target="_blank" rel="noreferrer"><img src={project04} className="zoom" alt="thumbnail" width="100%"/></a>
                <h2><a href="https://github.com/Dyeizon/vitis-front" target="_blank" rel="noreferrer"><GitHubIcon/> Vitis</a></h2>
                <p>The <b>Vitis</b> web app supports viticulture analysis by correlating grape growth stages with environmental data such as temperature and humidity, retrieved automatically via APIs, to indicate potential fungal risks based on location and climatic conditions.<div className="flex-chips">
                    {proj4Stack.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div></p>
            </div>

             <div className="project">
                <a href={project06} target="_blank" rel="noreferrer"><img src={project06} className="zoom" alt="thumbnail" width="100%"/></a>
                <h2><a href="https://github.com/Dyeizon/TarotPage" target="_blank" rel="noreferrer"><GitHubIcon/> Tarology Landing Page</a></h2>
                <p>This project was one of my first, and during its development I learned key concepts such as responsive design, manual CSS styling, carousel components, and building interfaces from scratch, with a little help from Bootstrap.<div className="flex-chips">
                    {proj6Stack.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div></p>
            </div>

             <div className="project">
                <a href={project05} target="_blank" rel="noreferrer"><img src={project05} className="zoom" alt="thumbnail" width="100%"/></a>
                <h2><a href="https://github.com/Dyeizon/BancaDeDados" target="_blank" rel="noreferrer"><GitHubIcon/> BancaDeDados</a></h2>
                <p><b>BancaDeDados</b> is a CRUD web application for organizing and managing clients, managers, products and purchases.<div className="flex-chips">
                    {proj5Stack.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div></p>
            </div>

            {/* <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2><a href="https://github.com/Dyeizon/OrderManager" target="_blank" rel="noreferrer"><GitHubIcon/></a> High Speed Chase</h2></a>
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
            </div> */}
        </div>
    </div>
    );
}

export default Project;