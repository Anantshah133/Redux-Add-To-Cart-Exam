import { REMOVE_FROM_CART, SET_PRODUCTS, UPDATE_CART_QUANTITY } from './actionTypes';
import { ADD_TO_CART } from './actionTypes';

export const setProducts = (products) => ({
    type: SET_PRODUCTS,
    payload: products,
});

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});

export const updateCartQuantity = (productId, quantity) => ({
    type: UPDATE_CART_QUANTITY,
    payload: { productId, quantity },
});

export const removeFromCart = (productId) => {
    return {
        type: REMOVE_FROM_CART,
        payload: productId,
    };
};