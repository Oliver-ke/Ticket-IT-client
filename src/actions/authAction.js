import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import {
    GET_ERRORS,
    SET_CURRENT_USER,
    CLEAR_ERRORS,
} from './types'


//Register user
export const register = (data,history) => dispatch =>{
    dispatch({
        type: CLEAR_ERRORS
    })
    axios.post('/users/register', data)
        .then(res => history.push('/login'))
        .catch(err =>{
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        });
};

//Login -Get user token
export const loginUser = data => dispatch =>{
    axios.post('/users/login', data)
        .then(res =>{
            //save to local storage
            const {token} = res.data
            localStorage.setItem('jwtToken',token);
            setAuthToken(token);
            //decode token to get user data
            const decode = jwt_decode(token);
            //set current user
            dispatch(setCurrentUser(decode));
        })
        .catch(err =>{
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data || err
            });
        });
};

//Set the logged in user
export const setCurrentUser = decodedData =>{
    return {
        type: SET_CURRENT_USER,
        payload: decodedData
    }
}

//logout user
export const logoutUser = () => dispatch =>{
    //remove token from localstorage
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
}