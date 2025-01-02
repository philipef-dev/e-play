import * as S from "./styles"

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
            <S.ButtonContainer type="button" title={title} onClick={onClick} >
                {children}
            </S.ButtonContainer>
        )
    }

    if (type === 'submit') {
        return (
            <S.ButtonContainer type="submit" title={title}>
                {children}
            </S.ButtonContainer>
        )
    }

    return (
        <S.ButtonLink to={to as string} title={title}>
            {children}
        </S.ButtonLink>
    )
}

export default Button