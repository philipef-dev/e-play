import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../pages/Home'

type CartState = {
    items: Game[]
    isOpen: boolean
    isDisabled: boolean
}

const initialState: CartState = {
    items: [],
    isOpen: false,
    isDisabled: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Game>) => {

            const game = state.items.find((item) => item.id === action.payload.id)

            if (!game) {
                state.items.push(action.payload)

            } else {
                alert('Item ja adicionado ao carrinho')
            }
        }, 
        
        remove: (state, action: PayloadAction<number>) => {
           state.items = state.items.filter((item) => item.id !== action.payload )
        },  

        openCart: (state) => {
            state.isOpen = true
        },
        closeCart: (state) => {
            state.isOpen = false
        }
    }
})

export const { add, remove, openCart, closeCart } = cartSlice.actions
export default cartSlice.reducer