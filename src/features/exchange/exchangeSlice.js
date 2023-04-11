import { createSlice } from '@reduxjs/toolkit'

export  const exchangeSlice = createSlice ({
    name:'exchange',
    initialState : {
        exchangeMain:[],
    },

reducers:{
    setExchange:(state,actions) =>{
        state.exchangeMain = actions.payload;
    },
}


}) 


export const {setExchange} = exchangeSlice.actions;


export default exchangeSlice.reducer;

