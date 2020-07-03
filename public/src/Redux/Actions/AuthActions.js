import {ADD_TOKEN, LOGOUT} from './ActionType';

function addToken(token) {
    return { type: ADD_TOKEN, payload: {token}}
}

function logout() {
    return { type: LOGOUT, payload: {} }
}


export {addToken, logout}
