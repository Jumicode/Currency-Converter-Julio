import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/styles.scss';
import axios from 'axios';
import { setUpdate } from '../features/exchange/exchangeSlice';





const ExchangeUpdate = () => {


const {Update} = useSelector((state) => state.exchange);

const dispatch = useDispatch();

useEffect(() => {
   axios
   .get('https://v6.exchangerate-api.com/v6/c223ac6b72ff418533308c6b/latest/USD')
   .then(response =>{

dispatch(setUpdate(response.data));
    console.log(response);
   })
   .catch(error =>{
    console.log(error);
   })


}, []);



    return (
        <div>
            
    <h5>Last update:{Update.time_last_update_utc}</h5>
    <h5>Next update:{Update.time_next_update_utc}</h5>


        </div>
    );
}

export default ExchangeUpdate;
