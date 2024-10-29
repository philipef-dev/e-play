import { HeaderBar, LinkCart, Links, LinksItem } from './styles'
import logoEplay from '../../assets/images/logo.svg'
import carrinhoIcon from '../../assets/images/carrinho.svg'
import { Link } from 'react-router-dom'

const Header = () => (
    <HeaderBar>
        <div>
            <Link to="/">
                <img src={logoEplay} alt="logo e-play" />
            </Link>
            <nav>
                <Links>
                    <LinksItem>
                        <Link to='/categories'>Categorias</Link>
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