import Tag from "../Tag"

import * as S from "./styles"

type Props = {
    title: string;
    genero: string;
    description: string;
    system: string;
    infos: string[]
    image: string;
    id: number
}

const Product = ({ title, system, description, genero, image, infos, id }: Props) => {
    const getDescription = (text: string) => {
        if (text.length > 92) {
            return text.slice(0, 92) + '...'
        }
        return text
    }

    return (
        <S.Card
            title={`Clique aqui para ver mais detalhes do jogo: ${title}`}
            to={`/product/${id}`}
        >
            <img src={image} alt={title} />
            <S.Infos>
                {infos.map(info => <Tag size="small" key={info}>{info}</Tag>)}
            </S.Infos>

            <S.Titulo>{title}</S.Titulo>
            <Tag size="small">{genero}</Tag>
            <Tag size="small"> {system} </Tag>
            <S.Description>
                {getDescription(description)}
            </S.Description>
        </S.Card >

    )
}

export default Product