import React, { useContext } from "react";
import { Col, Card } from "react-bootstrap";
import CartContext from "./CartContext";

function Cards({
  id,
  image,
  title,
  paragraph,
  price,
  renderRatingIcons,
  rating,
}) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const item = { id, image, title, price }; // ✅ ID is critical here
    addToCart(item);
  };

  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      <Card className="overflow-hidden">
        <div className="overflow-hidden">
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <div className="item_rating">{renderRatingIcons(rating)}</div>
            <div className="wishlist">
              <i className="bi bi-heart"></i>
            </div>
          </div>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>
          <div className="d-flex align-items-center justify-content-between">
            <div className="menu_price">
              <h5 className="mb-0">₹{price}</h5>
            </div>
            <div className="add_to_card">
              <button
                onClick={handleAddToCart}
                className="btn btn-warning btn-sm"
              >
                <i className="bi bi-bag-heart me-2"></i> Add to Cart
              </button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cards;
