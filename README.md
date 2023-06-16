
# Currency Converter

Currency Converter is a web application that allows users to convert between different currencies using real-time exchange rates provided by the [ExchangeRate-API](https://www.exchangerate-api.com/) API.

# Site Live 

https://currencyconverterjulio.netlify.app

## Functionality

The application allows the user to select the source currency, target currency, enter an amount, and then display the result of the conversion. Additionally, a table listing the current exchange rates for different currencies is displayed.

## Technologies Used

The application is written in React and uses Sass for CSS styles. Requests to the API are made using the `axios` function in JavaScript. The application runs in a web browser and can be hosted on any web server that supports React.

## Configuration

Before using the application, it is necessary to obtain a free API key from [ExchangeRate-API](https://www.exchangerate-api.com/). Then, you must replace the API key in the `src/App.js` file on line 16:

```
const API_KEY = "YOUR_API_KEY_HERE";
```

You must also run the following command in the root directory of the application to install the necessary dependencies:

```
npm install
```

## Usage

To start the application, run the following command in the root directory of the application:

```
npm start
```

Then, the application will run in the default web browser at `http://localhost:3000/`.

## Contribution

If you wish to contribute to the application, you can fork the repository on GitHub and submit pull requests with your changes. Be sure to test your changes and follow the project's style guidelines before submitting a pull request.

## Credits

The application was created by Julio Romero and uses the [ExchangeRate-API](https://www.exchangerate-api.com/) API to obtain real-time exchange rates.

## License

The application is available under the MIT License. See the `LICENSE` file for more information.
