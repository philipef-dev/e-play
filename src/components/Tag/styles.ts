import styled from "styled-components";
import { Props } from ".";

export const TagContainer = styled.div<Props>`
    background-color: var(--green);
    font-weight: bold;
    color: var(--white);
    padding: ${({ size }) => (size === 'small' ? '4px 6px' : '8px 16px')};
    border-radius: 8px;
    font-size: 10px;
    display: inline-block;
`