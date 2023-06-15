import { render, screen, fireEvent} from '@testing-library/react';
import { store } from './app/store';
import App from './App';
import { Provider } from 'react-redux';
import ExchangeMain from './components/exchangeMain';
import ExchangeUpdate from './components/exchangeUpdate';


describe('REACT - We test the components',() =>{
  test('We test the main component',() =>{
    const r = render(
      <Provider store={store}>
        <ExchangeMain></ExchangeMain>
      </Provider>
    )
    expect(r).toBeDefined();
  })

  
  test('updates state on currency change', () => {
    render(
      <Provider store={store}>
        <ExchangeMain />
      </Provider>
    );

    // Simula el cambio de selección de moneda 'From'
    fireEvent.change(screen.getByLabelText('From:'), { target: { value: 'USD' } });

    // Verifica que el estado se actualice correctamente
    expect(store.getState().exchange.fromCurrency);
  });

  test('handles conversion on button click', async () => {
    render(
      <Provider store={store}>
        <ExchangeMain />
      </Provider>
    );

    // Simula el cambio de selección de moneda 'From'
    fireEvent.change(screen.getByLabelText('From:'), { target: { value: 'USD' } });

    // Simula el cambio de selección de moneda 'To'
    fireEvent.change(screen.getByLabelText('To:'), { target: { value: 'EUR' } });

    // Simula el cambio de valor de la cantidad
    fireEvent.change(screen.getByLabelText('Amount:'), { target: { value: '10' } });

    // Simula el click en el botón "Convert"
    fireEvent.click(screen.getByText('Convert'));

   
    // Verifica que el estado `result` se actualice con el valor correcto
    expect(store.getState().exchange.result).toBeDefined();
  });

  test('handles currency inversion on button click', () => {
    render(
      <Provider store={store}>
        <ExchangeMain />
      </Provider>
    );

    // Simula el cambio de selección de moneda 'From'
    fireEvent.change(screen.getByLabelText('From:'), { target: { value: 'USD' } });

    // Simula el cambio de selección de moneda 'To'
    fireEvent.change(screen.getByLabelText('To:'), { target: { value: 'EUR' } });


    // Simula el click en el botón "Invert"
    fireEvent.click(screen.getByText('Invert'));

    // Verifica que las monedas se hayan intercambiado correctamente en el estado
    expect(store.getState().exchange.fromCurrency);
    expect(store.getState().exchange.toCurrency);
  });
  

  

  test('We test the exchangeUpdate component',() =>{

    const r = render(
      <Provider store={store}>
        <ExchangeUpdate></ExchangeUpdate>
      </Provider>
    )

expect(r).toBeDefined();
  })

  test('renders the component without errors', () => {
    render(
      <Provider store={store}>
        <ExchangeUpdate />
      </Provider>
    );

    expect(screen.getByText('Exchange Rates')).toBeInTheDocument();
    expect(screen.getByText('List with the updated conversion rate, you can use the search engine to see the price of the currency of your choice')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search for a currency...')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  test('displays updated conversion rates', async () => {
    // Mock the API response for the exchange rate update
    const mockUpdate = {
      USD: 1,
      EUR: 0.9,
      GBP: 0.8,
    };
  
    // Render the component with the mock data
    render(
      <Provider store={store}>
        <ExchangeUpdate />
      </Provider>
    );
  
    // Verify that the conversion rates are displayed
    for (const [currency, rate] of Object.entries(mockUpdate)) {
      const currencyRateText = await screen.queryByText(`${currency}: ${rate}`);
      expect(currencyRateText);
    }
  });
  
  

  
})





describe('REACT - integration test',() =>{
  test('We render the app', () =>{
    const r = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(r).toBeDefined();
  })

  test('renders the app with Redux store integration', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  
  
    // Verifica que se muestre algún contenido de la aplicación
    const contentElement = screen.getByText(/Exchange Rates/i);
    expect(contentElement).toBeInTheDocument();
  });
  test('renders the app with Redux store integration', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  
  
    
    const titleElement = screen.getByText(/Currency Converter Julio/i);
    expect(titleElement).toBeInTheDocument();
  
   
  });
})
