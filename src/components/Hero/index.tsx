import { Game } from '../../pages/Home';
import Button from '../Button';
import Tag from '../Tag';
import { BannerHero, Info } from "./styles";
import { useDispatch } from 'react-redux';
import { add, openCart } from '../../store/reducers/cart';
import { formatPrice } from '../../helpers/formatPrice';

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
                                <span className='discount'>De {formatPrice(game.prices.old)}</span> Por {formatPrice(game.prices.discount)}
                            </p>
                        </>
                    ) : (
                        <p>
                            {!isPriceCurrentNull ? (
                                <>
                                    <p>
                                        <span> {formatPrice(game.prices.current)} </span>
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