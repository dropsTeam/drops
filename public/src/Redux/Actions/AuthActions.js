import ActionType from './ActionType';
import { mainHttp } from '../../Axios/Axios';


function login(user) {
    return { type: ActionType.LOGIN, payload: user }
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


export { login, logout }
