import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";
import {Product} from "../utils/types";
import {getProducts as getProductsFromApi} from "../utils/api";


interface ProductsSliceState {
    productList: Product[];
    loading: boolean;
    error: string | null
}

const initialState: ProductsSliceState = {
    productList: [],
    loading: false,
    error: null
}

export const getProducts = createAsyncThunk('products/getProducts',
    async () => {
        return await getProductsFromApi();
    })

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        builder.addCase(
            getProducts.pending, (state, action) => {
                state.loading = true;
            }),
            builder.addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.productList = action.payload;
            }),
            builder.addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                console.log(action)
                state.error = "blad"
            })
    }
})
export const selectProducts = (state: RootState) => state.products
export default productsSlice.reducer