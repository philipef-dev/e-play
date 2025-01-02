import { PacmanLoader } from "react-spinners"
import { LoaderContainer } from "./styles"

const Loader = () => (
    <LoaderContainer>
        <PacmanLoader color="#FFF" size={25} />
    </LoaderContainer>
)

export default Loader