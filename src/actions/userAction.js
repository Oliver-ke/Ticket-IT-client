import axios from 'axios';
import {
    ADD_TICKET,
    GET_USER_TICKETS
}from './types'


//Adds tickets to db
export const addTicket = data => dispatch =>{
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
    axios.delete(`/tickets/delete/:${ticketId}`)
        .then(res =>{
            dispatch(getUserTickets(userId))
        })
        .catch(err =>{
            console.log(err)
        })
}

//Edit ticket details
export const editTicket = (ticketId, newData, userId) => dispatch =>{
    axios.put(`/tickets/edit/${ticketId}`, newData)
        .then(res =>{
            dispatch(getUserTickets(userId))
        })
        .catch(err =>{
            console.log(err);
        })
}