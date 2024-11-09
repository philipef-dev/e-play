import styled from "styled-components";

export const Items = styled.ul`
    display: flex;
    gap: 16px;
`

export const Item = styled.li`
    img {
        width: 150px;
        height: 150px;
        border-radius: 8px;
        border: 2px solid var(--white);
        object-fit: cover;        
    }
`