// Christian is doing login
import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Col,
  Container,
  ButtonToolbar,
  FormGroup,
} from "react-bootstrap";
import { loginUser } from "../api";
import { storeToken, storeUser } from "../auth";
import { useHistory } from "react-router-dom";

const Login = ({ isLoggedIn, setIsLoggedIn, setUsername, username }) => {
  let history = useHistory();

  let [password, setPassword] = useState("");

  let loginForm = (
    <Container>
      <br /> <br /> <br /> <br /> <br />
      <Col md={{ span: 4, offset: 4 }}>
        <b> Login Form </b>
        <Form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const { data } = await loginUser(username, password);
              setUsername("");
              setPassword("");
              setIsLoggedIn(true);
            } catch (error) {
              console.log(error.message);
            } finally {
              setIsLoggedIn(true);
              // history.push("/Home");
            }
          }}
        >
          <Form.Group className="mb-4" controlId="formBasicUsername">
            <Form.Label> Username </Form.Label>
            <Form.Control
              type="text"
              placeholder="usernames"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label> Enter Password </Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </Form.Group>
          <ButtonToolbar className="mb-3">
            <Button variant="primary" type="submit">
              Login
            </Button>
            <Button
              variant="secondary"
              type="submit"
              onClick={(e) => {
                history.push("/Register");
              }}
            >
              Don't have an account?
            </Button>
          </ButtonToolbar>
        </Form>
      </Col>
      <br /> <br /> <br /> <br /> <br />
    </Container>
  );



  
  console.log(username, "log of USERNAME");





  let logoutButton = (
    <Container className="text-center">
      <br /> <br /> <br /> <br /> <br />
      <ButtonToolbar className="mb-2">
        <Button
          variant="primary"
          onClick={() => {
            setIsLoggedIn(false);
            setUsername("");
            setPassword("");
            history.push("/Login");
          }}
        >
          Logout
        </Button>
      </ButtonToolbar>
      <br /> <br /> <br /> <br /> <br />
    </Container>
  );
  return isLoggedIn ? logoutButton : loginForm;
};

export default Login;
