import React from 'react'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";


function footer() {
  return (
    <div className="footer">
      <Navbar className="foot ">
        <Container className='d-flex justify-content-center'>
          <Navbar.Brand className="text-white fs-5 w-50 ">
            All rights reserved © Nikhil
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default footer