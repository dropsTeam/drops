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
        phoneNumber: 0,
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

        case ActionType.EDIT_PROFILE: {
            const newState = {
                ...state,
                user: {
                    ...state.user,
                    phoneNumber: action.payload.phoneNumber,
                    userAddress: {
                        ...state.user.userAddress,
                        city: action.payload.city,
                        state: action.payload.state,
                        zipCode: action.payload.zipCode,
                        landmark: action.payload.landmark,
                        address: action.payload.address
                    }
                }
            }
            return newState;
        }

        case ActionType.EDIT_SELLER_ACCOUNT: {
            const newState = {
                ...state,
                user: {
                    ...state.user,
                    seller: {
                        ...state.user.seller,
                        name: action.payload.name,
                        bio: action.payload.bio,
                        profileImg: action.payload.profileImg
                    }
                }
            };

            return newState;
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
            return nwState;
        }

        case ActionType.EDIT_CART: {
            const cart = [...state.cartItems];

            let index = action.payload.index;

            if (state.isAuthorised) {
                index = cart.findIndex(item => {
                    return item._id === action.payload.index;
                });
            }

            cart[index].quantity = action.payload.quantity;

            const newState = { ...state, cartItems: [...cart] };
            return newState
        }

        case ActionType.DELETE_CART_ITEM: {

            let index = 0;

            if (state.isAuthorised) {
                index = action.payload.index;
            } else {
                index = state.cartItems.findIndex(item => {
                    return item._id === action.payload.index;
                });
            }

            const cart = [...state.cartItems];
            cart.splice(index, 1);
            const newState = { ...state, cartItems: [...cart] };
            return newState;
        }

        case ActionType.LOAD_CART: {
            const cart = [...action.payload.cart]
            const newState = { ...state, cartItems: cart };
            return newState;
        }

        case ActionType.CLEAR_CART: {
            return { ...state, cartItems: [] }
        }


        default:
            return state;
    }
}

