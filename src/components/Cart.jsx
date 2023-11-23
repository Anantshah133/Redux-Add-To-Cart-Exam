import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../actions/actions';
import "./cart.css";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (productName) => {
        dispatch(removeFromCart(productName));
    };

    const calculateSubtotal = (item) => {
        return item.productPrice * item.quantity;
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + calculateSubtotal(item), 0);
    };

    return (
        <div className="cart-container pad-10">
            <h2 className='cart-headline'>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p className="bold mt-5 fs-40">Your cart is empty Please Add Something In Card.</p>
            ) : (
                <div className='mt-5'>
                    <div className="item">
                        <div>
                            <h4 className='bold'>Number</h4>
                        </div>
                        <div className="image">
                            <h4 className='bold'>Product Image</h4>
                        </div>
                        <div className="description">
                            <h4 className='bold'>Title</h4>
                        </div>
                        <div className="quantity">
                            <h4 className='bold'>Quantity</h4>
                        </div>
                        <div className="subtotal">
                            <h4 className='bold'>Subtotal</h4>
                        </div>
                        <div className="buttons">
                            <h4 className='bold'>Remove</h4>
                        </div>
                    </div>
                    {cart.map((item, idx) => (
                        <div className="item" key={idx}>
                            <div className='text-center'>
                                <h3>{idx + 1}.</h3>
                            </div>
                            <div className="image text-center justify-center">
                                <img src={item.productImage} alt={item.productName} className='img-fluid' />
                            </div>
                            <div className="description text-center">
                                <h4>{item.productName}</h4>
                            </div>
                            <div className="quantity text-center">
                                <h4>{item.quantity}</h4>
                            </div>
                            <div className="subtotal text-center">₹{calculateSubtotal(item).toFixed(2)}</div>
                            <div className="buttons">
                                <button className="delete-btn butt" onClick={() => handleRemoveFromCart(item.productName)}>X</button>
                            </div>
                        </div>
                    ))}
                    <p className="cart-total mt-5 bold fs-40">Total: ₹{calculateTotal().toFixed(2)}</p>
                </div>
            )}
        </div>
    );
};

export default Cart;
