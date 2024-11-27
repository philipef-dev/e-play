import styled from "styled-components";

export const Row = styled.div`
    display: flex;
    column-gap: 24px;
`

export const InputGroup = styled.div`   
    flex: auto;
    
    label {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 8px;
        display: block;
    }

    input {
        padding: 0 8px;
        background: var(--white);
        height: 32px;
        border: 1px solid var(--white);
        width: 100%;
    }    
`


