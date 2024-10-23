import { createGlobalStyle } from "styled-components";

const colors = {
    white: '#333',
    black: '#111',
    gray: '#EEE',
    green: '#10AC84'
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-color: ${colors.black};
        color: ${colors.white}
    }
`
