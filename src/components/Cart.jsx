import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../actions/actions';
import "./cart.css";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    return (
        <div className="cart-container pad-10">
            <h2 className='cart-headline'>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p className="bold mt-5">Your cart is empty Please Add Something In Card.</p>
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
                            <h4 className='bold'>Ttile</h4>    
                        </div>
                        <div className="quantity">
                            <h4 className='bold'>Quantity</h4>
                        </div>
                        <div className="total-price">
                            <h4 className='bold'>Total</h4>
                        </div>
                        <div className="buttons">
                            <h4 className='bold'>Remove</h4>
                        </div>
                    </div>
                    {cart.map((item, idx) => (
                        <div className="item">
                            <div className='text-center'>
                                <h3>{idx + 1}.</h3>
                            </div>
                            <div className="image text-center justify-center">
                                <img src={item.productImage} alt={item.productImage} className='img-fluid' />
                            </div>
                            <div className="description text-center">
                                <h4>{item.productName}</h4>
                            </div>
                            <div className="quantity text-center">
                                <h4>{item.quantity}</h4>
                            </div>
                            <div className="total-price text-center">₹{item.productPrice.toFixed(2)}</div>
                            <div className="buttons">
                                <button className="delete-btn butt" onClick={() => handleRemoveFromCart(idx)}>X</button>
                            </div>
                        </div>
                    ))}


                    <p className="cart-total">Total: ₹{cart.reduce((total, item) => total + item.productPrice, 0).toFixed(2)}</p>
                </div>
            )}
        </div>
    );
};

export default Cart;
