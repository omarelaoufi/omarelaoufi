import { useEffect, useState } from "react";
import styled from "styled-components";
// import { twinkle, writeCharacter } from "./utils";

function Text({ text = "", currentText, textDone, setTextDone }) {
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
      setVisibleCursor(false);
    } else {
      if (textIndex < text.length) {
        writingTimeout = setTimeout(() => {
          setVisibleText((v) => [...v.slice(0, -1)]);
          setVisibleText((v) => [...v, text[textIndex], "▓"]);
          setTextIndex((t) => t + 1);
        }, 30);
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
  }, [textIndex, text, receivedText, setTextDone, currentText, visibleCursor]);

  return (
    <MainText>{visibleText.map((s) => (s === "\\" ? <br /> : s))}</MainText>
  );
}

const MainText = styled.div`
  font-size: 1.1rem;
  line-height: 1.3;
  font-weight: 500;
`;

export default Text;
