import React from 'react';
import Card from './Card.jsx'; // Ensure proper casing for import
import { PRODUCTS } from '../products'; // Import the products array

const Kids = () => {
  // Filter products for kids
  const kidsProducts = PRODUCTS.filter(product => product.category === 'kids');

  return (
    <div className='container p-3'>
      <div className="row d-flex justify-content-center">
        <h1 className='fw-bold p-5'>KIDS' COLLECTION</h1>
        {kidsProducts.map((product) => (
          <div key={product.id} className="col-md-4 d-flex justify-content-center mb-3">
            <Card 
              image={product.productImage} 
              title={product.productName} 
              price={`$${product.price.toFixed(2)}`} // Format price
              id={product.id} // Pass the product ID for the Add to Cart action
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Kids;
