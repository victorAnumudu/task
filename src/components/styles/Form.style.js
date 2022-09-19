import Styled from "styled-components";

export const FormWrapper = Styled.form`
    box-shadow: 0px 0px 3px #000;
    background-color: #fff;
    transition: all 1s;
    overflow: hidden;
    ${({ showform }) => {
      if (showform === true) {
        return {
          padding: "20px",
          height: "350px",
        };
      } else {
        return {
          padding: "0px",
          height: "0px",
        };
      }
    }}
`;

export const FormFieldset = Styled.fieldset`
border: none;
padding: 20px 0;

legend{
    text-align: center;
    font-family: var(--ubuntu);
    font-size: 1.3rem;
}
`;

export const FormLabel = Styled.label`
display: block;
color: var(--dark-green);
`;

export const InputStyle = Styled.input`
  ${({ type }) => {
    if (type === "submit") {
      return {
        display: "block",
        fontSize: "1.2rem",
        marginBottom: "5px",
        padding: "10px 20px",
        color: "#fff",
        backgroundColor: "var(--green)",
        outline: "none",
        border: "none",
        "&:hover": {
          backgroundColor: "var(--dark-green)",
        },
      };
    } else {
      return {
        width: "100%",
        display: "block",
        padding: '5px 0px',
        fontSize: "1.2rem",
        marginBottom: "5px",
        outline: "none"
      };
    }
  }}
`;
