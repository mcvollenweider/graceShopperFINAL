import React from "react";
import {Row, Col, Button, Offcanvas} from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";

export function Cart({show, setShow}) {

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      <Row
        style={{ color: "white", fontSize: "1.5em" }}
        onClick={handleShow}
        className="h-100 justify-content-center align-items-center text-center hover-cart"
      >
        <Col border="primary" md={12}>
          
          <FaCartPlus />
          <span style={{ fontSize: "70%", marginRight: "50px" }}> Cart</span>
        </Col>
      </Row>
      {/*This is the cart modal and only shows when the cart button is clicked*/}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header
          className="pt-1"
          style={{ border: "solid 1px grey" }}
          closeButton
        >
          <Offcanvas.Title>My Cart </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="pt-1" style={{ border: "solid 1px grey" }}>
          {/* Cart items here*/}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

// export default Cart;
