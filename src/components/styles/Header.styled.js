import Styled from "styled-components";

export const HeaderStyled = Styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
   

    @media (max-width: 568px) {
        img{
            width: 40px
        }
        h1{
            font-size: 1.5rem;
        }
    }
`;

export const HeaderImg = Styled.img`
    width: 50px
`;

export const HeaderTitle = Styled.h1`
    font-size: 2rem;
    color: var(--purple);
`;
