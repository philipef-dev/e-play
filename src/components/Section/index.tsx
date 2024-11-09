import { Container, Titulo } from "./styles";

export type Props = {
    title: string;
    background: 'gray' | 'black';
    children: JSX.Element
}

const Section = ({ title, children, background }: Props) => (
    <Container background={background}>
        <div className="container">
            <Titulo>{title}</Titulo>
            {children}
        </div>
    </Container>
)

export default Section