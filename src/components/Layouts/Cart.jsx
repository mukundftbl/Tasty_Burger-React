import React, { useContext } from "react";
import CartContext from "./CartContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, increaseItem, decreaseItem } = useContext(CartContext);
  const navigate = useNavigate(); 

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="container mt-5 cart-container">
      <button
        className="custom-back-btn mb-4"
        onClick={() => navigate("/menu")}
      >
        ← Back to Menu
      </button>

      <h2>My Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table table-striped align-middle">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Actions</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.image} alt={item.title} width="80" />
                    </td>
                    <td>{item.title}</td>
                    <td>₹{item.price.toFixed(2)}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-success me-2"
                        onClick={() => increaseItem(item.id)}
                      >
                        +
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => decreaseItem(item.id)}
                      >
                        −
                      </button>
                    </td>
                    <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h4 className="mt-4">Total: ₹{getTotalPrice()}</h4>

          <Link to="/Payement">
            <button className="custom-pay-btn">
              <i className="bi bi-credit-card-2-front me-2"></i> Pay ₹
              {getTotalPrice()}
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
