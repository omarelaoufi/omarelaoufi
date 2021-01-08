import { useState } from "react";
import styled from "styled-components";
import Text from "./Text";
import "./App.css";
import StackSlider from "./StackSlider";
import LanguageText from "./LanguageText";
import Avatar from "./Avatar";
import FirstStepButtons from "./FirstStepButtons";
import PermanentButtons from "./PermanentButtons";

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
        text="Hello friend.\\My name is Omar El Aoufi.\I am the full-stack developer you need."
      />
      {textDone && (
        <FirstStepButtons
          buttonClicked={buttonClicked}
          setButtonClicked={setButtonClicked}
          setCurrentText={setCurrentText}
        />
      )}

      {buttonClicked === 0 && (
        <StackSlider setSelectedLanguage={setSelectedLanguage} />
      )}

      {buttonClicked === 1 && (
        <Text
          currentText={currentText === 1}
          textDone={secondTextDone}
          setTextDone={setSecondTextDone}
          text="I spent 26 years trying to take over the world by developing tech skills.\
          My headquarters are in Paris."
        />
      )}

      {currentText === 2 && selectedLanguage !== null && (
        <LanguageText
          language={selectedLanguage}
          currentText={currentText === 2}
          textDone={languageTextDone}
          setTextDone={setLanguageTextDone}
        />
      )}

      <PermanentButtons
        buttonClicked={buttonClicked}
        setButtonClicked={setButtonClicked}
        setCurrentText={setCurrentText}
      />

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
  padding-bottom: 15vh;
`;

export default App;
