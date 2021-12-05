import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div >
             <Navbar sticky="top" className="py-3" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container className="d-flex justify-content-between" >
          <Navbar.Brand href="#home">Shahriar-Rahman</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav>
      <Link to="/" style={{textDecoration:"none", color:"white", marginRight:"10px"}} >
        Home
      </Link>
      <Link to="/myProjects" style={{textDecoration:"none", color:"white",}}>
        My Project
      </Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;