import axios from 'axios';

import {
    GET_TICKETS,
    GET_TICKET,
    TICKET_LOADING,
    CURRENT_NAV
} from './types';

//GETS ALL AVALIABLE TICKETS
export const getTickets = () => dispatch =>{
    dispatch(setTicketLoading());
    axios.get('/tickets')
        .then(res => dispatch({
            type: GET_TICKETS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_TICKETS,
            payload: null
        }))
}

//Get a specific ticket by id
export const getTicket = (id) => dispatch =>{
    dispatch(setTicketLoading());
    console.log(id)
    axios.get(`/tickets/${id}`)
        .then(res => dispatch({
            type: GET_TICKET,
            payload: res.data
        }))
        .catch(err => {
            console.log('Error in req ',  err)
            dispatch({
                type: GET_TICKET,
                payload: null
            })
        })
}


export const setTicketLoading = () =>{
    return {
        type: TICKET_LOADING
    }
}

//set the current nav
export const setCurrentNav = (val) =>{
    return {
        type: CURRENT_NAV,
        payload: val
    }
}