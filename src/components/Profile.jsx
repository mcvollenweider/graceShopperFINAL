// Christian is doing profile

import React from "react";
import {
  Form,
  Button,
  ButtonToolbar,
  Dropdown,
  DropdownButton,
  Col,
  Container,
  Card,
} from "react-bootstrap";
import { getUser } from "../auth";

const Profile = () => {
  let userName = getUser();

  return (
    <div>
      <div
      className="bg-image "
      style={{
        backgroundImage:
          "url('https://i2.wp.com/files.123freevectors.com/wp-content/original/115982-abstract-cool-blue-blurred-lights-background-design.jpg?w=800&q=95)",
        height: "100vh",
        backgroundSize: "100%",
      }}
    >
      <div
        class="mask"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          height: "100vh",
          backgroundSize: "100%",
        }}
      >

      
      <br></br><br></br>
      <Container>
      <Card className="text-center ">
        <Card.Header>User Profile</Card.Header>
        <Card.Body>
          <Card.Title>{userName}</Card.Title>
          <Card.Text >
            Browse through your own NFTs below
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
      </Container>
      </div>
      </div>
    
    </div>
  );
};

export default Profile;
