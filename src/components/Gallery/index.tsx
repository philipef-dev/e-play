import { useState } from "react";
import { GalleryItem } from "../../pages/Home";
import Section from "../Section"
import zoomIcon from '../../assets/images/botao-zoom.svg'
import playIcon from '../../assets/images/botao-play.svg'
import closeIcon from '../../assets/images/closeIcon.svg'

import * as S from "./styles";

type Props = {
    defaultCover: string
    name: string
    items: GalleryItem[]
}

interface ModalState extends GalleryItem {
    isVisible: boolean;
}

const Gallery = ({ defaultCover, name, items }: Props) => {
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
                <S.Items >
                    {items.map((media, index) => (
                        <S.Item key={media.url}
                            onClick={() => {
                                setModal({
                                    isVisible: true,
                                    type: media.type,
                                    url: media.url
                                })
                            }}
                        >
                            <img src={getMediaCover(media)} alt={`Mídia ${index + 1} de ${name}`} />
                            <S.Action>
                                <img src={getMediaIcon(media)} alt={`Media ${index + 1}`} />
                            </S.Action>
                        </S.Item>
                    ))}
                </S.Items >
            </Section >
            <S.Modal className={modal.isVisible ? 'visible' : ''}>
                <S.ModalContent className="container" >
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
                        />
                    )}

                </S.ModalContent >
                <div className="overlay" onClick={() => closeModal()} />
            </S.Modal >
        </>
    )
}

export default Gallery