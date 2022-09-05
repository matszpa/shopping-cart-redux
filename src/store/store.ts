import {configureStore} from '@reduxjs/toolkit'
import productsReducer from "./productsSlice";
import cartReducer from "./cartSlice";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {loadStore} from "./localStorage";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    },
    preloadedState: loadStore()

})
store.subscribe(() => {
    localStorage.setItem("cart", JSON.stringify(store.getState()))
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store