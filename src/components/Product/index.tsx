import Tag from "../Tag"
import { Card, Titulo } from "./styles"

const Product = () => (
        <Card>
            <img src="https://via.placeholder.com/222x250" alt="placeholder 222x250" />
            {/* <Tag size="small"> R$ 199,90 </Tag> */}
            {/* <Tag size="small"> -10% </Tag> */}
            <Titulo>Nome do jogo</Titulo>
            <Tag size="small"> Ação </Tag>
            <Tag size="small"> Windows </Tag>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nam modi a maiores incidunt quo magnam alias qui, expedita accusantium!
            </p>
        </Card >
)

export default Product