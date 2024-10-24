import { HeaderBar, LinkCart, Links, LinksItem } from './styles'
import logoEplay from '../../assets/images/logo.svg'
import carrinhoIcon from '../../assets/images/carrinho.svg'

const Header = () => (
    <HeaderBar>
        <div>
            <a href="#">
                <img src={logoEplay} alt="logo e-play" />
            </a>
            <nav>
                <Links>
                    <LinksItem>
                        <a href="#">Categorias</a>
                    </LinksItem>
                    <LinksItem>
                        <a href="#">Novidades</a>
                    </LinksItem>
                    <LinksItem>
                        <a href='#'>Promoções</a>
                    </LinksItem>
                </Links>
            </nav>
        </div>
        <LinkCart href="#">
            0 - produtos(s) <img src={carrinhoIcon} alt="iconeCarrinho" />
        </LinkCart>
    </HeaderBar>
)

export default Header