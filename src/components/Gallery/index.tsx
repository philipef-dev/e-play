import Section from "../Section"
import zeldaImg from '../../assets/images/zelda.png';
import starWarsImg from '../../assets/images/star_wars.png'
import fifaImg from '../../assets/images/fifa.png'
import zoomIcon from '../../assets/images/botao-zoom.svg'
import playIcon from '../../assets/images/botao-play.svg'
import closeIcon from '../../assets/images/closeIcon.svg'
import { Action, Item, Items, Modal, ModalContent } from "./styles";
import { useState } from "react";

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

interface ModalState extends GalleryItem {
    isVisible: boolean;
}

const Gallery = ({ defaultCover, name }: Props) => {
    const [modal, setModal] = useState<ModalState>({
        isVisible: false,
        type: 'image',
        url: ''
    })

    const getMediaCover = (item: GalleryItem) => {
        if (item.type === 'image') return item.url
        return defaultCover
    }

    const getMediaIcon = (item: GalleryItem) => {
        if (item.type === 'image') return zoomIcon
        return playIcon
    }

    const closeModal = () => {
        setModal({
            isVisible: false,
            type: 'image',
            url: ''
        })
    }

    return (
        <>
            <Section title="Galeria" background="black">
                <Items >
                    {moka.map((media, index) => (
                        <Item key={media.url}
                            onClick={() => {
                                setModal({
                                    isVisible: true,
                                    type: media.type,
                                    url: media.url
                                })
                            }}
                        >
                            <img src={getMediaCover(media)} alt={`Mídia ${index + 1} de ${name}`} />
                            <Action>
                                <img src={getMediaIcon(media)} alt={`Media ${index + 1}`} />
                            </Action>
                        </Item>
                    ))}
                </Items >
            </Section >
            <Modal className={modal.isVisible ? ('visible') : ('')}>
                <ModalContent className="container" >
                    <header>
                        <h4>{name}</h4>
                        <img
                            src={closeIcon}
                            onClick={() => closeModal()}
                            alt="Ícone de fechar"
                        />
                    </header>
                    {modal.type === 'image' ? (
                        <img src={modal.url} alt='' />
                    ) : (
                        <iframe src={modal.url}
                            frameBorder={0}
                        />
                    )}

                </ModalContent >
                <div className="overlay" onClick={() => closeModal()} />
            </Modal >
        </>
    )
}

export default Gallery
