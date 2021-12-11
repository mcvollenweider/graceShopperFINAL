// EVAN is doing the AllNft page

//import bootstrap-react components
import { Row, Col, Container, Card, ListGroup, ListGroupItem } from "react-bootstrap";
//import { getProducts } from "./api";
import { getAllProducts } from "./api";
import React from "react";


const AllNft = (props) => {
let allProducts = props.allProducts;
//allProducts = allProducts[0];
console.log(allProducts.length)
  return (
    <Container>
      <Row className="m-5">
        {allProducts.length
          ? allProducts.map((product, index) => (
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
            ))
          : "No products found"}
      </Row>
    </Container>
  );
}


export default AllNft;