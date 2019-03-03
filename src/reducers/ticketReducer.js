import {
    GET_TICKETS,
    GET_TICKET,
    TICKET_LOADING,
    CURRENT_NAV
} from '../actions/types';

const initialState = {
    tickets: [],
    ticket:{},
    currentNav: 1
}

export default (state = initialState, action) =>{
    switch(action.type){
        case TICKET_LOADING:
            return{
                ...state,
                loading: true
            };
        case GET_TICKETS:
            return{
                ...state,
                tickets: action.payload,
                loading: false
            };
        case GET_TICKET:
            return{
                ...state,
                ticket: action.payload,
                loading: false
            };
        case CURRENT_NAV:
            return{
                ...state,
                currentNav: action.payload
            }
        default:
            return state;
    }
}