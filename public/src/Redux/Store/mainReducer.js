import ActionType from '../Actions/ActionType';
import update from 'immutability-helper';

const init = {
    isAuthorised: false,

    user: {
        gId: '',
        fullName: '',
        email: '',
        profilePic: ''
    }
}

export default function mainReducer(state = init, action) {

    switch (action.type) {
        
        case ActionType.LOGIN:
            const newState = { ...state, isAuthorised: true, user: { ...action.payload } }
            return newState;

        case ActionType.LOGOUT:
            let nState = { ...state, isAuthorised: false, user: {} };
            return nState;
            

        default:
            return state;
    }
}

