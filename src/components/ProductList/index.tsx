import Game from "../../model/Game";
import Product from "../Product"
import { Container, List, Titulo } from "./styles"

export type Props = {
    title: string;
    background: 'gray' | 'black';
    games: Game[]
}

const ProductsList = ({ title, background, games }: Props) => (
    <Container background={background}>
        <div className="container">
            <Titulo>{title}</Titulo>
            <List>
                {games.map((game) => (
                    <Product
                        key={game.id}
                        image={game.image}
                        title={game.title}
                        genero={game.genero}
                        system={game.system}
                        infos={game.infos}
                        description={game.description}                    />
                ))}
            </List>
        </div>
    </Container>
)

export default ProductsList