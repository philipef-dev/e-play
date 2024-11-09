import Section from "../Section"
import zeldaImg from '../../assets/images/zelda.png';
import { Item, Items } from "./styles";

const Gallery = () => (
    <Section title="Galeria" background="black">
        <>
            <Items>
                <Item>
                    <img src={zeldaImg} alt="Imagem Galeria" />
                </Item>

                <Item>
                    <img src={zeldaImg} alt="Imagem Galeria" />
                </Item>

                <Item>
                    <img src={zeldaImg} alt="Imagem Galeria" />
                </Item>

                <Item>
                    <img src={zeldaImg} alt="Imagem Galeria" />
                </Item>
            </Items>
        </>
    </Section>
)

export default Gallery

