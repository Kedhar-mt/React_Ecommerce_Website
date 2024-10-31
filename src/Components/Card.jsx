import React, { useContext } from 'react';
import '../App.css';
import { ShopContext } from '../context/shop-context';

const Card = ({ image, title, price, id }) => {
  const { addToCart, cartItems } = useContext(ShopContext);

const cartItemAmount = cartItems[id] || 0;
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img 
        src={image} 
        style={{ 
          width: '100%', 
          height: '400px', 
          objectFit: 'cover', 
          objectPosition: 'top',
          borderRadius: '10px' 
        }} 
        alt={title} 
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="fw-light">{price}</h6>
        <button 
          className='btn btn-primary' 
          onClick={() => addToCart(id)} // Make sure the correct ID is passed
        >
          Add to Cart {cartItemAmount>0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};

export default Card;
