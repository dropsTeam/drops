import ActionType from '../Actions/ActionType';

// import update from 'immutability-helper';

const init = {
    isAuthorised: false,

    user: {
        gId: '',
        fullName: '',
        email: '',
        profilePic: '',
        isSeller: false,
        seller: {
            bio: '',
            name: '',
            profileImg: ''
        },
        userAddress: {
            city: '',
            state: '',
            zipCode: '',
            landmark: '',
            address: ''
        },

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
                let newState = {
                    ...state,
                    isAuthorised: true,
                    user: { ...action.payload }
                }
                return newState;
            }

        case ActionType.LOGOUT:
            {
                let nState = { ...state, isAuthorised: false, user: {} };
                return nState;
            }
        case ActionType.SET_SELLER:
            {
                let nState = {
                    ...state,
                    user: {
                        ...state.user,
                        isSeller: action.payload.isSeller,
                        seller: {
                            ...state.user.seller,
                            bio: action.payload.seller.bio,
                            name: action.payload.seller.name,
                            profileImg: action.payload.seller.profileImg
                        }
                    }
                }
                return nState;
            }



        //  *********** VIEW ACTIONS **********

        case ActionType.LOADING:
            return { ...state, view: { ...state.view, loading: action.payload } }




        // **********  CART ACTIONS  **********

        case ActionType.ADD_TO_CART: {

            if (state.cartItems.length >= 10) { alert('Your Cart is full, (10 items)'); return }
            const cart = [...state.cartItems];
            cart.unshift(action.payload.item);
            const nwState = { ...state, cartItems: cart };
            alert('Added to cart');
            return nwState;
        }

        case ActionType.EDIT_CART: {
            const cart = [...state.cartItems];
            cart[action.payload.index] = action.payload.item;

            const newState = { ...state, cartItems: cart };
            return newState
        }

        case ActionType.DELETE_CART_ITEM: {

            const cart = [...state.cartItems];
            cart.splice(action.payload.index, 1);
            const newState = { ...state };
            return newState;
        }

        case ActionType.LOAD_CART: {
            const cart = [...action.payload.cart]
            const newState = { ...state, cartItems: cart };
            return newState
        }


        default:
            return state;
    }
}

