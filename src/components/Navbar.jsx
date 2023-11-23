import React from 'react'
import { Link } from 'react-router-dom';
import "../App.css";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cart = useSelector((state)=>(state.cart));
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <Link to="/"><img src="https://i.ibb.co/kDVwgwp/logo.png" alt="RedStore" width="125px" /></Link>
                </div>
                <nav>
                    <ul id="MenuItems">
                        <li><Link to="/" className='bold'>Home</Link></li>
                        <li><Link to="/products" className='bold'>Products</Link></li>
                        <li><Link to="/cart" className='bold'><i class="ri-shopping-cart-2-fill"></i></Link> <span className='cart-items'>{cart.length}</span></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar