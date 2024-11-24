import styled from "styled-components";

export const HeaderBar = styled.div`
    background-color: var(--gray);
    padding: 24px;
    border-radius: 16px;
    margin-bottom: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        text-decoration: none;
        color: var(--white);
        display: flex;        
        align-items: center;
        font-weight: bold;
    }

    div {
         display: flex;
         align-items: center;
    }
`

export const Links = styled.ul`   
    display: flex;
    gap: 16px;
    margin-left: 40px;  
    align-items: center;
`

export const LinksItem = styled.li`
    font-weight: 700;
`

export const CartButton = styled.a`
    display: flex;

    img {
        margin-left: 16px;
    }
`

    
