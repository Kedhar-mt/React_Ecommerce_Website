import React from 'react';
import '../App.css';
import Card from './Card'; // Ensure proper casing for import
import { PRODUCTS } from '../products'; // Import the products array

const Arrivals = () => {
  const newArrivals = PRODUCTS.slice(6,9); // Assuming new arrivals are at index 6

  return (
    <div className='container p-3'>
      <div className="row d-flex justify-content-center">
        <h1 className='fw-bold p-5'>NEW ARRIVALS</h1>
        {newArrivals.map((card) => (
          <div key={card.id} className="col-md-4 d-flex justify-content-center mb-3">
            <Card 
              image={card.productImage} 
              title={card.productName} 
              price={`$${card.price.toFixed(2)}`} 
              id={card.id} // Pass the product ID for the Add to Cart action
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Arrivals;
