//Daniel is doing

import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function NavigationBar() {
  return (
    <div>
      <Navbar bg="dark" variant={"dark"} expand="lg">
        <Navbar.Brand href = "Home"> Shoppers Delight </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "400px" }}
            navbarScroll
          >
            <NavDropdown title="Explore" id="navbarScrollingDropdown">
              <NavDropdown.Item href = "All_NFTs">All NFTs</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Stats" id="navbarScrollingDropdown">
              <NavDropdown.Item href = "Rankings">Rankings</NavDropdown.Item>
              <NavDropdown.Item href = "Activity">Activity</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Resources" id="navbarScrollingDropdown">
              <NavDropdown.Item href = "ContactUs">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href = "Newsletter" >Newsletter</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href = "Discord" >
                Discord Community
              </NavDropdown.Item>

            </NavDropdown>
            
            <NavDropdown title="Create" id="navbarScrollingDropdown">
              <NavDropdown.Item href = "Login">Login</NavDropdown.Item>
              <NavDropdown.Item href = "Register">Register</NavDropdown.Item>
            </NavDropdown>

          </Nav>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />

            <Button variant="outline-success">Search</Button>
          </Form>

         

        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
