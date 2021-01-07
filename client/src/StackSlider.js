import styled from "styled-components";
import LanguageElement from "./LanguageElement";

function StackSlider({ setSelectedLanguage }) {
  const imgs = [
    "python",
    "django",
    "flask",
    "javascript",
    "node",
    "express",
    "react",
    "redux",
    "formik",
    "postgresql",
    "mongodb",
    "selenium",
    "websocket",
    "bootstrap",
    "cypress",
  ];

  return (
    <StackSliderWrapper>
      {imgs.map((name, i) => (
        <LanguageElement
          order={i}
          name={name}
          setSelectedLanguage={setSelectedLanguage}
        />
      ))}
    </StackSliderWrapper>
  );
}

const StackSliderWrapper = styled.div`
  margin-top: 2.2rem;
  padding-top: 15px;
  padding-bottom: 15px;
  overflow: hidden;
  height: 100px;
  position: relative;
  &:hover > img {
    animation-play-state: paused;
  }
`;

export default StackSlider;
