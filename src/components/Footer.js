import email from "../assets/email.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import styled from "styled-components";

const Container = styled.section`
  padding: 36px 0px;
`;
const Links = styled.section`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;
const Footer = () => {
  return (
    <Container>
      <Links>
        <a href="mailto:karinazhang1@gmail.com">
          <img src={email} width="48px" alt="Email"></img>
        </a>
        <a href="https://www.github.com/kzhang01">
          <img src={github} width="48px" alt="Github"></img>
        </a>
        <a href="https://www.linkedin.com/in/karina-zhang">
          <img src={linkedin} width="48px" height="48px" alt="Linkedin"></img>
        </a>
      </Links>
      <p>Made with ❤️ by Karina Zhang</p>
    </Container>
  );
};
export default Footer;
