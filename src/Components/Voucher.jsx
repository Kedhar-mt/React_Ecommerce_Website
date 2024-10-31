import React from 'react'
import "../App.css"
const Voucher = () => {
  return (
    <div className="container-fluid mt-3 p-3 app-download-section">
  <div className="row d-flex align-items-center justify-content-center text-center">
    <div className="col-md-4">
      <h1 className="fw-bold bg-light d-inline-block px-3 py-2">
        DOWNLOAD APP & <br /> GET THE VOUCHER!
      </h1>
      <p className="fs-5 fw-bold">
        Get 30% off for the first transaction using <br />
        randivison mobile app for now
      </p>
      <img src="./src/images/Frame 37.png" alt="" className="img-fluid smaller-img" />
    </div>
    <div className="col-md-3">
      <img
        src="./src/images/Mobile app.png"
        alt=""
        className="img-fluid smaller-img"
      />
    </div>
  </div>
</div>

  )
}

export default Voucher
