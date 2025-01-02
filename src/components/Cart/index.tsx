import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import Tag from "../Tag"
import { remove, closeCart } from "../../store/reducers/cart"
import { getTotalPrice, parseToBrl } from "../../helpers/formatPrice"

import deleteIcon from '../../assets/images/deleteIcon.png';
import closeIcon from '../../assets/images/closeIcon.svg';

import * as S from "./styles"

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const closeSideBar = () => {
        dispatch(closeCart())
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    const goToCheckout = () => {
        closeSideBar()
        navigate('/checkout')
    }

    return (
        <S.CartContainer className={isOpen ? 'is-open' : ''}>
            <S.Overlay onClick={closeSideBar} />
            <S.SideBar>
                <ul>
                    <S.BtnCloseCart
                        className="closeCart"
                        type="button"
                        title="Fechar carrinho"
                        onClick={closeSideBar}
                    >
                        <img src={closeIcon} />
                    </S.BtnCloseCart>
                    {items.map((item) => {
                        return (
                            <S.CartItem key={item.id}>
                                <img src={item.media.thumbnail} />
                                <div>
                                    <h3>{item.name}</h3>
                                    <Tag size="small">{item.details.category}</Tag>
                                    <Tag size="small">{item.details.system}</Tag>
                                    <span>{parseToBrl(item.prices.current)}</span>
                                </div>
                                <button
                                    className="deleteItem"
                                    type="button"
                                    title="Remover item"
                                    onClick={() => removeItem(item.id)}
                                >
                                    <img src={deleteIcon} />
                                </button>
                            </S.CartItem>
                        )
                    })}
                </ul>
                <S.Quantity> {items.length} jogos(s) no carrinho</S.Quantity>
                <S.Amount>Total de {parseToBrl(getTotalPrice(items))} <br />
                    <span> em até 6x sem juros</span>
                </S.Amount>
                <button
                    className="btnBuy"
                    title="Botão de comprar"
                    onClick={goToCheckout}
                    type="button"
                >
                    Continuar com a compra
                </button>
            </S.SideBar>
        </S.CartContainer>
    )
}

export default Cart