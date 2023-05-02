/**
 * React component that handles currency exchange.
 * @module ExchangeMain
 * @see {@link https://github.com/Jumicode/Currency-Converter/blob/main/src/components/exchangeMain.js|GitHub Repo}
 */

 import React, { useEffect } from 'react';
 import { useDispatch, useSelector } from 'react-redux';
 import axios from 'axios';
 import ExchangeUpdate from './exchangeUpdate';
 
 import { setAmount, setCurrencies, setFromCurrency, setResult, setToCurrency } from '../features/exchange/exchangeSlice';
 
 import '../styles/styles.scss';
 
 /**
  * Renders the main currency exchange component.
  * @function
  * @returns {JSX.Element} The JSX code for the component.
  */
 const ExchangeMain = () => {
   const { currencies, fromCurrency, toCurrency, amount, result } = useSelector((state) => state.exchange);
 
   const dispatch = useDispatch();
 
   /**
    * Fetches the currency list when the component mounts.
    * @function useEffect
    * @memberof module:ExchangeMain
    * @inner
    * @param {Function} callback - The callback function to execute.
    * @param {Array} dependencies - The dependencies for the effect.
    */
   useEffect(() => {
     axios
       .get('https://v6.exchangerate-api.com/v6/c223ac6b72ff418533308c6b/latest/USD')
       .then((response) => {
         const currencyList = Object.keys(response.data.conversion_rates);
         console.log(response);
         dispatch(setCurrencies(currencyList));
       })
       .catch((error) => {
         console.log(error);
       });
   }, []);
 
   /**
    * Handles the change event for the "From" currency select.
    * @function
    * @memberof module:ExchangeMain
    * @inner
    * @param {Object} event - The event object.
    */
   const handleFromCurrencyChange = (event) => {
     dispatch(setFromCurrency(event.target.value));
   };
 
   /**
    * Handles the change event for the "To" currency select.
    * @function
    * @memberof module:ExchangeMain
    * @inner
    * @param {Object} event - The event object.
    */
   const handleToCurrencyChange = (event) => {
     dispatch(setToCurrency(event.target.value));
   };
 
   /**
    * Handles the change event for the "Amount" input.
    * @function
    * @memberof module:ExchangeMain
    * @inner
    * @param {Object} event - The event object.
    */
   const handleAmountChange = (event) => {
     dispatch(setAmount(event.target.value));
   };
 
   /**
    * Handles the "Convert" button click event.
    * @function
    * @memberof module:ExchangeMain
    * @inner
    */
   const handleConvert = () => {
     axios
       .get(`https://v6.exchangerate-api.com/v6/c223ac6b72ff418533308c6b/latest/${fromCurrency}`)
       .then((response) => {
         const conversionRate = response.data.conversion_rates[toCurrency];
         const convertedAmount = amount * conversionRate;
         dispatch(setResult(convertedAmount));
       })
       .catch((error) => {
         console.log(error);
       });
   };


     /**
   * Handles the "Invert" button click event.
   * @function handleInvert
   * @memberof ExchangeMain
   * @inner
   */
   
  function handleInvert() {
     dispatch(setFromCurrency(toCurrency));
     dispatch(setToCurrency(fromCurrency));
   }


  return (
    <div className='container'>
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
      <button onClick={handleInvert} className='Invert'>Invert</button>
      {result && (
        <div className='result'>
          <p>{amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}</p>
        </div>
      )}
      <ExchangeUpdate></ExchangeUpdate>
    </div>
  );
}

export default ExchangeMain;

