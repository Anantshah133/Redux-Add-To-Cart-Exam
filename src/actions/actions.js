import { SET_PRODUCTS, ADD_TO_CART, UPDATE_CART_QUANTITY, REMOVE_FROM_CART } from './actionTypes';

export const setProducts = (products) => ({
    type: SET_PRODUCTS,
    payload: products,
});

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});

export const updateCartQuantity = (productName, quantity) => ({
    type: UPDATE_CART_QUANTITY,
    payload: { productName, quantity },
});

export const removeFromCart = (productName) => ({
    type: REMOVE_FROM_CART,
    payload: productName,
});