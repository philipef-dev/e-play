import { ButtonContainer, ButtonLink } from "./styles"

export type Props = {
    type: 'button' | 'link' | 'submit';
    title: string;
    to?: string;
    onClick?: () => void;
    children: string;
    disabled?: boolean
}

const Button = ({ children, title, type, to, onClick }: Props) => {
    if (type === 'button') {
        return (
            <ButtonContainer type="button" title={title} onClick={onClick} >
                {children}
            </ButtonContainer>
        )
    }

    if (type === 'submit') {
        return (
            <ButtonContainer type="submit" title={title}>
                {children}
            </ButtonContainer>
        )
    }

    return (
        <ButtonLink to={to as string} title={title}>
            {children}
        </ButtonLink>
    )
}

export default Button