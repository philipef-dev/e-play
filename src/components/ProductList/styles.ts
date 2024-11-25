import styled from "styled-components";
import { Card } from "../Product/styles";
import { Props } from '.'
import { BreakPoints } from "../../styles/global";

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
    padding: 32px 0;
    background: ${({ background }) => (
        background === 'black' ? 'var(--black)' : 'var(--gray)'
    )};

    ${Card} {
      background-color:  ${({ background }) => (
        background === 'black' ? 'var(--gray)' : 'var(--black)'
    )};
    }
`

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 24px;
    margin-top: 40px;

    @media (max-width: ${BreakPoints.desktop}) {
        grid-template-columns: 1fr 1fr;        
    }

    @media (max-width: ${BreakPoints.desktop}) {
        grid-template-columns: 1fr;     
    }
`

export const Titulo = styled.h2`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 40px;
`