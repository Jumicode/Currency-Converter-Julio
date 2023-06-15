import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/styles.scss';
import axios from 'axios';
import { setUpdate, setSearchQuery } from '../features/exchange/exchangeSlice';

/**
 * Component to display exchange rate update information.
 * @component
 * @returns {JSX.Element} - JSX element to display the update information.
 */
const ExchangeUpdate = () => {
  // Get exchange rate update information and search query from the Redux store
  const { Update, searchQuery } = useSelector((state) => state.exchange);
  const dispatch = useDispatch();

  /**
   * Fetches the latest exchange rate update information.
   * @function
   */
  useEffect(() => {
    axios
      .get('https://v6.exchangerate-api.com/v6/c223ac6b72ff418533308c6b/latest/USD')
      .then((response) => {
        dispatch(setUpdate(response.data.conversion_rates));
        //console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="update">
      {/* Displays a header */}
      <h3>Exchange Rates</h3>

      {/* Displays a subtitle */}
      <h4>List with the updated conversion rate, you can use the search engine to see the price of the currency of your choice</h4>

      {/* Displays a search input to search for a specific currency */}
      <input
        type="text"
        placeholder="Search for a currency..."
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        className="search-input"
      />

      {/* Displays a list with the updated conversion rates based on the search query */}
      <ul>
        {Object.entries(Update) // Convert the object into an array of arrays, where the first item is the currency code and the second is the rate
          .filter(([currency ]) => currency.toLowerCase().includes(searchQuery.toLowerCase())) // Filter the array based on the search query. Only show the currencies that match the search query
          .map(([currency, rate]) => ( // Map through the filtered array and create a new array of JSX elements
            <li key={currency}>
              {currency}: {rate}
            </li>
          ))}
      </ul>
    </div>
  );
};


export default ExchangeUpdate;



