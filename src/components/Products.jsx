import React, { useState, useEffect } from "react";
import { Card, Button, Row, Container } from "react-bootstrap";

const Products = ({allProducts}) => {
let products = allProducts.fakeData
return products ? (
  <Container>
    <Row className="text-center">
      {products.map((item, index) => {
        let { id, name, price, category, description } = item;
        console.log(id);
        return (
          <Card key={`products-${id}${index * 2}`} style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/images/placeHolderImage.png" />{" "}
            {/* TODO: ADD REAL IMAGE LINK */}
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Button variant="primary">
                {/* TODO: BUTTON as LINK w/ whatever routing is needed */}
                Purchase
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </Row>
  </Container>
) : (
  "not working lol"
);
}
export default Products;