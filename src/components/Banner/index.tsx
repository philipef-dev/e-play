import { ImageBanner, Precos, Titulo } from "./styles"

const Banner = () => (
    <ImageBanner>
        <div className="container">
            <Titulo>Marvel's Spider-Man: Miles <br /> Morales PS4 & PS5 </Titulo>
            <Precos> <span>De R$ 250,00</span>  <br />por apenas R$ 99,90</Precos>
        </div>
    </ImageBanner>
)

export default Banner
