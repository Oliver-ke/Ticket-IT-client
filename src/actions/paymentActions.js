import axios from 'axios';

import {
  INIT_PAYMENT_REQUEST,
  CONFIRM_PAYMENT,
  PAYMENT_LOADING
} from './types';

export const initPayment = data => dispatch =>{
    dispatch(setPaymentLoading());
    console.log(data)
    axios.post('/payments/pay', data)
        .then(res => dispatch({
            type: INIT_PAYMENT_REQUEST,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: INIT_PAYMENT_REQUEST,
            payload: err
        }));
}

export const confirmPayment = (ref) => dispatch =>{
    dispatch(setPaymentLoading());
    axios.post('/payments/callback',{reference: ref})
        .then(res => dispatch({
            type: CONFIRM_PAYMENT,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: CONFIRM_PAYMENT,
            payload: null
        }));
}


export const setPaymentLoading = () =>{
    return {
        type: PAYMENT_LOADING
    }
}