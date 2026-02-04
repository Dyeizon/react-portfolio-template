import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">IT Technician</h3>
            <h4 className="vertical-timeline-element-subtitle">Câmara Municipal, Videira/SC, Brazil</h4>
            <p>
              Currently working as an IT Technician in a municipal legislative body, supporting public sector operations through system maintenance, technological modernization, and the integration of new digital tools to improve efficiency and internal processes.
            </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">IT and Programming Instructor</h3>
            <h4 className="vertical-timeline-element-subtitle">CETESC, Videira/SC, Brazil</h4>
            <p>
              Taught programming fundamentals and information technology concepts, covering basic development logic, algorithms, and introductory programming languages. Guided students through hands-on exercises and practical projects, focusing on problem-solving skills, logical thinking, and the application of programming concepts in real-world scenarios.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Technical Support Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">INFONET, Videira/SC, Brazil</h4>
            <p>
              Provided remote technical support to telecommunications customers, diagnosing and resolving internet connectivity issues. Assisted clients via phone and remote access tools, performed network troubleshooting, and ensured service stability while maintaining clear and effective communication.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;