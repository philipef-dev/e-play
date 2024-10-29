import Banner from "../../components/Banner";

import ProductsList from "../../components/ProductList";
import residentEvilPng from '../../assets/images/resident.png';
import diablo4Png from '../../assets/images/diablo.png';
import starWarsPng from '../../assets/images/star_wars.png';
import streetFighterPng from '../../assets/images/streetFighter.png';
import zeldaPng from '../../assets/images/zelda.png'
import fifaPng from '../../assets/images/fifa.png'

import Game from "../../model/Game";

const promocoes: Game[] = [
    {
        id: 1,
        genero: 'Ação',
        title: 'Resident Evil 4 - Remake',
        system: 'Windows',
        infos: ['R$ 199,90', '-10%'],
        description: 'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
        image: residentEvilPng
    },
    {
        id: 2,
        genero: 'Ação',
        title: 'Resident Evil 4 - Remake',
        system: 'Windows',
        infos: [],
        description: 'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
        image: residentEvilPng
    },
    {
        id: 3,
        genero: 'Ação',
        title: 'Resident Evil 4 - Remake',
        system: 'Windows',
        infos: [],
        description: 'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
        image: fifaPng
    },
    {
        id: 4,
        genero: 'Ação',
        title: 'Resident Evil 4 - Remake',
        system: 'Windows',
        infos: [],
        description: 'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
        image: fifaPng
    }
]

const emBreve: Game[] = [
    {
        id: 1,
        genero: 'RPG',
        title: 'Diablo 4',
        system: 'Windows',
        infos: ['05/10'],
        description: 'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
        image: diablo4Png
    },
    {
        id: 2,
        genero: 'Aventura',
        title: 'Star Wars Jedi Survivor',
        system: 'Windows',
        infos: ['05/04'],
        description: 'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
        image: starWarsPng
    },
    {
        id: 3,
        genero: 'Luta',
        title: 'Street Fighter 6',
        system: 'Windows',
        infos: [],
        description: 'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
        image: streetFighterPng
    },
    {
        id: 4,
        genero: 'RPG',
        title: 'The Legend of Zelda - TOK',
        system: 'Switch',
        infos: [],
        description: 'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
        image: zeldaPng
    },
]

const Home = () => (
    <>
        <Banner />
        <ProductsList games={promocoes} title="Promoções" background='gray' />
        <ProductsList games={emBreve} title="Em breve" background='black' />
    </>
)

export default Home;