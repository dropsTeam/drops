import ActionType from './ActionType';

function login(user) {
    return { type: ActionType.LOGIN, payload: user }
}

function logout() {
    return { type: ActionType.LOGOUT, payload: {} }
}


export { login, logout }
