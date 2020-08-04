import ActionType from './ActionType';
import { mainHttp } from '../../Axios/Axios';


function login(user) {
    return { type: ActionType.LOGIN, payload: user }
}

function setUser() {
    return async dispatch => {
        try {

            const user = await mainHttp.get('/user');

            return dispatch(login(user.data));

        } catch (err) {
            console.log('Error Occured Setting the user');
            return;
        }
    }
}

function editAddress(address) {
    return async dispatch => {
        try {

            await mainHttp.put('/user', address);
            dispatch({ type: ActionType.EDIT_ADDRESS, payload: address })

        } catch (err) {
            console.log(err);
            alert('Error Occured editing the user.')
        }
    }
}

function setSeller(sellerinfo) {
    return dispatch => {
        dispatch({ type: ActionType.SET_SELLER, payload: sellerinfo });
    }
}


function logout() {
    return async dispatch => {
        try {
            await mainHttp.post('/auth/logout', {}, { withCredentials: true })
            dispatch({ type: ActionType.LOGOUT, paylaod: {} });
        } catch (err) {
            console.log(err);
            alert('Error occured loging out');
        }

    }
}


export { login, logout, setUser, setSeller, editAddress }
