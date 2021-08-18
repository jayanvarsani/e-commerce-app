import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap");
    body {
        font-family: "Noto Sans JP", sans-serif;
        padding: 20px 60px;
        min-width: 550px;

        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    }

    a {
        text-decoration: none;
        color: black;
    }

    * {
        box-sizing: border-box;
    }
`;
