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

function editCart(quantity, productId, index, isAuthorised) {

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


function deleteCartItem(  index, isAuthorised) {
    return async dispatch => {
        if (!isAuthorised) {

            let cart = JSON.parse(localStorage.getItem('cart'));
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            dispatch({ type: ActionType.DELETE_CART_ITEM, payload: { index } });
        }
        else {
            try {
                await mainHttp.delete('/user/cart', { cartId: index });
                dispatch({ type: ActionType.DELETE_CART_ITEM, payload: { index } });
               } catch (err) {
                console.log(err);
                alert('Error Occured deleting the cart')
            }
        }
    }

}



function loadCart(isAuthorised) {

    return async dispatch => {

        if (!isAuthorised) {

            if (!!!localStorage.getItem('cart')) {
                localStorage.setItem('cart', JSON.stringify([]));
            }
            const cart = JSON.parse(localStorage.getItem('cart'));

            dispatch({ type: ActionType.LOAD_CART, payload: { cart: [...cart] } })

        } else {

            try {

                if (!!!localStorage.getItem('cart')) return;

                let cart = JSON.parse(localStorage.getItem('cart'));

                let promis = [];

                for (let cartItem of cart) {
                    promis.push(mainHttp.post('/user/cart', cartItem));
                }

                await Promise.all(promis);

                const fetchCart = await mainHttp.get('/user/cart');

                clearCart();


                dispatch({ type: ActionType.LOAD_CART, payload: { cart: [...fetchCart.data] } })

            } catch (err) {
                alert('Error Occured loading the cart in actions');
                console.log(err);
            }

        }
    }
}


function clearCart() {

    return async dispatch => {
        try {

            await mainHttp.delete('/user/cart', { cartId: -1 });
            localStorage.clear();
            dispatch({ type: ActionType.CLEAR_CART, playload: [] });

        } catch (err) {
            console.log(err);
            alert('Error Occured clearing the cart')
        }
    }
}

export { addToCart, editCart, deleteCartItem, loadCart, clearCart }

