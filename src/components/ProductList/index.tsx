import Product from "../Product"
import { Container, List, Titulo } from "./styles"

export type Props = {
    title: string;
    background: 'gray' | 'black';
}

const ProductsList = ({ title, background }: Props) => (
    <Container background={background}>
        <div className="container">
            <Titulo>{title}</Titulo>
            <List>
                <Product />
                <Product />
                <Product />
                <Product />
            </List>
        </div>
    </Container>
)

export default ProductsList