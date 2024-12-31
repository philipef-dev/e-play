import { SideBar, CartContainer, CartItem, Overlay, Quantity, Amount, BtnCloseCart } from "./styles"
import Tag from "../Tag"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { remove, closeCart } from "../../store/reducers/cart"
import { formatPrice, getTotalPrice } from "../../helpers/formatPrice"
import { useNavigate } from "react-router-dom"

import deleteIcon from '../../assets/images/deleteIcon.png';
import closeIcon from '../../assets/images/closeIcon.svg';


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
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeSideBar} />
            <SideBar>
                <ul>
                    <BtnCloseCart
                        className="closeCart"
                        type="button"
                        title="Fechar carrinho"
                        onClick={closeSideBar}
                    >
                        <img src={closeIcon} />
                    </BtnCloseCart >
                    {items.map((item) => {
                        return (
                            <CartItem key={item.id}>
                                <img src={item.media.thumbnail} />
                                <div>
                                    <h3>{item.name}</h3>
                                    <Tag size="small">{item.details.category}</Tag>
                                    <Tag size="small">{item.details.system}</Tag>
                                    <span>{formatPrice(item.prices.current)}</span>
                                </div>
                                <button
                                    className="deleteItem"
                                    type="button"
                                    title="Remover item"
                                    onClick={() => removeItem(item.id)}
                                >
                                    <img src={deleteIcon} />
                                </button>
                            </CartItem>
                        )
                    })}
                </ul>
                <Quantity> {items.length} jogos(s) no carrinho</Quantity>
                <Amount>Total de {formatPrice(getTotalPrice(items))} <br />
                    <span> em até 6x sem juros</span>
                </Amount>
                <button
                    className="btnBuy"
                    title="Botão de comprar"
                    onClick={goToCheckout}
                    type="button"
                >
                    Continuar com a compra
                </button>
            </SideBar>
        </CartContainer >
    )
}

export default Cart