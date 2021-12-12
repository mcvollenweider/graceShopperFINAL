// EVAN is doing the AllNft page

//import bootstrap-react components
import { Row, Col, Container, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { getAllProducts } from "../api";

import React from "react";
import { useState, useEffect } from "react";

const AllNft = (props) => {

let [allProducts, setAllProducts] = useState([]);

 

const fetchAllProducts = async () => {
  const products = await getAllProducts();
  setAllProducts(products);
  console.log(products);
}

  useEffect(() => {
    fetchAllProducts();
  }, []);
  console.log(allProducts);

  return (
    <Container>
      <Row className="m-5">
        {allProducts && allProducts.length
          ? allProducts.map((product, index) => {
          console.log(product);
              return (
                <Card
                  className="m-1"
                  key={product.id + index}
                  style={{ width: "18rem" }}
                >
                  <Card.Img className="mt-3" src={product.image_url} />
                  <Card.Body className="text-center">
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>{product.price}</Card.Text>
                    <Card.Text>{product.current_owner}</Card.Text>
                    <Card.Text>{product.for_sale}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })
          : "No products found"}
      </Row>
    </Container>
  );
}


export default AllNft;