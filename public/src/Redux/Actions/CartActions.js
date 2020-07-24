import ActionType from './ActionType';

function addToCart(item, isAuthorised) {

    return dispatch => {
        if (!isAuthorised) {
            if (!!!localStorage.getItem('cart')) localStorage.setItem('cart', JSON.stringify([]));
            let cart = JSON.parse(localStorage.getItem('cart'));
            cart.push(item);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        else {
            // POST REQUEST
        }
        dispatch({ type: ActionType.ADD_TO_CART, payload: { item } })
    }
}

function editCart(item, index, isAuthorised) {
    return dispatch => {
        if (!isAuthorised) {

            if (!!!localStorage.getItem('cart')) localStorage.setItem('cart', JSON.stringify([]));

            let cart = JSON.parse(localStorage.getItem('cart'));
            cart[index] = item;
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        else {
            // POST REQUEST
        }
        dispatch({ type: ActionType.EDIT_CART, payload: { item, index } });

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

export { addToCart, editCart, deleteCartItem }
