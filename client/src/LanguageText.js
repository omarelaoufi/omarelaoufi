import styled from "styled-components";
import Text from "./Text";
import { boostrapText } from "./Texts/bootstrap";
import { cypressText } from "./Texts/cypress";
import { djangoText } from "./Texts/django";
import { expressText } from "./Texts/express";
import { flaskText } from "./Texts/flask";
import { formikText } from "./Texts/formik";
import { javascriptText } from "./Texts/javascript";
import { mongodbText } from "./Texts/mongodb";
import { nodeText } from "./Texts/node";
import { postgresqlText } from "./Texts/postgresql";
import { pythonText } from "./Texts/python";
import { reactText } from "./Texts/react";
import { reduxText } from "./Texts/redux";
import { seleniumText } from "./Texts/selenium";
import { websocketText } from "./Texts/websocket";
import { Youtube } from "./Youtube";

function LanguageText({ language, currentText, textDone, setTextDone }) {
  return (
    <Text
      speed={10}
      currentText={currentText}
      textDone={textDone}
      setTextDone={setTextDone}
      text={(function () {
        switch (language) {
          case "python":
            return pythonText;
          case "django":
            return djangoText;
          case "flask":
            return flaskText;
          case "javascript":
            return javascriptText;
          case "node":
            return nodeText;
          case "express":
            return expressText;
          case "react":
            return reactText;
          case "redux":
            return reduxText;
          case "formik":
            return formikText;
          case "postgresql":
            return postgresqlText;
          case "mongodb":
            return mongodbText;
          case "selenium":
            return seleniumText;
          case "websocket":
            return websocketText;
          case "bootstrap":
            return boostrapText;
          case "cypress":
            return cypressText;
          default:
            return language;
        }
      })()}
      content={(function () {
        switch (language) {
          case "python":
            return (
              <Content>
                <Youtube
                  title="10h09"
                  width="420"
                  height="315"
                  src="https://www.youtube.com/embed/ELYM5myM2Js?autoplay=1&mute=1&loop=1&controls=0"
                />
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.10h09.com"
                >
                  www.10h09.com
                </a>
              </Content>
            );
          default:
            return null;
        }
      })()}
    />
  );
}

const Content = styled.div`
  text-align: center;

  a {
    color: black;
  }
`;

export default LanguageText;
