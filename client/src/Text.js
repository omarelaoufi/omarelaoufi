import { useEffect, useState } from "react";
import styled from "styled-components";

function Text({
  speed = 30,
  text = "",
  content = [],
  currentText,
  textDone,
  setTextDone,
}) {
  const [receivedText, setReceivedText] = useState(text);
  const [textIndex, setTextIndex] = useState(0);
  const [visibleText, setVisibleText] = useState([]);
  const [visibleCursor, setVisibleCursor] = useState(true);

  useEffect(() => {
    let writingTimeout;

    if (text !== receivedText) {
      setReceivedText(text);
      setTextIndex(0);
      setVisibleText([]);
      setVisibleCursor(true);
    } else {
      if (textIndex < text.length) {
        writingTimeout = setTimeout(() => {
          setVisibleText((v) => [...v.slice(0, -1)]);
          setVisibleText((v) => [...v, text[textIndex], "▓"]);
          setTextIndex((t) => t + 1);
        }, speed);
      } else {
        setTextDone(true);
        if (currentText || (!currentText && visibleCursor)) {
          if (visibleCursor) {
            writingTimeout = setTimeout(() => {
              setVisibleText((v) => [...v.slice(0, -1)]);
              setVisibleCursor(false);
            }, 500);
          } else {
            writingTimeout = setTimeout(() => {
              setVisibleText((v) => [...v, "▓"]);
              setVisibleCursor(true);
            }, 500);
          }
        }
      }
    }

    return () => clearTimeout(writingTimeout);
  }, [
    speed,
    textIndex,
    text,
    receivedText,
    setTextDone,
    currentText,
    visibleCursor,
  ]);

  return (
    <MainText>
      {visibleText.map((s) => {
        switch (s) {
          case "\\":
            return <br />;
          case "^":
            return content;
          default:
            return s;
        }
      })}
    </MainText>
  );
}

const MainText = styled.div`
  font-size: 1.1rem;
  line-height: 1.3;
  font-weight: 500;
`;

export default Text;
