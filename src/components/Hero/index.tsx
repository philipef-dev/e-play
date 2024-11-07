import fundoHogwarts from '../../assets/images/fundo_hogwarts.png'
import Button from '../Button';
import Tag from '../Tag';
import { BannerHero, Info } from "./styles";

const Hero = () => (
    <BannerHero style={{ backgroundImage: `url(${fundoHogwarts})` }}>
        <div className='container'>
            <div>
                <Tag size='small'>RPG</Tag>
                <Tag size='small'>PS5</Tag>
            </div>

            <Info>
                <h2>Hogwarts Legacy</h2>
                <p><span>De R$ 290,00</span> Por R$ 190,00 </p>
                <Button
                    title='Botão de adicionar ao carrinho'
                    type='button'
                >Adicionar ao carrinho</Button>
            </Info>
        </div>
    </BannerHero>
)

export default Hero