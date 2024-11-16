import Tag from "../Tag"
import Button from "../Button"
import { ImageBanner, Precos, Titulo } from "./styles"
import { useEffect, useState } from "react"
import { Game } from "../../pages/Home"
import { formatPrice } from '../../helpers/formatPrice'

const Banner = () => {
    const [game, setGame] = useState<Game>()

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
            .then((res) => res.json())
            .then((res) => setGame(res))
    }, [])

    return (
        <ImageBanner style={{ backgroundImage: `url(${game?.media.cover})` }}>
            <div className="container">
                <Tag size="big">Destaque do dia</Tag>
                <div>
                    <Titulo>{game?.name} </Titulo>
                    <Precos>
                        De <span> {formatPrice(game?.prices.old)}</span>  <br />
                        por apenas {formatPrice(game?.prices.current)}
                    </Precos>
                </div>
                <div>
                    <Button
                        type="link"
                        to="/produto"
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
