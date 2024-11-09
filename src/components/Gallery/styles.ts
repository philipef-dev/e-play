import styled from "styled-components";

export const Items = styled.ul`
    display: flex;
    gap: 16px;
`

export const Action = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 98%;
        background: rgba(0, 0, 0, 0.73);
        border-radius: 8px;

        display: flex;
        align-items: center;
        justify-content: center;   
        
        opacity: 0;
        transition: opacity .5s ease;
`

export const Item = styled.li`
    position: relative;

    > img {
        width: 150px;
        height: 150px;
        border-radius: 8px;
        border: 2px solid var(--white);
        object-fit: cover;        
    }    

    &:hover {
        ${Action} {
            opacity: 1;
            transition: opacity .5s ease;
        }
    }
`