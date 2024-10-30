import styled from "styled-components";

export const FooterSection = styled.section`
    font-size: 14px;
    font-weight: 400;
    color: #A3A3A3;
    background: var(--gray);    
    margin-top: 64px;

    .container {
        padding-bottom: 32px;
    }
    

    a { 
        text-decoration: none;
        color: #A3A3A3;
    }

    p {
        color: var(--white)
    }
`

export const FooterTitulo = styled.h3`
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
    color: var(--white);
`

export const FooterItens = styled.ul`
    display: flex;
    gap: 8px;
    margin-bottom: 64px;    
`


