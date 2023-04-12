import React,{useEffect} from 'react';

import { setAmount, setCurrencies, setFromCurrency, setResult, setToCurrency } from '../features/exchange/exchangeSlice';
import { useDispatch,useSelector } from 'react-redux';
import axios from 'axios'



const ExchangeMain = () => {

const { currencies ,fromCurrency,toCurrency,amount, result } = useSelector((state) => state.exchange);

useEffect(() =>{
    axios
      .get('https://v6.exchangerate-api.com/v6/c223ac6b72ff418533308c6b/latest/USD')
      .then(response => {
        const currencyList = Object.keys(response.data.conversion_rates);
        dispatch(setCurrencies(currencyList));
      })
      .catch(error => {
        console.log(error);
      });
},[]);

const dispatch = useDispatch();

const handleFromCurrencyChange = event => {

dispatch(setFromCurrency(event.target.value));


 };
 const handleToCurrencyChange = event => {
    dispatch(setToCurrency(event.target.value))
  };

  const handleAmountChange = event => {
    dispatch(setAmount(event.target.value));
  };

  const handleConvert = () =>{

    axios
    .get(`https://v6.exchangerate-api.com/v6/c223ac6b72ff418533308c6b/latest/${fromCurrency}`)
    .then(response => {
      const conversionRate = response.data.conversion_rates[toCurrency];
      const convertedAmount = amount * conversionRate;
      dispatch(setResult(convertedAmount));
    })
    .catch(error => {
      console.log(error);
    });
};
return (
    <div>

<h2>Currency Converter</h2>
      <div>
        <label>From:</label>
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          {currencies.map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>To:</label>
        <select value={toCurrency} onChange={handleToCurrencyChange}>
          {currencies.map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <button onClick={handleConvert}>Convert</button>
      {result && (
        <div>
          <p>{amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}</p>
        </div>
      )}
        
    </div>
);


  }




   
    

export default ExchangeMain;