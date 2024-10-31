import React, { useContext } from 'react';
import { ShopContext } from '../context/shop-context';
import '../App.css'

const Cartitem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className='cartItem'>
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className='countHandler'>
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            type="number"
            value={cartItems[id]} // This shows the number of items in the cart
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            className="no-arrows" // Add a class for styling
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
