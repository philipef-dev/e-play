import { HeaderBar, CartButton, Links, LinksItem } from './styles'
import logoEplay from '../../assets/images/logo.svg'
import carrinhoIcon from '../../assets/images/carrinho.svg'
import { Link } from 'react-router-dom'
import { open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

const Header = () => {
    const dispatch = useDispatch()

    const openCart = () => {
        dispatch(open())
    }
    
    return (
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
            <CartButton onClick={openCart} href="#">
                0 - produtos(s) <img src={carrinhoIcon} alt="iconeCarrinho" />
            </CartButton>
        </HeaderBar>
    )
}

export default Header