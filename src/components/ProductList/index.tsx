import { parseToBrl } from "../../helpers/formatPrice";
import { Game } from "../../pages/Home";
import Loader from "../Loader";
import Product from "../Product"
import * as S from "./styles"

export type Props = {
    title: string;
    background: 'gray' | 'black';
    games?: Game[];
    id?: string;
    isLoading: boolean;
}

const ProductsList = ({ title, background, games, id, isLoading }: Props) => {
    const getGameTags = (games: Game) => {
        const tags = []

        if (games.release_date) {
            tags.push(games.release_date)
        }

        if (games.prices.discount) {
            tags.push(`${games.prices.discount}%`)
        }

        if (games.prices.current) {
            tags.push(parseToBrl(games.prices.current))
        }

        return tags
    }

    if (isLoading) {
        return (
            <Loader />
        )
    }

    return (
        <S.Container id={id} background={background}>
            <div className="container">
                <S.Titulo>{title}</S.Titulo>
                <S.List>
                    {games && games.map((game) => (
                        <li key={game.id}>
                            <Product
                                id={game.id}
                                image={game.media.thumbnail}
                                title={game.name}
                                genero={game.details.category}
                                system={game.details.system}
                                infos={getGameTags(game)}
                                description={game.description}
                            />
                        </li>
                    ))}
                </S.List>
            </div>
        </S.Container>
    )
}

export default ProductsList