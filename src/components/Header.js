import React from "react";
import styled from 'styled-components';
import logo from "../assets/logo.svg";

export default function Header() {
    const Header = styled.section`
        background: papayawhip;
        width: "100%";
        height: 3em;
        padding: 16px 20px;
        
        display: flex;
        justify-content: space-between;
        align-items: center;
       
        ul {
            list-style-type: none;
            display: flex;
        }
        li {
            float: left;
            padding: 0px 24px;
        }
        a:link, a:visited, a:active {
            color: black;
            text-decoration: none;
        }
        a:hover {
            color: red;
            transition: color 1s;
        }
    `;
    
    return (
        <Header>
            <img src={logo} height="48px" width="48px" alt="logo"/>
            <ul>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Work Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
            </ul>
        </Header>
    )
}