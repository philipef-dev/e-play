import styled from "styled-components";
import { TagContainer } from "../Tag/styles";
import closeIcon from '../../assets/images/closeIcon.svg'
import { ButtonContainer } from "../Button/styles";

export const CartContainer = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    justify-content: end;
    display: flex;
    z-index: 1;

    ${ButtonContainer} {
        width: 100%;
        margin-top: 24px
    }
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.73);   
`

export const SideBar = styled.aside`
    background-color: var(--gray);
    z-index: 1;
    padding: 40px 16px 0 16px;
    max-width: 360px;
    width: 100%;
`

export const CartItem = styled.li`
    display: flex;
    font-weight: 700;
    border-bottom: 1px solid #686868;
    margin-bottom: 32px;
    position: relative;

    img {
        width: 80px;
        height: 80px;
        margin-right: 24px;
        object-fit: cover;
    }

    h3 {
        font-size: 16px;
        margin-bottom: 8px;
    }
    
    span {
        display: block;
        color: var(--white);
        font-size: 14px;
        margin-bottom: 10px;
    }

    ${TagContainer} {
        margin-right: 8px;
        margin-bottom: 16px;
    }

    button {
        background-image: url(${closeIcon});
        width: 16px;
        height: 16px;
        background-color: transparent;
        border: none;
        right: 0;    
        top: 0;    
        position: absolute;
        cursor: pointer;
    }
`

export const Quantity = styled.p`
    font-size: 16px;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 16px;
`

export const Amount = styled.p`
    font-size: 14px;
    font-weight: 700;
    color: var(--white);

    span {
        color: #999;
    }
`



