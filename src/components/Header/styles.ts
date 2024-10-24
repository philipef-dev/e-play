import styled from "styled-components";

export const HeaderBar = styled.div`
    background-color: var(--gray);
    padding: 24px;
    border-radius: 16px;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        align-items: center;
    }

`

export const NavContainer = styled.nav`
    ul {
        list-style: none;
        display: flex;
        gap: 20px;
        margin-left: 40px;
        
    }

    li {
        font-weight: 700;
    }
`

export const CarrinhoProdutosContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    font-weight: 700;

`