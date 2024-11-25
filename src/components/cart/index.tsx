import { SideBar, CartContainer, CartItem, Overlay, Quantity, Amount } from "./styles"
import Tag from "../Tag"
import { ButtonContainer } from "../Button/styles"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { close, remove } from "../../store/reducers/cart"
import { formatPrice } from "../../helpers/formatPrice"

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    const getTotalPrice = () => {
        return items.reduce((acumulador, valorAtual) => {
            return (acumulador += valorAtual.prices.current!)
        }, 0)
    }

    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart} />
            <SideBar>
                <ul>
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
                                    type="button"
                                    onClick={() => removeItem(item.id)}
                                />
                            </CartItem>
                        )
                    })}
                </ul>
                <Quantity> {items.length} jogos(s) no carrinho</Quantity>
                <Amount>Total de {formatPrice(getTotalPrice())} <br />
                    <span> em até 6x sem juros</span>
                </Amount>
                <ButtonContainer
                    title="Botão de comprar"
                    type="button">
                    Continuar com a compra
                </ButtonContainer>
            </SideBar>
        </CartContainer>
    )
}

export default Cart