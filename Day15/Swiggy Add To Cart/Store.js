import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './Slice1.js'

const store=configureStore({
    reducer:{
        slice1: cartSlice
    }
});

export default store;
