import styled from "styled-components";
import { BreakPoints } from "../../styles/global";

export const Links = styled.ul`   
    display: flex;
    gap: 16px;
    margin-left: 40px;  
    /* teststando asdfskjdfsdlkf */
    align-items: center;

    @media (max-width: ${BreakPoints.tablet}) {
        margin-left: 0;
        display: block;
    }
`

export const HeaderBar = styled.div`
    background-color: var(--gray);
    padding: 24px;
    border-radius: 16px;
    margin-bottom: 80px;
    
    a {
        text-decoration: none;
        color: var(--white);
        display: flex;        
        align-items: center;
        font-weight: bold;
    }   
`

export const HeaderRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
         display: flex;
         align-items: center;      
         
         @media (max-width: ${BreakPoints.tablet}) {
            flex: 1; 
            justify-content: space-between;

            ${Links} {
                display: none;
            }
        }
    }
    
`

export const NavMobile = styled.nav`
    display: none;

    &.is-open {
        display: block;
    }

`

export const LinksItem = styled.li`
    margin-right: 16px;

    @media (max-width: ${BreakPoints.tablet}) {
        margin-right: 0;

        a {
            display: block;
            padding: 8px 0;
            text-align: center;
        }
    }
`

export const CartButton = styled.a`
    display: flex;
    cursor: pointer;

    img {
        margin-left: 16px;
    }

    @media (max-width: ${BreakPoints.tablet}) {
        span {
            display: none;
        }
    }
`
export const Hamburguer = styled.div`
    width: 32px;

    span {
        height: 2px;
        display: block;
        width: 100%;
        background-color: var(--white);
        margin: 4px 0;
    }

    @media (min-width: ${BreakPoints.tablet}) {
        display: none;
    }
`

