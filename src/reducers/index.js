import { combineReducers } from 'redux';
import ticketReducer from './ticketReducer'
import paymentReducer from './paymentReducer'

export default combineReducers({
    ticket: ticketReducer,
    payment: paymentReducer
});