import { CarrinhoProdutosContainer, HeaderBar, NavContainer } from './styles'
import logoEplay from '../../assets/logo.svg'
import carrinhoIcon from '../../assets/carrinho.svg'

const Header = () => (
    <HeaderBar>
        <div>
            <a href="#">
                <img src={logoEplay} alt="logo da empresa" />
            </a>
            <NavContainer>
                <ul>
                    <li>Categorias</li>
                    <li>Novidades</li>
                    <li>Promoções</li>
                </ul>
            </NavContainer>
        </div>
        <CarrinhoProdutosContainer>
            0 - produtos(s)
            <img src={carrinhoIcon} alt="iconeCarrinho" />
        </CarrinhoProdutosContainer>
    </HeaderBar>
)

export default Header