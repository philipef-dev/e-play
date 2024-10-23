import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #333;
        --black: #111;
        --gray: #EEE;
        --green: #10AC84;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-color: var(--black);
        color: var(--white)
    }
`
