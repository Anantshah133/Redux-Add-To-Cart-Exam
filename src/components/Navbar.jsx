import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
                        <li><Link to="/cart" className='bold'>Cart</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar