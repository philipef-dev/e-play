import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { openCart } from '../../store/reducers/cart'
import logoEplay from '../../assets/images/logo.svg'
import carrinhoIcon from '../../assets/images/carrinho.svg'

import * as S from './styles'

const Header = () => {
    const { items } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    const openSider = () => {
        dispatch(openCart())
    }

    return (
        <S.HeaderBar>
            <div>
                <Link to="/" title="Clique aqui para voltar a página inicial">
                    <img src={logoEplay} alt="logo e-play" />
                </Link>
                <nav>
                    <S.Links>
                        <S.LinksItem>
                            <Link
                                to='/categories'
                                title='Clique aqui para ir para a página de categorias'
                            >
                                Categorias
                            </Link>
                        </S.LinksItem>
                        <S.LinksItem>
                            <HashLink
                                to="/#comming-soon"
                                title='Clique aqui para acessar os jogos que estão por vir'
                            >
                                Em breve
                            </HashLink>
                        </S.LinksItem>
                        <S.LinksItem>
                            <HashLink
                                to="/#on-sale"
                                title='Clique aqui para acessar os jogos em promoção'
                            >
                                Promoções
                            </HashLink>
                        </S.LinksItem>
                    </S.Links>
                </nav>
            </div>
            <S.CartButton onClick={openSider}>
                {items.length} - produtos(s) <img src={carrinhoIcon} alt="iconeCarrinho" />
            </S.CartButton>
        </S.HeaderBar>
    )
}

export default Header