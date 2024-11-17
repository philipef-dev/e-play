import ProductsList from "../../components/ProductList";

// Teremos acao, esportes, simulacao, luta, rpg

// https://fake-api-tau.vercel.app/api/eplay/acao


const Categories = () => (
    <>
        <ProductsList games={promocoes} title="RPG" background='gray' />
        <ProductsList games={promocoes} title="Ação" background='black' />
        <ProductsList games={promocoes} title="Aventura" background='gray' />
        <ProductsList games={promocoes} title="FPS" background='black' />     
    </>
)

export default Categories;