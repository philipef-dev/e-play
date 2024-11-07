import styled from "styled-components";
import { TagContainer } from "../Tag/styles";

export const BannerHero = styled.div`
    position: relative;
    display: block;
    height: 480px;
    width: 100%;
    padding-top: 20px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;

    ${TagContainer} {
        margin-right: 8px;
    }

    &::after {
        position: absolute;
        background-color: #000;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        content: '';
        opacity: 0.56;
    }

    .container {
        z-index: 1;
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`

export const Info = styled.div`
    background-color: var(--black);
    color: var(--white);
    max-width: 290px;
    font-weight: 700;
    padding: 16px;

    h2 {
        font-size: 32px;
        margin-bottom: 16px;
    }

    span {
        text-decoration: line-through;
        display: block;
    }

    p {
        font-size: 18px;
        margin: 16px 0;
    }
`