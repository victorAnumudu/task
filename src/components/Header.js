

import {
  HeaderStyled,
  HeaderImg,
  HeaderTitle,
} from "./styles/Header.styled";

// image import
import Avatar from "../avatar.jpg";

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderTitle>TASK TODO</HeaderTitle>
      <HeaderImg src={Avatar} alt="logo" />
    </HeaderStyled>
  );
}

export default Header