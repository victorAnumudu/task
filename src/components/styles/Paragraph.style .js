import Styled from "styled-components";

export const ParagraphStyle = Styled.p`
    font-size: 1rem;
    font-family: ${({ font }) => (font ? font : "var(--roboto)")};
    padding: 10px 0;
    
    @media(max-width: 568px){
        font-size: 1.2rem;
    }

    i{
        cursor: pointer;
    }
`;
