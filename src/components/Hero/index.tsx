import { Game } from '../../pages/Home';
import Button from '../Button';
import Tag from '../Tag';
import { BannerHero, Info } from "./styles";
import { useDispatch } from 'react-redux';
import { add, open } from '../../store/reducers/cart';
import { formatPrice } from '../../helpers/formatPrice';

type Props = {
    game: Game
}

const Hero = ({ game }: Props) => {

    const dispatch = useDispatch()

    const addCart = () => {
        dispatch(add(game))
        dispatch(open())
    }

    const hasPrice = game.prices.old! > 0

    return (
        <BannerHero style={{ backgroundImage: `url(${game.media.cover})` }}>
            <div className='container'>
                <div>
                    <Tag size='small'>{game.details.category}</Tag>
                    <Tag size='small'>{game.details.system}</Tag>
                </div>

                <Info>
                    <h2>{game.name}</h2>
                    {hasPrice ? (
                        <>
                            <p>
                                <span>De {formatPrice(game.prices.old)}</span> Por {formatPrice(game.prices.discount)}
                            </p>

                            <Button
                                title='Botão de adicionar ao carrinho'
                                type='button'
                                onClick={addCart}
                            >
                                Adicionar ao carrinho
                            </Button>
                        </>
                    ) : (' Em lançamento...')
                    }
                </Info>
            </div>
        </BannerHero>
    )
}

export default Hero