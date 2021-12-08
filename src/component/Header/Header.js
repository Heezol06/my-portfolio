import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
             <Navbar style={{borderBottom:"1px solid gray" }} sticky="top" className="py-3" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container className="d-flex justify-content-between" >
          <Navbar.Brand href="#home"><span style={{color:"#ec255a"}}>Shahriar</span>-Rahman</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav>
      <Link to="/" style={{textDecoration:"none", color:"white", marginRight:"10px",}} >
        Home
      </Link>
      <Link to="/myProjects" style={{textDecoration:"none", color:"white", marginRight:"10px"}}>
        My Project
      </Link>
      <Link to="/resume" style={{textDecoration:"none", color:"white",marginRight:"10px"}}>
        Resume
      </Link>
      <Link to="/contactMe" style={{textDecoration:"none", color:"white",}}>
        Contact Me
      </Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;