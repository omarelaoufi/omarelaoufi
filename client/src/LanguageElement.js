import styled from "styled-components";
import { fadeIn, translate } from "./utils";

function LanguageElement({ order, name, setSelectedLanguage }) {
  return (
    <Image
      onMouseEnter={() => setSelectedLanguage(name)}
      order={order}
      alt={name.toUpperCase()}
      src={name + ".png"}
    />
  );
}

const Image = styled.img`
  position: absolute;
  width: 60px;
  opacity: 0;
  visibility: hidden;
  animation: 1s ${fadeIn} linear ${({ order }) => order * 1000}ms forwards,
    15s ${translate} linear ${({ order }) => order * 1000}ms infinite running;

  &:hover {
    border-radius: 10px;
    box-shadow: rgba(102, 138, 165, 0.4) 0px 16px 32px 0px;
  }
`;

export default LanguageElement;
