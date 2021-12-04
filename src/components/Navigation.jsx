import React from "react";
// Might use bootstrap undecided
// import { Navbar, Nav, Container } from "react-bootstrap"; 
import { Route, Switch, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="ui-menu">

      <div className="item">
        <Link className="navbar-link">Explore</Link>
      </div>

      <div className="item">
        <Link className="navbar-link">Stats</Link>
      </div>

      <div className="item">
        <Link className="navbar-link">Resources</Link>
      </div>

      <div className="item">
        <Link className="navbar-link">Create</Link>
      </div>

      <div className="item">
        <Link className="navbar-link">Profile</Link>
      </div>
    </div>
  );
};

export default Navigation;
