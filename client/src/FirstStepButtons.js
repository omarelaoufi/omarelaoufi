import { Button } from "./Button";
import { Buttons } from "./Buttons";

function FirstStepButtons({ buttonClicked, setButtonClicked, setCurrentText }) {
  return (
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
  );
}

export default FirstStepButtons;
