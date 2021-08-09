import React from "react";
import styled from "styled-components";
import { device } from "../utils/breakpoints";
import ProjectElements from "./ProjectElements";

export default function Projects() {
  const ProjectsGrid = styled.section`
    width: 80vw;
    margin: auto;
    margin-bottom: 64px;
  `;

  const ProjectItem = styled.section`
    display: flex;
    margin: 16px;
    border: 8px solid black;
    @media screen and ${device.laptop} {
      flex-direction: column-reverse;
    }
  `;

  const Description = styled.section`
    width: 75%;
    margin-right: 64px;
    text-align: left;
    padding: 32px 0px 32px 32px;
    box-sizing: border-box;
    div {
      float: left;
      border: 2px solid #06D6A0;
      margin: 0px 4px 4px 0px;
      padding: 8px;
      border-radius: 4px;
      color: #06D6A0;
      font-size: smaller;
      font-weight: 600;
    }
    @media screen and ${device.tablet} {
      margin-right: 0px;
      padding: 8px;
    }
  `;

  const Image = styled.section`
    align-self: center;
    width: 100%;
    height: 450px;
    @media screen and ${device.mobileL} {
      height: 150px;
    }
  `;

  return (
    <section id="projects">
      <h1 className="title" style={{paddingTop: 50}}>Projects</h1>
      <ProjectsGrid>
        {ProjectElements.map(({id, title, technologies, description, image}, i) => (
            <ProjectItem key={i}> 
              <Description>
                <h2>{title}</h2>
                {description.map((bullet, j) => <p key={j}>{bullet}</p>)}
                {technologies.map((bullet, j) => <div key={j}>{bullet}</div>)}
              </Description>

              <Image
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                }}
              />
            </ProjectItem>
        ))}
      </ProjectsGrid>
    </section>
  );
}
