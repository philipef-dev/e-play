import { Link } from "react-router-dom";
import { FooterSection, FooterTitulo, Links } from "./styles";

const Footer = () => (
    <FooterSection>
        <div className="container">
            <FooterTitulo>Categorias</FooterTitulo>
            <Links>
                <li>
                    <Link to="/categories#action">Ação</Link>
                </li>
                <li>
                    <Link to="/categories#sport">Esportes</Link>
                </li>
                <li>
                    <Link to="/categories#simulation">Simulação</Link>
                </li>
                <li>
                    <Link to="/categories#figth">Luta</Link>
                </li>
                <li>
                    <Link to="/categories#rpg">RPG</Link>
                </li>
            </Links>

            <FooterTitulo>Acesso Rápido</FooterTitulo>
            <Links>
                <li>
                    <Link to="/#on-sale">Promoções</Link>
                </li>
                <li>
                    <Link to="/#comming-soon">Em breve</Link>
                </li>
            </Links>
            <p>2024 - © E-PLAY Todos os direitos reservados</p>
        </div>
    </FooterSection>
);

export default Footer;
