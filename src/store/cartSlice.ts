import {CartItem, Product} from '../utils/types';
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CartInitialState {
    cartItems: CartItem[];
    isOpen: boolean
}

const initialState: CartInitialState = {
    cartItems: [],
    isOpen: false
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            let index = state.cartItems.findIndex((p) => p.product.id === action.payload.product.id)
            console.log(index)
            if (index === -1)
                state.cartItems.push(action.payload)
            else
                state.cartItems[index].quantity += action.payload.quantity;
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.cartItems = state.cartItems.filter((item) => item.product.id !== action.payload)
        },
        changeQuantity: (state, action) => {
            console.log(action.payload)
            state.cartItems.map((item) => item.product.id === action.payload.id ? item.quantity = action.payload.quantity : item)
        },
        openCart: (state) => {
            state.isOpen = true;
        },
        closeCart: (state) => {
            state.isOpen = false;
        }


    }
})
export const {addItem, removeItem, changeQuantity, openCart, closeCart} = cartSlice.actions;
export default cartSlice.reducer;