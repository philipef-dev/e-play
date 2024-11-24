import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../pages/Home'

export const api = createApi({
    reducerPath: 'gameApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-api-tau.vercel.app/api/eplay/' }),
    endpoints: (builder) => ({
        getGameDestaque: builder.query<Game, string>({
            query: () => 'destaque'
        }),
        getOnSale: builder.query<Game[], void>({
            query: () => 'promocoes'
        }),
        getSoon: builder.query<Game[], void>({
            query: () => 'em-breve'
        }),
        getActionGames: builder.query<Game[], void>({
            query: () => 'acao'
        }),
        getSportGames: builder.query<Game[], void>({
            query: () => 'esportes'
        }),
        getSimulationGames: builder.query<Game[], void>({
            query: () => 'simulacao'
        }),
        getFightGames: builder.query<Game[], void>({
            query: () => 'luta'
        }),
        getRpgGames: builder.query<Game[], void>({
            query: () => 'rpg'
        }),
        getProduct: builder.query<Game, string>({
            query: (id) => `jogos/${id}`
        })
    })
})

export const { useGetGameDestaqueQuery, useGetOnSaleQuery, useGetSoonQuery, useGetActionGamesQuery, useGetSportGamesQuery, useGetSimulationGamesQuery, useGetFightGamesQuery, useGetRpgGamesQuery, useGetProductQuery } = api
