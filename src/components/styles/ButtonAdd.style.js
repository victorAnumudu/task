import Styled from "styled-components";

export const ButtonAddStyle = Styled.button`
background-color: ${({ bg }) => bg};
padding: 10px 20px;
border-radius: 5px;
color: ${({ color }) => color};
font-size: 1.2rem;
margin: 10px 0 10px auto;
display: block;
border: none;
outline: none;
cursor: pointer;
&:hover{
    background-color: ${({ hover }) => hover};
}

@media (max-width:568px){
    font-size: 1rem;
}
`;
