import { SideBar, CartContainer, CartItem, Overlay, Quantity, Amount } from "./styles"
import cartImg from '../../assets/images/imgCart.png'
import Tag from "../Tag"
import { ButtonContainer } from "../Button/styles"

const Cart = () => (
    <CartContainer>
        <Overlay />
        <SideBar>
            <ul>
                <CartItem>
                    <img src={cartImg} />
                    <div>
                        <h3>Hogwarts Legacy</h3>
                        <Tag size="small">RGP</Tag>
                        <Tag size="small">PS5</Tag>
                        <span>R$ 190,90</span>
                    </div>
                    <button type="button" />
                </CartItem>
            </ul>
            <ul>
                <CartItem>
                    <img src={cartImg} />
                    <div>
                        <h3>Hogwarts Legacy</h3>
                        <Tag size="small">RGP</Tag>
                        <Tag size="small">PS5</Tag>
                        <span>R$ 190,90</span>
                    </div>
                    <button type="button" />
                </CartItem>
            </ul>
            <ul>
                <CartItem>
                    <img src={cartImg} />
                    <div>
                        <h3>Hogwarts Legacy</h3>
                        <Tag size="small">RGP</Tag>
                        <Tag size="small">PS5</Tag>
                        <span>R$ 190,90</span>
                    </div>
                    <button type="button" />
                </CartItem>
            </ul>
            <Quantity> 2 jogos(s) no carrinho</Quantity>
            <Amount>Total de R$ 381,80 <br /><span> em até 6x sem juros</span> </Amount>
            <ButtonContainer
                title="Botão de comprar"
                type="button">
                Continuar com a compra
            </ButtonContainer>

        </SideBar>
    </CartContainer>
)

export default Cart

