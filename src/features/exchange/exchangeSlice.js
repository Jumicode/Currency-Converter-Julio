import { createSlice } from '@reduxjs/toolkit'

export  const exchangeSlice = createSlice ({
    name:'exchange',
    initialState : {
        currencies:[],
        fromCurrency:('USD'),
        toCurrency:('EUR'),
        amount:(1),
        result:(null),
    },

reducers:{
    setCurrencies:(state,actions) =>{
        state.currencies = actions.payload;
    },
    setFromCurrency:(state,actions) =>{
        state.fromCurrency = actions.payload;
    },
   setToCurrency:(state,actions) =>{
state.toCurrency = actions.payload;
   },
   setAmount:(state,actions) =>{
    state.amount = actions.payload;
   },
   setResult:(state,actions) =>{
    state.result = actions.payload;
   }
}


}) 


export const {setCurrencies,setFromCurrency,setToCurrency,setAmount,setResult} = exchangeSlice.actions;


export default exchangeSlice.reducer;

