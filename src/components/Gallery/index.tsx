import Section from "../Section"
import zeldaImg from '../../assets/images/zelda.png';
import starWarsImg from '../../assets/images/star_wars.png'
import fifaImg from '../../assets/images/fifa.png'
import zoomIcon from '../../assets/images/botao-zoom.svg'
import playIcon from '../../assets/images/botao-play.svg'
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
        type: 'image',
        url: fifaImg
    },
    {
        type: 'video',
        url: 'https://www.youtube.com/embed/skUWFSK9TdM?si=xZETnmWRp-6sSksQ'
    }
]

type Props = {
    defaultCover: string
    name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
    const getMediaCover = (item: GalleryItem) => {
        if (item.type === 'image') return item.url
        return defaultCover
    }

    const getMediaIcon = (item: GalleryItem) => {
        if (item.type === 'image') return zoomIcon
        return playIcon
    }

    return (
        <>
            <Section title="Galeria" background="black">
                <Items>
                    {moka.map((media, index) => (
                        <Item key={media.url}>
                            <img src={getMediaCover(media)} alt={`Mídia ${index + 1} de ${name}`} />
                            <Action>
                                <img src={getMediaIcon(media)} alt={`Media ${index + 1}`} />
                            </Action>
                        </Item>
                    ))}
                </Items >
            </Section>
            <div>
                {/* Parei no minuto 18 crie a galera parte II */}
                <img src="" alt="" />
            </div>
        </>
    )
}

export default Gallery
