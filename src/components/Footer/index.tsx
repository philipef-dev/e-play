import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import * as S from "./styles";

const currentYear = new Date().getFullYear();

const Footer = () => (
<S.FooterSection>
    <div className="container">
        <S.FooterTitulo>Categorias</S.FooterTitulo>
        <S.Links>
            <li>
                <Link
                    title="Clique aqui para acessar jogos de ação"
                    to="/categories#action"
                >
                    Ação
                </Link>
            </li>
            <li>
                <Link
                    to="/categories#sport"
                    title="Clique aqui para acessar jogos de esportes"
                >
                    Esportes
                </Link>
            </li>
            <li>
                <Link
                    to="/categories#simulation"
                    title="Clique aqui para acessar jogos de simulação"
                >
                    Simulação
                </Link>
            </li>
            <li>
                <Link
                    to="/categories#figth"
                    title="Clique aqui para acessar jogos de luta"
                >
                    Luta
                </Link>
            </li>
            <li>
                <Link
                    to="/categories#rpg"
                    title="Clique aqui para acessar jogos de RPG"
                >
                    RPG
                </Link>
            </li>
        </S.Links>

        <S.FooterTitulo>Acesso Rápido</S.FooterTitulo>
        <S.Links>
            <li>
                <HashLink
                    to="/#on-sale"
                    title="Clique aqui para acessar a seção de promoção"
                >
                    Promoções
                </HashLink>
            </li>
            <li>
                <HashLink
                    to="/#comming-soon"
                    title="Clique aqui para acessar a seção de em breve"
                >
                    Em breve
                </HashLink>
            </li>
        </S.Links>
        <p>{currentYear} - © E-PLAY Todos os direitos reservados</p>
    </div>
</S.FooterSection>
);

export default Footer;
