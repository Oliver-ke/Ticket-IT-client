import axios from 'axios';
import {
    ADD_TICKET,
    GET_USER_TICKETS,
    USER_TICKET_LOADING,
    DELETE_TICKET
}from './types'


//Adds tickets to db
export const addTicket = data => dispatch =>{
    dispatch(userTicketLoading())
    axios.post('/tickets', data)
        .then(res =>{
            dispatch({
                type: ADD_TICKET,
                payload: res.data
            })
        })
        .catch(err =>{
            console.log(err)
        });
}

//gets user specific tickets
export const getUserTickets = userId => dispatch =>{
    dispatch(userTicketLoading())
    axios.get(`/tickets/user/${userId}`)
        .then(res =>{
            dispatch({
                type: GET_USER_TICKETS,
                payload: res.data
            })
        })
        .catch(err =>{
            console.log(err)
        })
}


//Delete Tickets
export const deleteTicket = (ticketId, userId) => dispatch =>{
    dispatch(userTicketLoading())
    axios.delete(`/tickets/delete/${ticketId}`)
        .then(res =>{
            dispatch({
                type: DELETE_TICKET,
                payload: ticketId
            })
            console.log(res)
        })
        .catch(err =>{
            console.log(err)
        })
}

//Edit ticket details
export const editTicket = (ticketId, newData, userId) => dispatch =>{
    dispatch(userTicketLoading())
    axios.put(`/tickets/edit/${ticketId}`, newData)
        .then(res =>{
            dispatch(getUserTickets(userId))
        })
        .catch(err =>{
            console.log(err);
        })
}

//loading signal
export const userTicketLoading = () =>{
    return {
        type: USER_TICKET_LOADING
    }
}