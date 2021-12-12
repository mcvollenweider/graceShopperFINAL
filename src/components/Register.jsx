// Christian is doing register

import React, { useState, useEffect } from "react";
import { Form, Button, Col, Container, ButtonToolbar } from "react-bootstrap";
import { getToken, storeToken } from "../auth";

import { registerUser } from "../api";
import { useHistory } from "react-router-dom";
const Register = ({ isLoggedIn, setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  return (
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
        <Container>
          <br /> <br /> <br />
          <Col className="text-white" md={{ span: 4, offset: 4 }}>
            <h2>
              <b class="row justify-content-center"> Please Register </b>
            </h2>
            <br></br>
            <br></br>

            <Form
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  const { data } = await registerUser(username, password);
                  setIsLoggedIn(true);
                } catch (error) {
                  console.log(error.message);
                } finally {
                  history.push("/Login");
                }
              }}
            >
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Create Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="usernames"
                  value={username}
                  onChange={(event) => {
                    // console.log(event.target.value)
                    console.log(username);
                    setUsername(event.target.value);
                  }}
                />
                <Form.Text className="text-muted">
                  We will never share your username or password with anyone
                  else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label> Create Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </Form.Group>
              <ButtonToolbar className="mb-2">
                <Button variant="primary" type="submit">
                  Register
                </Button>
              </ButtonToolbar>
              <br /> <br /> <br /> <br /> <br /> <br /> <br />
            </Form>
          </Col>
        </Container>
      </div>
    </div>
  );
};

export default Register;
