import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../pages/Home'

export const api = createApi({
    reducerPath: 'gameApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-api-tau.vercel.app/api/' }),
    endpoints: (builder) => ({
        getGameDestaque: builder.query<Game, string>({
            query: (destaque) => `eplay/${destaque}`
        })
    })
})

export const { useGetGameDestaqueQuery } = api
