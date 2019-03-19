

import {
    GET_USER_TICKETS,
    ADD_TICKET,
    USER_TICKET_LOADING
}from '../actions/types'

const initialState = {
    userTickets :[],
    addedTicket :  {},
    loading: false
}

export default (state=initialState, action) =>{
    switch(action.type){
        case GET_USER_TICKETS:
            return {
                ...state,
                 userTickets: action.payload,
                 loading: false
            };
        case ADD_TICKET:
            return {
                ...state, 
                addedTicket: action.payload,
                loading: false
            };
        case USER_TICKET_LOADING:
            return {
                ...state, loading: true
            }
        default: 
            return{
                ...state
            }
    }
}