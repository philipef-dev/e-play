import styled from "styled-components";
import { TagContainer } from "../Tag/styles";

export const ImageBanner = styled.div`
    max-width: 100%;
    height: 560px;
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    &::after {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.7);
        content: ''        
    }
    
    .container {
        position: relative;
        padding-top: 340px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        z-index: 1;
    }

    ${TagContainer} {
        position: absolute;
        top: 32px;
    }    
`

export const Titulo = styled.h2`
    font-size: 36px;
    max-width: 450px;
`

export const Precos = styled.p`
    font-size: 24px;
    margin-top: 24px;
    font-weight: bold;
    line-height: 28px;

    span {
        text-decoration: line-through;
    }
`