import React from "react";
import {
  Form,
  Dropdown,
  DropdownButton,
  Col,
  Container,
} from "react-bootstrap";
import { getUsers } from "../api";
function Activity() {
  const allUsers = getUsers();
    console.log(allUsers, "all users console log")
  return (
    <div className="ui container">
      {/* {allUsers.length
        ? allUsers.map((user) => {
            return (
              <Container>
                <h1>{user.name}</h1>
              </Container>
            );
          })
        : null} */}
      <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
    </div>
  );
}

export default Activity;
