import ActionType from './ActionType';
import { mainHttp } from '../../Axios/Axios';

function addToCart(item, isAuthorised) {

    return async dispatch => {


        if (!isAuthorised) {
            if (!!!localStorage.getItem('cart')) localStorage.setItem('cart', JSON.stringify([]));
            let cart = JSON.parse(localStorage.getItem('cart'));
            cart.push(item);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        else {
            try {

                await mainHttp.post('/user/cart', { ...item });
                dispatch({ type: ActionType.ADD_TO_CART, payload: { item } })

            } catch (err) {
                alert('Error Occured posting your cart');
            }
        }

        dispatch({ type: ActionType.ADD_TO_CART, payload: { item } })


    }
}

function editCart(quantity, productId, index = 0, isAuthorised) {
    return dispatch => {

        if (quantity <= 0) return;
        if (!isAuthorised) {

            if (!!!localStorage.getItem('cart')) {
                localStorage.setItem('cart', JSON.stringify([]));
                alert('product doesnot exist. ');
                return;
            }

            let cart = JSON.parse(localStorage.getItem('cart'));

            cart[index].quantity = quantity;

            localStorage.setItem('cart', JSON.stringify(cart));
        }
        else {

        }
        dispatch({ type: ActionType.EDIT_CART, payload: { productId, quantity, index } });

    }

}

function deleteCartItem(index, isAuthorised) {
    return dispatch => {
        if (!isAuthorised) {

            let cart = JSON.parse(localStorage.getItem('cart'));
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        else {
            // POST REQUEST
        }
        dispatch({ type: ActionType.EDIT_CART, payload: { index } });
    }

}



function loadCart(isAuthorised) {
    return dispatch => {
        if (!isAuthorised) {
            if (!!!localStorage.getItem('cart')) {
                localStorage.setItem('cart', JSON.stringify([]));
            }
            const cart = JSON.parse(localStorage.getItem('cart'));
            dispatch({ type: ActionType.LOAD_CART, payload: { cart } })
        } else {
            // Fetch
            dispatch({ type: ActionType.LOAD_CART, payload: { cart: [] } })

        }
    }
}


function clearCart() {

    return dispatch => {
        localStorage.clear();
        dispatch({ type: ActionType.CLEAR_CART, playload: [] });
    }
}

export { addToCart, editCart, deleteCartItem, loadCart, clearCart }

