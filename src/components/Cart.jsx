import React, { useState, useEffect } from "react";
import { Row, Col, Button, Offcanvas, Nav, Modal, Form } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import { completePurchase } from "../api";

function Cart({
  cartShow,
  paymentShow,
  setCartShow,
  setPaymentShow,
  cart,
  totalPrice,
  setTotalPrice,
}) {
  const handleOffCanvClose = () => setCartShow(false);
  const handleOffCanvShow = () => setCartShow(true);
  const handlePaymentClose = () => setPaymentShow(false);
  const handlePaymentShow = () => setPaymentShow(true);

  function completePurchaseHelper() {
    handleOffCanvClose();
    handlePaymentClose();
    completePurchase({ completed: "asdasdasd", id: 5, item: cart });
    function paymentFormHelper(){
      if(firstName == "" || lastName == "" || cardNumber == "" || expiryDate == ""){
        if (confirm("Please fill out all fields")) {
          handleOffCanvShow();
          handlePaymentShow();
        }
      }else{
        return true
      }
    }
    paymentFormHelper();
  }
  useEffect(() => {
    setTotalPrice(
      cart
        .map((item) => item.productPrice)
        .reduce((prev, curr) => +prev + +curr, 0)
    ),
      [cart];
  }, [cart]);

  //form validation
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  return (
    <>
      <Row
        variant={"dark"}
        style={{ fontSize: "1em" }}
        onClick={handleOffCanvShow}
        className="h-100 justify-content-center align-items-center text-center hover-cart"
      >
        <Col className="d-flex" border="primary" md={12}>
          <u>
            <FaCartPlus style={{ marginRight: "10px" }} />
            <span style={{ fontSize: ".8em" }}>Cart: {cart.length}</span>
          </u>
        </Col>
      </Row>

      <Offcanvas show={cartShow} onHide={handleOffCanvClose}>
        <Offcanvas.Header
          className="pt-1"
          style={{ border: "solid 1px grey" }}
          closeButton
        >
          <Offcanvas.Title>My Cart </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="pt-1" style={{ border: "solid 1px grey" }}>
          {cart && cart.length > 0 ? (
            <div className="border" style={{ height: "100%" }}>
              <div style={{ height: "85%" }}>
                <Row className="m-2 text-center">
                  <Col md={12}>
                    <u>
                      <span style={{ fontSize: "1.2em" }}>
                        {cart.length === 0
                          ? "Your cart is empty"
                          : cart.length === 1
                          ? "Your cart has 1 item"
                          : "Your cart has " + cart.length + " items"}
                      </span>
                    </u>
                  </Col>
                </Row>
                {cart.map((product) => (
                  <Row
                    key={product.productName + product.productId}
                    className="m-2"
                  >
                    <Col md={12}>
                      <h5 className="border-bottom">
                        <span style={{ fontSize: "1.2em" }}>
                          {product.productName}  <span style={{float: "right"}}>{product.productPrice}</span>
                        </span>
                      </h5>
                    </Col>
                  </Row>
                ))}
              </div>
              <Row className="m-2 border">
                <Col md={12}>
                  <h5>
                    <u>
                      <i style={{ fontSize: "1.2em" }}>Items in Cart: </i>
                      <span style={{ float: "right" }}>{cart.length} </span>
                    </u>
                  </h5>
                </Col>
              </Row>
              <Row className="m-2 border">
                <Col md={12}>
                  <h5>
                    <u>
                      <i style={{ fontSize: "1.2em" }}>Total: </i>
                      <span style={{ float: "right" }}>
                        {totalPrice.toFixed(2)}
                      </span>
                    </u>
                  </h5>
                </Col>
              </Row>
            </div>
          ) : (
            <Col className="m-2">
              <h5>
                <u>
                  <span style={{ fontSize: "1.2em" }}>No Items in Cart</span>
                </u>
              </h5>
            </Col>
          )}
        </Offcanvas.Body>
        <div className="p-1" style={{ border: "solid 1px grey" }}>
          <Col className="d-flex justify-content-center align-items-center">
            <Button
              variant="dark"
              style={{ paddingRight: "10px" }}
              onClick={handlePaymentShow}
            >
              Checkout
            </Button>
            <Col xs={1}></Col>
            <Button
              offset={1}
              variant="dark"
              style={{ paddingLeft: "10px" }}
              onClick={handlePaymentShow}
            >
              Empty Cart
            </Button>
          </Col>
        </div>
      </Offcanvas>

      <Modal show={paymentShow} onHide={handlePaymentClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            //create a payment form that looks nice
          }
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Row className="mb-3">
              <Form.Group as={Col} className="col-md-6">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  placeholder="First Name"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-md-6"
                controlId="formGridAddress1"
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  placeholder="1234 Main St"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  placeholder="ex - 4524 3425 2345 9999"
                  value={cardNumber}
                  onChange={(e) => {setCardNumber(e.target.value)}}
                  type="text"
                  maxLength={16}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Expiry Date</Form.Label>
                <Form.Control
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  type="text"
                  placeholder="ex - 12/20"
                  
                />
              </Form.Group>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check
                  type="checkbox"
                  required
                  label="I agree to terms and conditions"
                />
              </Form.Group>
            </Row>
            <Modal.Footer>
              <Button variant="secondary" onClick={handlePaymentClose}>
                Cancel
              </Button>
              <Button
                variant="primary"
                type="submit"
                onClick={completePurchaseHelper}
              >
                Complete Transaction
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Cart;
