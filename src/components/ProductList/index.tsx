import { formatPrice } from "../../helpers/formatPrice";
import { Game } from "../../pages/Home";
import Product from "../Product"
import { Container, List, Titulo } from "./styles"

export type Props = {
    title: string;
    background: 'gray' | 'black';
    games: Game[]
}

const ProductsList = ({ title, background, games }: Props) => {
    const getGameTags = (games: Game) => {
        const tags = []

        if (games.release_date) {
            tags.push(games.release_date)
        }

        if (games.prices.discount) {
            tags.push(`${games.prices.discount}%`)
        }

        if (games.prices.current) {
            tags.push(formatPrice(games.prices.current))
        }

        return tags
    }
    return (
        <Container background={background}>
            <div className="container">
                <Titulo>{title}</Titulo>
                <List>
                    {games.map((game) => (
                        <Product
                            key={game.id}
                            image={game.media.thumbnail}
                            title={game.name}
                            genero={game.details.category}
                            system={game.details.system}
                            infos={getGameTags(game)}
                            description={game.description} />
                    ))}
                </List>
            </div>
        </Container>


    )
}

export default ProductsList