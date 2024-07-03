import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from '../data/index';
import { NavLink } from "react-router-dom";

export const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <Navbar expand="lg" className={`${changeColor ? "color-active" : ""} ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold">SiPalingNgoding</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMobileMenu} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`mx-auto text-center ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink to={link.path} className={({ isActive, isPending }) =>
                      (isPending ? "pending" : isActive ? "active" : "" )} end>{link.text}</NavLink>
                  </div>
                );
              })}
            </Nav>

            <div className="text-center">
              <button className="btn btn-outline-danger rounded-1">Join With Us</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
