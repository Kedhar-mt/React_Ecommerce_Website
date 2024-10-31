import React from 'react';
import '../App.css';

const Hero = () => {
  return (
    <div className="container hero mt-3 p-3 rounded">
      <div className="row d-flex align-items-center justify-content-center text-center">
        <div className="col-md-5 col-12 d-flex flex-column align-items-end mb-3 mb-md-0">
          <h1 className='fw-bold bg-light d-inline-block px-3 py-2 mb-2 extra-large'>LET'S</h1>
          <h1 className='fw-bold mb-2 extra-large'>EXPLORE</h1>
          <h1 className='fw-bold unique d-inline-block px-3 py-2 mb-2 extra-large'>UNIQUE</h1>
          <h1 className='fw-bold mb-3 extra-large'>CLOTHES.</h1>
          <p>Live for influential and innovative fashion!</p>
          <button type="button" className="btn btn-dark">Shop Now</button>
        </div>
        <div className="col-md-5 col-12 d-flex justify-content-start">
          <img src="./src/images/heroimg.png" alt="hero image" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
