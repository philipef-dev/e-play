import Tag from "../Tag"
import Button from "../Button"
import bannerImg from "../../assets/images/banner-homem-aranha.png"
import { ImageBanner, Precos, Titulo } from "./styles"

const Banner = () => (
    <ImageBanner style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="container">
            <Tag size="big">Destaque do dia</Tag>
            <div>
                <Titulo>Marvel's Spider-Man: Miles <br /> Morales PS4 & PS5 </Titulo>
                <Precos>
                    De <span> R$ 250,00</span>  <br />
                    por apenas R$ 99,90
                </Precos>
            </div>
            <div>
                <Button
                    type="link"
                    to="/produto"
                    title="Clique aqui para aproveitar essa orfeta"
                >
                    Aproveitar
                </Button>
            </div>
        </div>
    </ImageBanner>
)

export default Banner
