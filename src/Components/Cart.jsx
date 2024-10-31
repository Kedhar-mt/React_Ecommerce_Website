import React, { useContext } from 'react';
import { PRODUCTS } from '../products';
import { ShopContext } from '../context/shop-context';
import Cartitem from './cartitem';
import  './cart.css';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems,getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((Product) => {
          if (cartItems[Product.id] !== 0) {
            return <Cartitem key={Product.id} data={Product} />; // Changed 'product' to 'Product'
          }
          return null; // Avoid rendering anything if no items
        })}
      </div>
      {totalAmount >0 ?(
      <div className='checkout'>
        
        <p> Subtotal: ${totalAmount}</p>
        <button onClick={()=> navigate('/')}> Continue Shopping</button>
        <button> Checkout</button>
      </div>
      ):(
        <h1>Your Cart is Empty!</h1>
      )}
    </div>
  );
}

export default Cart;
