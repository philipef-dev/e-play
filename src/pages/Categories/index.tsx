import ProductsList from "../../components/ProductList";
import { useGetActionGamesQuery, useGetFightGamesQuery, useGetRpgGamesQuery, useGetSimulationGamesQuery, useGetSportGamesQuery } from "../../services/api";

const Categories = () => {
    const { data: gamesAcao } = useGetActionGamesQuery()
    const { data: gamesEsporte } = useGetSportGamesQuery()
    const { data: gamesSimulacao } = useGetSimulationGamesQuery()
    const { data: gamesLuta } = useGetFightGamesQuery()
    const { data: gamesRpg } = useGetRpgGamesQuery()

    if (gamesAcao && gamesEsporte && gamesSimulacao && gamesLuta && gamesRpg) {
        return (
            <>
                <ProductsList games={gamesAcao} title="Ação" background='black' id="action" />
                <ProductsList games={gamesEsporte} title="Esporte" background='gray' id="sport" />
                <ProductsList games={gamesSimulacao} title="Simulação" background='black' id="simulation" />
                <ProductsList games={gamesLuta} title="Luta" background='gray' id="figth" />
                <ProductsList games={gamesRpg} title="RPG" background='black' id="rpg" />
            </>
        )
    }
}

export default Categories;