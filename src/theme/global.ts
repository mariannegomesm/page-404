import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    iframe{
        border: 0px;
    }

    body, input, button, label{
        font-family: 'Outfit', sans-serif;
        
        color: ${theme.colors.gray[100]};
    }
`;
