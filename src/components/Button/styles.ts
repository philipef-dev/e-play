import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonContainer = styled.button`
    padding: 8px 16px;
    font-weight: bold;
    border: 2px solid var(--white);
    background: transparent;
    border-radius: 8px;
    color: var(--white);
    font-size: 16px;
`

export const ButtonLink = styled(Link)`
    padding: 8px 16px;
    font-weight: bold;
    border: 2px solid var(--white);
    background: transparent;
    border-radius: 8px;
    color: var(--white);
    font-size: 16px;
    text-decoration: none;
`