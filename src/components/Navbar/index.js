import React from 'react';
import Nav from 'react-bootstrap/Nav'

const Navbar = () => (
  <Nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto my-2 my-lg-0">
          <Nav.Item className='nav-item' as="li">
            <a className="nav-link js-scroll-trigger" href="#about">About</a>
          </Nav.Item>
          <Nav.Item className='nav-item' as="li">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </Nav.Item>
          <Nav.Item className='nav-item' as="li">
            <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
          </Nav.Item>
        </ul>
      </div>
    </div>
  </Nav>
)

export default Navbar;
