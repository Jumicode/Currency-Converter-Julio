import React,{useEffect} from 'react';
import { getExchange } from '../service/AxiosService';
import { setExchange } from '../features/exchange/exchangeSlice';
import { useDispatch,useSelector } from 'react-redux';





const ExchangeMain = () => {

const { exchangeMain } = useSelector((state) => state.exchange);

useEffect(() =>{
    getExchangeMain();
},[]);

const dispatch = useDispatch();

const getExchangeMain = () =>{
    getExchange()
    .then((res) =>{
        console.log(res);
        dispatch(setExchange(res.data))
    })

}

    return (
        <div>
            <h1>Hola</h1>
   <h1>{exchangeMain.base_code}</h1>


        </div>
    );
}

export default ExchangeMain;
