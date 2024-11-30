import { ButtonContainer, ButtonLink } from "./styles"

export type Props = {
    type: 'button' | 'link' | 'submit';
    title: string;
    to?: string;
    onClick?: () => void;
    children: string;
}

const Button = ({ children, title, type, to, onClick }: Props) => {
    if (type === 'button' || type === 'submit') {
        return (
            <ButtonContainer type="button" title={title} onClick={onClick} >
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