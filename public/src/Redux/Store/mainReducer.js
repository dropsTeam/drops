import ActionType from '../Actions/ActionType';
// import update from 'immutability-helper';

const init = {
    isAuthorised: false,

    user: {
        gId: '',
        fullName: '',
        email: '',
        profilePic: ''
    },
    view: {
        loading: false
    },
    cartItems: [
        // {
        //     productId: '',
        //     quantity: 1,
        //     varient: '',
        //     dropdown: ''
        // }
    ]
}

export default function mainReducer(state = init, action) {

    switch (action.type) {


        // ************* AUTH ACTIONS **********

        case ActionType.LOGIN:
            {
                let newState = { ...state, isAuthorised: true, user: { ...action.payload } }
                return newState;
            }

        case ActionType.LOGOUT:
            {
                let nState = { ...state, isAuthorised: false, user: {} };
                return nState;
            }




        //  *********** VIEW ACTIONS **********

        case ActionType.LOADING:
            return { ...state, view: { ...state.view, loading: action.payload } }




        // **********  CART ACTIONS  **********

        case ActionType.ADD_TO_CART:
            {
                if (this.state.cartItems.length >= 10) { alert('Your Cart is full, (10 items)'); return }
                const nwState = { ...state, ...state.cartItems };
                nwState.cartItems.push(action.payload.item);
                return nwState;
            }

        case ActionType.EDIT_CART:
            {
                const newState = { ...state, ...state.cartItems };
                newState.cartItems[action.payload.index] = action.payload.item;
                return newState
            }

        case ActionType.DELETE_CART_ITEM:
            {
                const newState = { ...state, ...state.cartItems };
                newState.cartItems.splice(action.payload.index, 1);
                return newState;
            }

        default:
            return state;
    }
}

