// import fetch from 'cross-fetch';
import axios from 'axios';

export const ADD_USER = 'user:addUser';
export const AUTH_USER = 'user:authUser';
export const DELETE_USER = 'user:deleteUser';
export const INVALIDATE_USER = 'user:invalidateUser';
export const REQUEST_USER = 'user:requestUser';
export const SHOW_ERROR = 'user:showError';
export const UPDATE_USER = 'user:updateUser';

export function addUser(newUser) {
    return {
        type: ADD_USER,
        payload: {
            user: newUser
        },
    }
};

export function authUser(newUser) {
    return {
        type: AUTH_USER,
        payload: {
            user: newUser
        },
    }
};

export function updateUser(newUser) {
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        },
    }
};

export function deleteUser(User) {
    return {
        type: DELETE_USER,
        payload: {
            user: User
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            user: 'ERROR!!',
            error: [error]
        }
    }
};

export function apiRequest(){    
    return dispatch => {
        axios.get(`https://jsonplaceholder.typicode.com/users/1`)
            .then(res => {
                const person = res.data;
                console.log('SUCCESS');
                dispatch(updateUser(person.name));
            })
            .catch(error => {
                console.log('error!');
                dispatch(showError('error'));
            })
            // .then(function () {
            //     dispatch(requestUser());
            //     console.log('Axios acction');
            // });
    }
};

export function invalidateUser(user) {
    return {
        type: INVALIDATE_USER,
        user
    }
};

export function requestUser(user) {
    return {
        type: REQUEST_USER,
        user
    }
};