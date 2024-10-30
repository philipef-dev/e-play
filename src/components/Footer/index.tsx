import { FooterItens, FooterSection, FooterTitulo, } from "./styles"

const Footer = () => (
    <FooterSection>
        <div className="container">
            <FooterTitulo>Categorias</FooterTitulo>
            <FooterItens>
                <li>RPG</li>
                <li>Ação</li>
                <li>Aventura</li>
                <li>Esportes</li>
                <li>Sinulação</li>
                <li>Estratégia</li>
                <li>FPS</li>
            </FooterItens>

            <FooterTitulo>Acesso Rápdio</FooterTitulo>

            <FooterItens>
                <li>
                    <a href="#">Novidades</a>
                </li>
                <li>
                    <a href="#">Promoções</a>
                </li>
                <li>
                    <a href="#">Em breve</a>
                </li>
            </FooterItens>
            <p>2023 - © E-PLAY Todos os direitos reservados</p>
        </div>
    </FooterSection>
)

export default Footer

