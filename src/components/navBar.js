import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/navBar.css";
function navBar(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? "active" : "";
  };
  return (
    <div className="header">
      <Container>
        <Nav className="d-flex align-items-center">
          <Nav.Item>
            <Nav.Link as={Link} className="titleNavbar_primary" to="/">
              Meetroom
              <span className="titleNavbar_secondary">Generator.</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="ml-auto">
            <Nav.Link
              as={Link}
              className={`${getNavLinkClass("/addEvent")}`}
              to="/addEvent"
            >
              + Add Event
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              className={`${getNavLinkClass("/Dashboard")}`}
              to="/Dashboard"
            >
              Dashboard
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </div>
  );
}

export default navBar;
