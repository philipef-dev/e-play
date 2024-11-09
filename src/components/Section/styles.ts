import styled from "styled-components";

import { Props } from '.'

export const Titulo = styled.h2`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 40px;
`

export const Container = styled.section<Omit<Props, 'title' | 'description'>>`
    padding: 32px 0;
    background: ${({ background }) => (
        background === 'black' ? 'var(--black)' : 'var(--gray)'
    )};

    p {
        max-width: 640px;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
    }
`