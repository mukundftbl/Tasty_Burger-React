import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Burger from "../../assets/hero/hero-2.png"
import { Link } from "react-router-dom";
function Section1(){
  return (
    <section className="hero_section">
      
      <Container>
        <Row>
          <Col lg={7} /*divide*/ className="mb-5 mb-lg-0">
            {" "}
            {/*mb-5-> margin 5 and lg-0 -> mean not go outside of screen*/}
            <div className="position-relative">
              <img src={Burger} className="img-fluid" alt="Hero" />
              <div className="price_badge">
                <div className="badge_text">
                  <h4 className="h4_xs">Only</h4>
                  <h4 className="h3_lg">$6.99</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="txt-white">New Burger</h1>
              <h2 className="txt-white">With Onion</h2>
              <p className="text-white pt-2 pb-4">
                {/*pt-> padding top,pb->padding bottom*/}
                <p>
                  "True comfort starts with gentle guidance. As growth
                  increases, joyful living thrives with strong support and great
                  value. Above all, steady rhythm brings ease."
                </p>
              </p>
              <Link to="/menu" className="btn order_now">
                Order Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Section1;