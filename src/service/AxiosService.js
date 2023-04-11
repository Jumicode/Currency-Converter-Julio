import axios from "axios";


export const getExchange = () =>{
    return axios.get('https://v6.exchangerate-api.com/v6/c223ac6b72ff418533308c6b/latest/USD');
}



