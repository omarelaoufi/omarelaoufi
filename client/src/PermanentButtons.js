import { Button } from "./Button";
import { Buttons } from "./Buttons";

function PermanentButtons({ buttonClicked, setButtonClicked, setCurrentText }) {
  return (
    <Buttons>
      {buttonClicked !== null && (
        <Button
          className="backButton"
          onClick={() => {
            setButtonClicked(null);
            setCurrentText(0);
          }}
        >
          go back in time
        </Button>
      )}
    </Buttons>
  );
}

export default PermanentButtons;
