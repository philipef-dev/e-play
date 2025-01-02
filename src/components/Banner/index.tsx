import Tag from "../Tag"
import Button from "../Button"
import { ImageBanner, Precos, Titulo } from "./styles"
import { parseToBrl } from '../../helpers/formatPrice'
import { useGetGameDestaqueQuery } from "../../services/api"
import Loader from "../Loader"

const Banner = () => {
    const { data: game } = useGetGameDestaqueQuery('destaque')

    if (!game) {
        return <Loader />
    }

    return (
        <ImageBanner style={{ backgroundImage: `url(${game.media.cover})` }}>
            <div className="container">
                <Tag size="big">Destaque do dia</Tag>
                <div>
                    <Titulo>{game.name} </Titulo>
                    <Precos>
                        De <span> {parseToBrl(game.prices.old)}</span>  <br />
                        por apenas {parseToBrl(game.prices.current)}
                    </Precos>
                </div>
                <div>
                    <Button
                        type="link"
                        to={`product/${game.id}`}
                        title="Clique aqui para aproveitar essa orfeta"
                    >
                        Aproveitar
                    </Button>
                </div>
            </div>
        </ImageBanner>
    )
}

export default Banner
