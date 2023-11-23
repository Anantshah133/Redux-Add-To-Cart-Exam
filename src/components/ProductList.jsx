import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/actions';

const ProductCard = ({ productName, productImage, productRating, productPrice, onAddToCart }) => {
    return (
        <div className='col-4'>
            <div className="product-card">
                <img src={productImage} alt={productName} className="product-image" />
                <div className="product-details">
                    <h4 className="product-name">{productName}</h4>
                    <div className="rating">
                        {productRating.map((star, index) => (
                            <i key={index} className={star ? "fas fa-star" : "far fa-star"} />
                        ))}
                    </div>
                </div>
                <div className="product-footer">
                    <p className="product-price">₹{productPrice.toFixed(2)}</p>
                    <button className="btn-cart add-to-cart-btn" onClick={onAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

const ProductList = () => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    return (
        <div className="row">
            {products.map((product, index) => (
                <ProductCard key={index} {...product} onAddToCart={() => handleAddToCart(product)} />
            ))}
        </div>
    )
}

export default ProductList