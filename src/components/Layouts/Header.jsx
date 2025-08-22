import React, { useState } from "react";
import "../../styles/HeaderStyle.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";


function Header() {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  // Scroll to section after ensuring we're on Home page
  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true }); // go to home first
      setTimeout(() => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100); // wait a bit for home to render
    } else {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav === true ? "sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand
            onClick={() => scrollToSection("top")}
            className="logo"
            style={{ cursor: "pointer" }}
          >
            <img src={Logo} alt="Logo" className="img-fluid" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={scrollToTop}>Home</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("about")}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/menu">
                Our Menu
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection("shop")}>Shop</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("blog")}>Blog</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("contact")}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;