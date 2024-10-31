import React from 'react';
import '../App.css';

const Footer = () => {
  const companyLinks = ['About', 'Contact Us', 'Support', 'Careers'];
  const quickLinks = ['Share Location', 'Order Tracking', 'Size Guide', 'FAQs'];
  const legalLinks = ['Terms & Conditions', 'Privacy Policy'];

  return (
    <footer className='container-fluid footer p-5'>
      <main>
      <div className="row text-light">
        <div className="col-md-6">
          <h1>K-FASHION</h1>
          <p className='fw-light'>Complete your clothes with awesome style from us</p>
          <img src="./src/images/Frame 18.png" alt="icons" className='img-fluid w-50' /> {/* Adjust width as needed */}
        </div>

        <div className="col-md-2">
          <h5>Company</h5>
          <ul>
            {companyLinks.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>

        <div className="col-md-2">
          <h5>Quick Links</h5>
          <ul>
            {quickLinks.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>

        <div className="col-md-2">
          <h5>Legal</h5>
          <ul>
            {legalLinks.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
      </div>
      </main>
    </footer>
  );
}

export default Footer;
