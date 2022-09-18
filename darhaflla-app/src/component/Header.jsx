import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import logo from "./Assets/Images/DarHaflaLogo.png";
import { NavLink } from "react-router-dom";
function Navbars() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/" m={8}>
          <img
            src={logo}
            width="50"
            height="50"
            style={{ marginRight: "20px" }}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container-fluid">
            <Nav.Link   as={NavLink} to="/Card" >
              التشكيلة الكاملة
            </Nav.Link>
            <Nav.Link  as={NavLink} to="/">
              الورد
            </Nav.Link>
            <Nav.Link  as={NavLink} to="#">
              الهدايا
            </Nav.Link>
            <Nav.Link  as={NavLink} to="/">
              المناسبات
            </Nav.Link>
          </Nav>

          <Button
            as={NavLink}
            to="#"
            variant="warning"
            style={{ marginLeft: "20px" , backgroundColor:"#FFCF4D", border:"none" }}
          >
            Rigester
          </Button>
          <Button
            as={NavLink}
            to="/Login"
            variant="warning"
            ml="20px"
            style={{ marginLeft: "20px" , backgroundColor:"#FFCF4D" , border:"none" }}
          >
            Login
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navbars;
