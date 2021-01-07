import { useState } from "react";
import styled from "styled-components";
import Text from "./Text";
import "./App.css";
import StackSlider from "./StackSlider";
import LanguageText from "./LanguageText";
import Avatar from "./Avatar";
import { fadeIn } from "./utils";

function App() {
  const [textDone, setTextDone] = useState(false);
  const [secondTextDone, setSecondTextDone] = useState(false);
  const [languageTextDone, setLanguageTextDone] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const [buttonClicked, setButtonClicked] = useState(null);

  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <Body className="App">
      <Text
        currentText={currentText === 0}
        textDone={textDone}
        setTextDone={setTextDone}
        text="HELLO.FRIEND.\\My name is Omar El Aoufi.\I am the full-stack developer you need."
      />
      {textDone && (
        <Buttons>
          {(buttonClicked === null || buttonClicked === 0) && (
            <Button
              clicked={buttonClicked === 0}
              onClick={() => {
                setButtonClicked(0);
                setCurrentText(2);
              }}
            >
              💻 show me your powers
            </Button>
          )}
          <br />
          {(buttonClicked === null || buttonClicked === 1) && (
            <Button
              className="whoYouAreButton"
              clicked={buttonClicked === 1}
              onClick={() => {
                setButtonClicked(1);
                setCurrentText(1);
              }}
            >
              🤷 who are you ?
            </Button>
          )}
        </Buttons>
      )}

      {buttonClicked === 0 && (
        <StackSlider setSelectedLanguage={setSelectedLanguage} />
      )}

      {buttonClicked === 1 && (
        <Text
          currentText={currentText === 1}
          textDone={secondTextDone}
          setTextDone={setSecondTextDone}
          text="I spent 26 years trying to take over the world by developing tech skills.\My headquarters are in Paris.\I've been developing since I'm 13 years old."
        />
      )}

      {selectedLanguage !== null && (
        <LanguageText
          language={selectedLanguage}
          currentText={currentText === 2}
          textDone={languageTextDone}
          setTextDone={setLanguageTextDone}
        />
      )}

      <Buttons>
        {buttonClicked !== null && (
          <Button
            className="backButton"
            onClick={() => {
              setButtonClicked(null);
              setCurrentText(0);
              setSelectedLanguage(null);
            }}
          >
            go back in time
          </Button>
        )}
      </Buttons>

      <Avatar />
    </Body>
  );
}

const Body = styled.div`
  font-family: "Inconsolata", monospace;
  color: #282828;
  width: calc(100% - 50px);
  max-width: 500px;
  margin: auto;
  margin-top: 5rem;
`;

const Buttons = styled.div`
  margin-top: 1.1rem;
  text-align: right;
  animation: ${fadeIn} ease 400ms;
`;

const Button = styled.button`
  background: #fff;
  border: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  box-shadow: ${({ clicked }) =>
    !clicked ? "0 16px 32px 0 rgba(102, 138, 165, 0.4)" : "initial"};
  margin-bottom: 0.7rem;
  &:focus {
    outline: none;
  }
  ${({ clicked }) => clicked && `background: rgba(15,92,121,0.13)`};
`;

export default App;
