import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../actions/actionTypes';

const initialState = [];

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const existingProductIndex = state.findIndex(item => item.productId === action.payload.productId);
            if (existingProductIndex !== -1) {
                const updatedState = [...state];
                updatedState[existingProductIndex].quantity += 1;
                return updatedState;
            } else {
                return [...state, { ...action.payload, quantity: 1 }];
            }
        case UPDATE_CART_QUANTITY:
            return state.map(item =>
                item.productId === action.payload.productId
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );
        case REMOVE_FROM_CART:
            return state.filter((item, idx) => idx !== action.payload);
        default:
            return state;
    }
};

export default cartReducer;
