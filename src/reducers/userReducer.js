

import {
    GET_USER_TICKETS,
    ADD_TICKET
}from '../actions/types'

const initialState = {
    userTickets :[],
    addedTicket :  {}
}

export default (state=initialState, action) =>{
    switch(action.type){
        case GET_USER_TICKETS:
            return {
                ...state, userTickets: action.payload
            };
        case ADD_TICKET:
            return {
                ...state, addedTicket: action.payload
            };
        default: 
            return{
                ...state
            }
    }
}