import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #EEE;
        --black: #111;
        --gray: #333;
        --green: #10AC84;
    }

    * {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        list-style: none;
        box-sizing: border-box;

    }

    body {
        background-color: var(--black);
        color: var(--white)
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
        padding-top: 40px;
    }
`
