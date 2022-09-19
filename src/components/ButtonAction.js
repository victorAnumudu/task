import { ButtonActionStyle } from "./styles/ButtonAction.style";

const ButtonAction = ({ text, color, bg, hover, onclick }) => {
  return (
    <ButtonActionStyle color={color} bg={bg} hover={hover} onClick={onclick} >
      {text}
    </ButtonActionStyle>
  );
};

export default ButtonAction;
