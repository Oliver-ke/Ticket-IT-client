import { combineReducers } from 'redux';
import ticketReducer from './ticketReducer'
import paymentReducer from './paymentReducer'
import authReducer from './authReducer'
import userReducer from './userReducer'
export default combineReducers({
    ticket: ticketReducer,
    payment: paymentReducer,
    auth: authReducer,
    user: userReducer
});