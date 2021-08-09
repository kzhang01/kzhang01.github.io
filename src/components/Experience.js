import "../styles/experience.css";
import { ReactComponent as WorkIcon } from "../assets/work.svg";
import { ReactComponent as SchoolIcon } from "../assets/school.svg";

import TimelineElements from "./TimelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <section id="experience_container">
      <h1
        className="title"
        id="experience"
        style={{ marginTop: 350, padding: 50 }}
      >
        Timeline
      </h1>
      <VerticalTimeline>
        {TimelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <div id="description">
              {element.description.map((bullet, j) => <p key={j}>{bullet}</p>)}
                </div>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }
                  `}
                  href={element.buttonLink}
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
