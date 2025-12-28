import { configureStore } from "@reduxjs/toolkit";
import slice1Reducer from "./Slicer1"

const store=configureStore({
    reducer:{   //Match slice and reducer
        slice1: slice1Reducer,
        //slice2: slice2Reducer,
    }
})

export default store;