import React from 'react';
import Card from './Card'; // Ensure proper casing for import
import { PRODUCTS } from '../products'; // Import the products array

const Men = () => {
  // Filter products for men
  const menProducts = PRODUCTS.filter(product => product.category === 'men');

  return (
    <div className='container p-3'>
      <div className="row d-flex justify-content-center">
        <h1 className='fw-bold p-5'>MEN'S COLLECTION</h1>
        {menProducts.map((product) => (
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

export default Men;
