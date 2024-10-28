import Banner from "../../components/Banner";
import ProductsList from "../../components/ProductList";

const Home = () => ( 
    <>
        <Banner />
        <ProductsList title="Promoções" background='gray' />
        <ProductsList title="Em breve" background='black' />
    </>
)

export default Home;