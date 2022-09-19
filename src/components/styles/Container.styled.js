import Styled from "styled-components";

export const Container = Styled.div`
    display: ${({ display }) => display};
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;
