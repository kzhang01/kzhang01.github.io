import React from "react";
import styled from "styled-components";
import { device } from "../utils/breakpoints";
import me from "../assets/me.JPG";

export default function Home() {
  const Home = styled.section`
    width: 80vw;
    margin: auto;
    height: 50vh;
    h1 {
      margin-bottom: 0;
    }
    img {
      width: 50%;
    }
    @media ${device.mobileL} {
      img {
        width: 100%;
      }
      h1 {
        margin-top: 32px;
      }
    }

    @media ${device.mobileS} {
      h1 {
        font-size: 3em;
      }
    }
  `;

  return (
    <Home id="home">
      <div>
        <h1 className="title">Hey there! I'm Karina</h1>
        <h2 style={{ fontWeight: "normal" }}>
          I love untangling problems, learning new technologies, and meeting new
          people
        </h2>
      </div>
      <img src={me} alt="me" />
    </Home>
  );
}
