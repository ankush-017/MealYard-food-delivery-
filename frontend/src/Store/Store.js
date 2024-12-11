import {configureStore} from '@reduxjs/toolkit'
import foodReducer from '../Slice/Slice';
import cartReducer from '../Slice/CartSlice';

export const Store = configureStore({
    reducer: {
        list: foodReducer,
        cart: cartReducer,

    }
})