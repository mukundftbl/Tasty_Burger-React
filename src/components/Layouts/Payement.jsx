// src/pages/PaymentSuccess.jsx
import React from "react";
import { Link } from "react-router-dom";


const Payment = () => {
  return (
    <div className="payment-success-container">
      <div className="payment-box">
        <div className="success-icon">✅</div>
        <h1>Payment Successful!</h1>
        <p>
          Thank you for your order. Your payment has been processed
          successfully.
        </p>
        <Link to="/">
          <button className="home-button">Go to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
