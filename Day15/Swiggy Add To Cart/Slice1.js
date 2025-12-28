import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"slice1",
    initialState:{count:0},
    reducers:{
        addItem: (state)=>{ state.count=state.count+1},
        removeItem: (state)=>{state.count=state.count-1}
    }
});


export default cartSlice.reducer;

export const {addItem,removeItem}=cartSlice.actions;