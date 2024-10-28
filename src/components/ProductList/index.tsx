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
                <Product
                    image="https://via.placeholder.com/222x250"
                    title="Resident Evil 4"
                    genero="Ação"
                    system="Windows"
                    infos={['R$ 150','10%' ]}
                    description="lorem"

                />
                <Product
                    image="https://via.placeholder.com/222x250"
                    title="Resident Evil 4"
                    genero="Ação"
                    system="Windows"
                    infos={['R$ 150','10%' ]}
                    description="teste"
                />
                <Product
                    image="https://via.placeholder.com/222x250"
                    title="Resident Evil 4"
                    genero="Ação"
                    system="Windows"
                    infos={['R$ 150','10%' ]}
                    description="teste"
                />
                <Product
                    image="https://via.placeholder.com/222x250"
                    title="Resident Evil 4"
                    genero="Ação"
                    system="Windows"
                    infos={['R$ 150','10%' ]}
                    description="teste"
                />
            </List>
        </div>
    </Container>
)

export default ProductsList