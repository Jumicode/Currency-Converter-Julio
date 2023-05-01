
import { createSlice } from '@reduxjs/toolkit'

export const exchangeSlice = createSlice({
    name: 'exchange',
    initialState: {
      currencies: [],     // an array to store the list of available currencies
      fromCurrency: 'USD', // the currency to convert from (default: USD)
      toCurrency: 'EUR',   // the currency to convert to (default: EUR)
      amount: 1,           // the amount to convert (default: 1)
      result: null,        // the result of the conversion (initially null)
      Update: [],          // an array to store the exchange rate update information
      searchQuery: "",    
    },
  
  // Define the reducers for the slice
  reducers: {
    // Reducer for setting the list of currencies
    setCurrencies: (state, action) => {
      state.currencies = action.payload;
    },
    
    // Reducer for setting the "from" currency
    setFromCurrency: (state, action) => {
      state.fromCurrency = action.payload;
    },
    
    // Reducer for setting the "to" currency
    setToCurrency: (state, action) => {
      state.toCurrency = action.payload;
    },
    
    // Reducer for setting the amount to convert
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    
    // Reducer for setting the conversion result
    setResult: (state, action) => {
      state.result = action.payload;
    },
    
    // Reducer for setting the exchange rate update
    setUpdate: (state, action) => {
      state.Update = action.payload;
    },
    setSearchQuery:(state,action) =>{
      state.searchQuery = action.payload;
    }

  }
});

// Export the reducers as named exports
export const {
    setCurrencies,
    setFromCurrency,
    setToCurrency,
    setAmount,
    setResult,
    setUpdate,
    setSearchQuery,
  } = exchangeSlice.actions;
// Export the default reducer for the slice
export default exchangeSlice.reducer;
