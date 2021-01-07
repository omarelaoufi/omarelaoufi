import { useEffect, useState } from "react";
import styled from "styled-components";

function Text({ text = "", mainText, textDone, setTextDone }) {
  const [receivedText, setReceivedText] = useState(text);
  const [textIndex, setTextIndex] = useState(0);
  const [visibleText, setVisibleText] = useState([]);
  const [visibleIndex, setVisibleIndex] = useState(true);

  useEffect(() => {
    if (text !== receivedText) {
      setReceivedText(text);
      setTextIndex(0);
      setVisibleText([]);
      setVisibleIndex(true);
    } else {
      if (textIndex <= text.length) {
        setTimeout(() => {
          setVisibleText((v) => [...v.slice(0, -1)]);
          setVisibleText((v) => [...v, text[textIndex], "▓"]);
          setTextIndex((t) => t + 1);
        }, 30);
      } else {
        setTextDone(true);
        if (mainText || (!mainText && visibleIndex)) {
          if (visibleIndex) {
            setTimeout(() => {
              setVisibleText((v) => [...v.slice(0, -1)]);
              setVisibleIndex(false);
            }, 500);
          } else {
            setTimeout(() => {
              setVisibleText((v) => [...v, "▓"]);
              setVisibleIndex(true);
            }, 500);
          }
        }
      }
    }
  }, [
    text,
    receivedText,
    textIndex,
    textDone,
    visibleIndex,
    mainText,
    setTextDone,
  ]);

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
