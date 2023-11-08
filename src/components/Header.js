import React from 'react'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import'../App.css'
function header() {
  return (
    <div className="mainNav">
      <Navbar className="header">
        <Container>
          <Navbar.Brand href="/" className="text-white navHeading">
            <img
              alt=""
              src="https://i.postimg.cc/Vkv25BLq/pngtree-restaurant-logo-template-design-restaurant-logo-with-modern-frame-isolated-png-image-887423.png"
              width="30"
              height="30"
              className="logo"
            />{" "}
            Restor
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default header