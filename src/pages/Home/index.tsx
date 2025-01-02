import Banner from "../../components/Banner";
import ProductsList from "../../components/ProductList";

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export type GalleryItem = {
    type: 'image' | 'video',
    url: string
}

export type Game = {
    id: number,
    name: string,
    description: string,
    release_date: string,
    prices: {
        discount?: number,
        old?: number,
        current?: number
    },
    details: {
        category: string,
        system: string,
        developer: string,
        publisher: string,
        languages: []
    },
    media: {
        thumbnail: string,
        cover: string,
        gallery: GalleryItem[]
    }
}

const Home = () => {
    const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery();
    const { data: soonGames, isLoading: isLoadginSoon } = useGetSoonQuery();

    return (
        <>
            <Banner />
            <ProductsList isLoading={isLoadingSale} games={onSaleGames} title="Promoções" background="gray" id='on-sale' />
            <ProductsList isLoading={isLoadginSoon} games={soonGames} title="Em breve" background="black" id='comming-soon' />
        </>
    )
}

export default Home;