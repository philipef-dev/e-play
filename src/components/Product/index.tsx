import Tag from "../Tag"
import { Card, Descricao, Infos, Titulo } from "./styles"

type Props = {
    title: string;
    genero: string;
    description: string;
    system: string;
    infos: string[]
    image: string;
}

const Product = ({ title, system, description, genero, image, infos }: Props) => {
    const getDescription = (description: string) => {
        if (description.length > 92) {
            return description.slice(0, 92) + '...'
        } 
        return description
    }

    return (
        <Card>
            <img src={image} alt={title} />
            <Infos>
                {infos.map(info => <Tag size="small" key={info}>{info}</Tag>)}
            </Infos>

            <Titulo>{title}</Titulo>
            <Tag size="small">{genero}</Tag>
            <Tag size="small"> {system} </Tag>
            <Descricao>
                {getDescription(description)}
            </Descricao>
        </Card >

    )
}

export default Product