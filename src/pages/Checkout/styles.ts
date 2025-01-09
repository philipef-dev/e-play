import styled from "styled-components";
import { BreakPoints } from "../../styles/global";

type btnPagamentoProps = {
    type: string
    isactive: boolean
}

type inputGroupProps = {
    maxWidth?: string
}

export const Row = styled.div`
    display: flex;
    column-gap: 24px;

    @media (max-width: ${BreakPoints.tablet}) {
        display: block;        
    }
`

export const InputGroup = styled.div<inputGroupProps>`   
    flex: auto;

    max-width: ${props => props.maxWidth || 'auto'};
    
    label {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 8px;
        display: block;
    }

    input,
    select {
        padding: 0 8px;
        background: var(--white);
        height: 32px;
        border: 1px solid var(--white);
        width: 100%;
        margin-bottom: 10px;
    }   
    
    .hasError {
        border: 2px solid red;
    }
`

export const BtnPagamento = styled.button<btnPagamentoProps>`
    background-color: ${(props) => props.isactive ? 'var(--green)' : 'var(--black)'};
    color: var(--white);
    font-size: 14px;
    font-weight: 700;
    border-radius: 8px;
    padding: 8px;
    border: none;
    display: flex;
    align-items: center;

    img {
        margin-right: 8px;
    }

    @media (max-width: ${BreakPoints.tablet}) {
        width: 100%;
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
}
`