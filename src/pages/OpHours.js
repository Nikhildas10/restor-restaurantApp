import React from 'react'
import { useState } from "react";
import { ListGroup } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function OpHours({opData}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
      <Button className="opBtn" variant="primary" onClick={handleShow}>
        Operating Hours{" "}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours 🕥</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <li>Monday- {opData.Monday}</li>
          <li>Tuesday- {opData.Tuesday}</li>
          <li>Wednesday- {opData.Wednesday}</li>
          <li>Thursday- {opData.Thursday}</li>
          <li>Friday- {opData.Friday}</li>
          <li>Saturday- {opData.Saturday}</li>
          <li>Sunday- {opData.Sunday}</li>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary w-100 " onClick={handleClose}>
            close{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default OpHours