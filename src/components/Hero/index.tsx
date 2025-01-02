import { useDispatch } from 'react-redux';
import { Game } from '../../pages/Home';
import Button from '../Button';
import Tag from '../Tag';
import { add, openCart } from '../../store/reducers/cart';
import { parseToBrl } from '../../helpers/formatPrice';

import { BannerHero, Info } from "./styles";

type Props = {
    game: Game
}

const Hero = ({ game }: Props) => {

    const dispatch = useDispatch()

    const addCart = () => {
        dispatch(add(game))
        dispatch(openCart())
    }

    const isPriceCurrentNull = game.prices.current === null
    const isDiscountNull = game.prices.discount === null

    return (
        <BannerHero style={{ backgroundImage: `url(${game.media.cover})` }}>
            <div className='container'>
                <div>
                    <Tag size='small'>{game.details.category}</Tag>
                    <Tag size='small'>{game.details.system}</Tag>
                </div>

                <Info>
                    <h2>{game.name}</h2>
                    {!isDiscountNull ? (
                        <>
                            <p>
                                <span className='discount'>De {parseToBrl(game.prices.old)}</span> Por {parseToBrl(game.prices.discount)}
                            </p>
                        </>
                    ) : (
                        <p>
                            {!isPriceCurrentNull ? (
                                <>
                                    <p>
                                        <span> {parseToBrl(game.prices.current)} </span>
                                    </p>

                                </>
                            ) : (
                                <p> Em lançamento </p>
                            )}
                        </p>
                    )}
                    {!isPriceCurrentNull && (
                        <Button
                            title="Botão de adicionar ao carrinho"
                            type="button"
                            onClick={addCart}
                        >
                            Adicionar ao carrinho
                        </Button>
                    )}
                </Info>
            </div>
        </BannerHero>
    )
}

export default Hero