import ProductsList from "../../components/ProductList";
import { useGetActionGamesQuery, useGetFightGamesQuery, useGetRpgGamesQuery, useGetSimulationGamesQuery, useGetSportGamesQuery } from "../../services/api";

const Categories = () => {
    const { data: gamesAction, isLoading: isLoadingGamesAction } = useGetActionGamesQuery()
    const { data: gamesSport, isLoading: isLoadingGamesSport } = useGetSportGamesQuery()
    const { data: gamesSimulation, isLoading: isLoadingGamesSimulation } = useGetSimulationGamesQuery()
    const { data: gamesFight, isLoading: isLoadingGamesFight } = useGetFightGamesQuery()
    const { data: gamesRpg, isLoading: isLoadingGamesRpg } = useGetRpgGamesQuery()

    if (gamesAction && gamesSport && gamesSimulation && gamesFight && gamesRpg) {
        return (
            <>
                <ProductsList games={gamesAction} isLoading={isLoadingGamesAction} title="Ação" background='black' id="action" />
                <ProductsList games={gamesSport} isLoading={isLoadingGamesSport} title="Esporte" background='gray' id="sport" />
                <ProductsList games={gamesSimulation} isLoading={isLoadingGamesSimulation} title="Simulação" background='black' id="simulation" />
                <ProductsList games={gamesFight} isLoading={isLoadingGamesFight} title="Luta" background='gray' id="figth" />
                <ProductsList games={gamesRpg} title="RPG" isLoading={isLoadingGamesRpg} background='black' id="rpg" />
            </>
        )
    }
}

export default Categories;