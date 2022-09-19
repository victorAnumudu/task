import Styled from "styled-components";

export const TaskContainerWrapper = Styled.div`
    
    padding: 0 10px;
    margin: 5px 0;
    position: relative;
    ${({ completed }) => {
      if (completed === true) {
        return {
          boxShadow: "0px 0px 4px var(--green)",
          border: "2px solid var(--dark-green)",
        };
      } else {
        return {
          "box-shadow": "0px 0px 4px #000",
        };
      }
    }}

`;
