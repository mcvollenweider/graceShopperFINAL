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
      className="bg-image">
      <div
        class="mask">
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
