import React from "react";
import "../App.css";

const Sale = () => {
  return (
    <div className="container-fluid sale mt-5 p-3">
      <div className="row d-flex align-items-center justify-content-center text-center">
        <div className="col-md-4 col-10 mb-3 mb-md-0 d-flex justify-content-center">
          <img
            src="./src/images/image 12.png"
            alt=""
            className="img-fluid sale-img"
          />
        </div>
        <div className="col-md-4 col-10">
          <h1 className="fw-bold bg-light d-inline-block px-3 py-2 extra-large">
            PAYDAY
          </h1>
          <h1 className="fw-bold extra-large">SALE-NOW</h1>
          <br />
          <p className="fs-5 fw-bold">
            Spend minimal $100 get 30% off <br />
            voucher code for your next purchase
          </p>
          <h3 className="fw-bold">1 June to 10 June 2025</h3>
          <h5 className="fw-bold">*Terms & Conditions Apply</h5>
          <button type="button" className="btn btn-dark p-3">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sale;
