import ActionType from './ActionType';
import { mainHttp } from '../../Axios/Axios';


function login(user) {
    return { type: ActionType.LOGIN, payload: user }
}

function setUser() {
    return async dispatch => {
        try {

            const user = await mainHttp.get('/user');
            console.log(user.data.userAddress.address)
           
            return dispatch(login(user.data));
        

        } catch (err) {
            console.log('Error Occured Setting the user');
            return;
        }

    }
}

function logout() {
    return dispatch => {
        mainHttp
            .post('/auth/logout', {}, { withCredentials: true })
            .then(_ => {
                dispatch({ type: ActionType.LOGOUT, payload: {} })
            })
            .catch(err => {
                alert('Error Occured Loging out');
            });
    }
}


export { login, logout, setUser }
