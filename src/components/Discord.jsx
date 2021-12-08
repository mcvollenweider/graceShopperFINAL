import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Container, Row, Col, Button } from "react-bootstrap";
import logo from "./shutterstock_112158140.jpg";

function Discord() {
  return (
    <div
      className="text-center p-1 mb-1 mb-md-0"
      style={{ backgroundColor: "rgb(60, 60, 60)" }}
    >
      <Container>
        <Row>
          <Col class="img-fluid img-thumbnail/200x188" xs={6} md={10}>
            <Image src={logo} thumbnail />

            <div>
              <Button href="https://discord.gg/VNu5XbRw">
                Join Our Discord!
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Discord;
