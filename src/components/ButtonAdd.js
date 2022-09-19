import { ButtonAddStyle } from "./styles/ButtonAdd.style";

const ButtonAdd = ({ text, color, bg, hover, onclick }) => {
  return (
    <ButtonAddStyle color={color} bg={bg} hover={hover} onClick={onclick}>
      {text}
    </ButtonAddStyle>
  );
};

export default ButtonAdd;
