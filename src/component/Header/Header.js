import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
             <Navbar style={{borderBottom:"1px solid gray" }} sticky="top" className="py-3" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container className="d-flex justify-content-between" >
          <Navbar.Brand href="#home"><span style={{color:"#ec255a"}}>Shahriar</span>-Rahman</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav>
      <NavLink
      className="hover-underline-animation"
        to="/home"
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
        style={{textDecoration:"none", color:"white", marginRight:"10px",}}
      >
      Home
      </NavLink>
      <NavLink
      className="hover-underline-animation"
        to="/myProjects"
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
        style={{textDecoration:"none", color:"white", marginRight:"10px",}}
      >
      My Project
      </NavLink>
      <NavLink
      className="hover-underline-animation"
        to="/resume"
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
        style={{textDecoration:"none", color:"white", marginRight:"10px",}}
      >
      Resume
      </NavLink>
      <NavLink
      className="hover-underline-animation"
        to="/contactMe"
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
        style={{textDecoration:"none", color:"white", marginRight:"10px",}}
      >
      Contact Me
      </NavLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;