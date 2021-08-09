import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { device } from "../utils/breakpoints";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
  const Container = styled.section`
    background-color: white;
    -webkit-box-shadow: 0 8px 6px -6px #999;
    -moz-box-shadow: 0 8px 6px -6px #999;
    box-shadow: 0 8px 6px -6px #999;
  `;
  const Header = styled.section`
    margin: auto;
    width: 70vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: black;
      text-decoration: none;
    }

    @media ${device.mobileL} {
      flex-direction: column;
      padding: 16px 0px;
    }
    @media ${device.tablet} {
      width: 90vw;
    }
  `;

  const LogoContainer = styled.section`
    display: flex;
    align-items: center;
    img {
      margin-right: 16px;
    }
  `;
  const Links = styled.section`
    width: 20vw;
    display: flex;
    justify-content: space-between;

    @media ${device.laptop} {
      width: 35vw;
    }
    @media ${device.mobileL} {
      width: 80vw;
    }

    a:link,
    a:visited,
    a:active {
      color: black;
      text-decoration: none;
      position: relative;
    }
    a:hover {
      color: #000;
    }
    a::before {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #06D6A0;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
    a:hover::before {
      transform: scaleX(1);
    }
  `;

  return (
    <Container>
      <Header>
        <a href="/">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <LogoContainer>
              <img src={logo} height="48px" width="48px" alt="logo" />
              <h2>Karina Zhang</h2>
            </LogoContainer>
          </Link>
        </a>
        <Links>
          <a href="/">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </a>

          <a href="/">
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
            >
              Experience
            </Link>
          </a>

          <a href="/">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </a>
          <a href="">Resume</a>
        </Links>
      </Header>
    </Container>
  );
}
