import { Game } from '../../pages/Home';
import Button from '../Button';
import Tag from '../Tag';
import { BannerHero, Info } from "./styles";
import { formatPrice } from '../../helpers/formatPrice';

type Props = {
    game: Game
}

const Hero = ({ game }: Props) => {
    return (
        <BannerHero style={{ backgroundImage: `url(${game.media.cover})` }}>
            <div className='container'>
                <div>
                    <Tag size='small'>{game.details.category}</Tag>
                    <Tag size='small'>{game.details.system}</Tag>
                </div>

                <Info>
                    <h2>{game.name}</h2>
                    <p><span>De {formatPrice(game.prices.old)}</span> Por {formatPrice(game.prices.discount)}</p>
                    <Button
                        title='Botão de adicionar ao carrinho'
                        type='button'
                    >
                        Adicionar ao carrinho
                    </Button>
                </Info>
            </div>
        </BannerHero>
    )
}

export default Hero