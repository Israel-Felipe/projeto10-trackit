import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyled = createGlobalStyle`
    ${reset}
    
    body{box-sizing: border-box;
        font-family: 'Lexend Deca', sans-serif;
        cursor: default;
        a {
            text-decoration: none;
        }
    }
`;

export default GlobalStyled;