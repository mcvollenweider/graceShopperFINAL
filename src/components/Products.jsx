import React from "react";

import {
  Row,
  Col,
  Container,
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Modal,
  Offcanvas,
} from "react-bootstrap";

import { getSingleProduct } from "../api";

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

const Products = ({
  cart,
  setCart,
  totalPrice,
  setTotalPrice,
  setCartShow,
  cartShow,
  setPaymentShow,
  paymentShow,
}) => {
  const handleOffCanvClose = () => setCartShow(false);
  const handleOffCanvShow = () => setCartShow(true);
  const handlePaymentClose = () => setPaymentShow(false);
  const handlePaymentShow = () => setPaymentShow(true);

  let [singleProduct, setSingleProduct] = useState([]);
  let { id } = useParams();

  const fetchSingleProduct = async () => {
    const product = await getSingleProduct(id);
    setSingleProduct(product);
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  const handleCart = (newProduct) => {
    let newCart = [...cart];
    if (cart.find((item) => item.productId === newProduct.productId)) {
      console.log("Product already in cart");
    } else {
      setCart((newCart) => [...newCart, newProduct]);
    }
    handleOffCanvShow();
    // let newTotal = cart.map((item) => item.productPrice); dont repeat but dont delete
    // setTotalPrice(newTotal.reduce((a, b) => +a + +b, 0)); dont repeat but dont delete
  };

  return (
    <div className="bg-image">
      <div className="mask">
        <Container className="d-flex justify-content-center">
          <Row>
            <Col className="">
              <Card
                className="m-1"
                key={singleProduct.id}
                style={{ width: "18rem" }}
              >
                <Card.Img className="p-3" src={singleProduct.image_url} />
                <Card.Body className="text-center">
                  <Card.Title>
                    <Button
                      style={{ width: "50%", cursor: "pointer" }}
                      onClick={() => {
                        let productInfo = {
                          productId: singleProduct.id,
                          productName: singleProduct.name,
                          productPrice: singleProduct.price,
                          productDescription: singleProduct.description,
                        };
                        handleCart(productInfo);
                      }}
                    >
                      <FaCartPlus />
                      <Card.Text className="pt-2" style={{ fontSize: ".5em" }}>
                        Add to Cart
                      </Card.Text>
                    </Button>
                  </Card.Title>
                  <Card.Text className="border m-0">Price: {`$${singleProduct.price}`}</Card.Text>
                  <Card.Text className="border m-0">Author: {singleProduct.current_owner}</Card.Text>
                  <Card.Text className="border m-0">{'lorum ipsum description'}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Products;
