import Text from "./Text";

function LanguageText({ language, currentText, textDone, setTextDone }) {
  return (
    <Text
      currentText={currentText}
      textDone={textDone}
      setTextDone={setTextDone}
      text={(function () {
        switch (language) {
          case "python":
            return "Python.\\\\Fully proficient..\\\\Projects:\\- Machine learning";
          case "django":
            return "Djangooooo";
          default:
            return language;
        }
      })()}
    />
  );
}

export default LanguageText;
