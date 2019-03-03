import {
   INIT_PAYMENT_REQUEST,
   PAYMENT_LOADING,
   CONFIRM_PAYMENT,
} from '../actions/types';

const initialState = {
    initDetail: {},
    paymentDetail: {}
}


export default (state = initialState, action) =>{
    switch(action.type){
        case INIT_PAYMENT_REQUEST:
            return{
                ...state,
                initDetail: action.payload,
                paymentLoading: false
            }
        case PAYMENT_LOADING:
            return{
                ...state,
                paymentLoading: true
            }
        case CONFIRM_PAYMENT:
            return{
                ...state,
                paymentDetail: action.payload,
                paymentLoading: false
            }
        default:
            return{
                ...state
            }
    }
}