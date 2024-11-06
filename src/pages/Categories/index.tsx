import ProductsList from "../../components/ProductList";
import residentEvilPng from '../../assets/images/resident.png';
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

const Categories = () => (
    <>
        <ProductsList games={promocoes} title="RPG" background='gray' />
        <ProductsList games={promocoes} title="Ação" background='black' />
        <ProductsList games={promocoes} title="Aventura" background='gray' />
        <ProductsList games={promocoes} title="FPS" background='black' />     
    </>
)

export default Categories;