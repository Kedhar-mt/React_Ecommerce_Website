import React from "react";
import '../App.css';

const Brands = () => {
  const brandImages = [
    "/images/Rectangle 36.png",
    "/images/Rectangle 44.png",
    "/images/Rectangle 38.png",
    "/images/Rectangle 45.png",
    "/images/Rectangle 43.png",
    "/images/Rectangle 41.png",
  ];

  return (
    <div className="container-fluid m-3 p-3 brands">
      <div className="row">
        {brandImages.map((image, index) => (
          <div key={index} className="col-md-2 d-flex justify-content-center mb-3">
            <img src={image} alt={`Brand ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
