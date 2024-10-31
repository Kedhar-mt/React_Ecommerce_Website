import React from "react";
import "../App.css";
const Promo = () => {
  return (
    <div className="container-fluid Promo mt-3 p-5 d-flex justify-content-center align-items-center text-center">
      <div className="row">
        <div className="col-md-10 text-light">
          <h2 className="fw-bold">
            JOIN THE SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO
          </h2>
          <p>Type your email down below and be young wild generation</p>
          <div className="input-group mb-3">
            <input
              className="form-control fw-light"
              type="text"
              value="Add your email here"
              aria-label="email input"
              readOnly
            />
            <button type="button" className="btn btn-dark ms-2">
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
