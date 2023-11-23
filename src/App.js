import { useDispatch } from 'react-redux';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { productData } from "./data";
import { useEffect } from 'react';
import { setProducts } from './actions/actions';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(productData));
  }, [dispatch])


  return (
    <Router>
      <div className='container'>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={
          <div className="small-container">
            <div className="row row-2">
              <h2>All Products</h2>
              <select>
                <option value>Default Shorting</option>
                <option value>Short by price</option>
                <option value>Short by popularity</option>
                <option value>Short by rating</option>
                <option value>Short by sale</option>
              </select>
            </div>
            <ProductList />
          </div>
        } />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;