import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './Reducer/CartReducer';

export const Store = configureStore({
    reducer:{
        CartRed: CartReducer
    }
})
