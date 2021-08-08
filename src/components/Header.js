import React from "react";
import styled from 'styled-components';
import logo from "../assets/logo.svg";
import { device } from "../utils/breakpoints";

export default function Header() {
    const Header = styled.section`
        min-height: 3em;
        padding: 4px 32px;

        -webkit-box-shadow: 0 8px 6px -6px #999;
        -moz-box-shadow: 0 8px 6px -6px #999;
        box-shadow: 0 8px 6px -6px #999;

        display: flex;
        justify-content: space-between;
        align-items: center;
        
        a {
            color: black;
            text-decoration: none;
        }

        @media ${device.mobileL} {
            flex-direction: column;
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

        @media ${device.mobileL} {
            flex-direction: column;
        }
        @media ${device.laptop} {
            width: 30vw;
        }

        a:link, a:visited, a:active {
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
            background-color: #73eba7;
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }
        a:hover::before {
            transform: scaleX(1);
        }
    `;

    return (
        <Header>
            <a href="#home">
                <LogoContainer>
                    <img src={logo} height="48px" width="48px" alt="logo"/>
                    <h2>Karina Zhang</h2>
                </LogoContainer>
            </a>
            <Links>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#experience">Work</a>
                <a href="#projects">Projects</a>
            </Links>
        </Header>
    )
}