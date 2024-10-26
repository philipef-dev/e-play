import styled from "styled-components";
import { TagContainer } from "../Tag/styles";

export const Card = styled.div`
    background-color: var(--black);
    border-radius: 8px;
    padding: 8px;

    ${TagContainer} {
        margin-right: 8px;
    }
`

export const Titulo = styled.h3`
    font-size: 16px;
    font-weight: bold;
    color: var(--white);
    margin-bottom: 8px;
    display: block;
`

export const Descricao = styled.p`
    font-size: 14px;
    line-height: 22px;
    display: block;
    margin-top: 16px;
`