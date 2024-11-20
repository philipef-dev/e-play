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
    const { data: promocoes } = useGetOnSaleQuery();
    const { data: emBreve } = useGetSoonQuery();

    if (promocoes && emBreve) {
        return (
            <>
                <Banner />
                <ProductsList games={promocoes} title="Promoções" background='gray' />
                <ProductsList games={emBreve} title="Em breve" background='black' />
            </>
        )
    }
}

export default Home;