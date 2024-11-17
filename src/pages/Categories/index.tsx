import { useEffect, useState } from "react";
import ProductsList from "../../components/ProductList";
import { Game } from "../Home";

const Categories = () => {

    const [gamesAcao, setGamesAcao] = useState<Game[]>([])
    const [gamesEsporte, setGamesEsporte] = useState<Game[]>([])
    const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
    const [gamesLuta, setGameLuta] = useState<Game[]>([])
    const [gamesRpg, setGamesRpg] = useState<Game[]>([])

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
            .then((res) => res.json())
            .then((res) => setGamesAcao(res))
        fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
            .then((res) => res.json())
            .then((res) => setGamesEsporte(res))
        fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
            .then((res) => res.json())
            .then((res) => setGamesSimulacao(res))
        fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
            .then((res) => res.json())
            .then((res) => setGameLuta(res))
        fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
            .then((res) => res.json())
            .then((res) => setGamesRpg(res))
    }, [])

    return (
        <>
            <ProductsList games={gamesAcao} title="Ação" background='black' />
            <ProductsList games={gamesEsporte} title="Esporte" background='gray' />
            <ProductsList games={gamesSimulacao} title="Simulação" background='black' />
            <ProductsList games={gamesLuta} title="Luta" background='gray' />
            <ProductsList games={gamesRpg} title="RPG" background='black' />
        </>
    )
}

export default Categories;