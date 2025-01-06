import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { openCart } from '../../store/reducers/cart'
import logoEplay from '../../assets/images/logo.svg'
import carrinhoIcon from '../../assets/images/carrinho.svg'

import * as S from './styles'
import { useState } from 'react'

const Header = () => {
    const dispatch = useDispatch()
    const { items } = useSelector((state: RootReducer) => state.cart)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openSider = () => {
        dispatch(openCart())
    }

    return (
        <S.HeaderBar>
            <S.HeaderRow>
                <div>
                    <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span />
                        <span />
                        <span />
                    </S.Hamburguer>
                    <Link to="/" title="Clique aqui para voltar a página inicial">
                        <img src={logoEplay} alt="logo e-play" />
                    </Link>
                    <S.CartButton onClick={openSider}>
                        {items.length} <span> - produtos(s) </span> <img src={carrinhoIcon} alt="iconeCarrinho" />
                    </S.CartButton>
                </div>
            </S.HeaderRow>
            {/* Assim que esta funcionando - ok ok ok ok  */}
            <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
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
            </S.NavMobile>
        </S.HeaderBar>
    )
}

export default Header