//Daniel is doing

import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

function NavigationBar() {
  return (
    <div>
      <Navbar bg="dark" variant={"dark"} expand="lg">


        <Navbar.Brand href="Home" className="btn-group ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shoppers Delight   </Navbar.Brand>


        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <form className="form-inline my-2 my-lg-2 px-4">
              <input
                className="form-control mx-sm-5 px-5"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <button
              className="btn btn-outline-success mx-5 my-sm-1 px-2"
              type="submit"
            >
              Search
            </button>

            <Nav
              className="me-auto my-2 my-lg-1"
              style={{ maxHeight: "400px" }}
              navbarScroll
            >
              <NavDropdown title="Explore" id="navbarScrollingDropdown">
                <NavDropdown.Item href="All_NFTs">All NFTs</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Stats" id="navbarScrollingDropdown">
                <NavDropdown.Item href="Rankings">Rankings</NavDropdown.Item>
                <NavDropdown.Item href="Activity">Activity</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Resources" id="navbarScrollingDropdown">
                <NavDropdown.Item href="ContactUs">Contact Us</NavDropdown.Item>
                <NavDropdown.Item href="Newsletter">
                  Newsletter
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="Discord">
                  Discord Community
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Create" id="navbarScrollingDropdown">
              <NavDropdown.Item href="Cart">Cart</NavDropdown.Item>
                <NavDropdown.Item href="Profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="Login">Login</NavDropdown.Item>
                <NavDropdown.Item href="Register">Register</NavDropdown.Item>
              </NavDropdown>
              
            </Nav>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
