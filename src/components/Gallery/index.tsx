import Section from "../Section"
import zeldaImg from '../../assets/images/zelda.png';
import starWarsImg from '../../assets/images/star_wars.png'
import zoomIcon from '../../assets/images/botao-zoom.svg' 
import { Action, Item, Items } from "./styles";

type GalleryItem = {
    type: 'image' | 'video',
    url: string
}

const moka: GalleryItem[] = [
    {
        type: 'image',
        url: zeldaImg
    },
    {
        type: 'image',
        url: starWarsImg
    },
    {
        type: 'video',
        url: 'https://www.youtube.com/embed/skUWFSK9TdM?si=xZETnmWRp-6sSksQ'
    }
]
    


const Gallery = () => (
    <Section title="Galeria" background="black">
        <>
            <Items>
                <Item>
                    <img src={zeldaImg} alt="Imagem Galeria" />
                    <Action>
                        <img src={zoomIcon} alt="botão de zoom icon" />
                    </Action>
                </Item>

                <Item>
                    <img src={zeldaImg} alt="Imagem Galeria" />
                    <Action>
                        <img src={zoomIcon} alt="botão de zoom icon" />
                    </Action>
                </Item>

                <Item>
                    <img src={zeldaImg} alt="Imagem Galeria" />
                    <Action>
                        <img src={zoomIcon} alt="botão de zoom icon" />
                    </Action>
                </Item>

                <Item>
                    <img src={zeldaImg} alt="Imagem Galeria" />
                    <Action>
                        <img src={zoomIcon} alt="botão de zoom icon" />
                    </Action>
                </Item>
            </Items>
        </>
    </Section>
)

export default Gallery

