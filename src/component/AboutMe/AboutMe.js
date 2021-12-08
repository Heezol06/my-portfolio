import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div  className="bg-dark text-light">
        <Container>
            <Row className="py-5">
                <Col>
                <img src="https://i.ibb.co/BKPjRLp/photo-1552374196-c4e7ffc6e126.png" className="w-100 rounded-circle" style={{border:"20px solid gray"}} alt="" />
                </Col>
                <Col className="text-start p-5 text-animation-col">
                <h6>frontend-developer</h6>
                    <h1 className="text-animation" data-text="Shahriar-Rahman-Heezol...">Shahriar-Rahman-Heezol...</h1>
                    <p>Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.</p>
                    <br></br>
                    <Button style={{backgroundColor:"#ec255a"}} variant="danger" className="me-5 rounded-pill"> 
                    <a
                        className="button text-decoration-none text-light"
                        href="https://drive.google.com/file/d/1JKhsvJM-M4XUaE0gQJXjBnpCoNz6RjI7/view"
                        download
                        >
                    Download Resume
                    </a></Button>
                </Col>
            </Row>
        </Container>


         {/* what i do */}
        <Container className="py-5">
            <h4 className="text-start mb-5">
                <span style={{color:"#ec255a"}}> What</span> I Do
            </h4>
            <Row>
                <Col className="text-start d-flex">
                    <Col className="col-lg-2">
                        <p><i className="fas fa-pencil-alt fa-3x" style={{color:"#ec255a"}}></i></p>
                    </Col>
                    <Col className="col-lg-10">
                        <h5>Copywrite</h5>
                        <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.</p>
                    </Col>
                </Col>
                <Col className="text-start d-flex">
                    <Col className="col-lg-2">
                        <p><i class="fas fa-store-alt  fa-3x" style={{color:"#ec255a"}}></i></p>
                    </Col>
                    <Col className="col-lg-10">
                        <h5>Ecommerce</h5>
                        <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.</p>
                    </Col>
                </Col>
            </Row>
            <Row>
                <Col className="text-start d-flex">
                    <Col className="col-lg-2">
                        <p><i class="fas fa-tv  fa-3x" style={{color:"#ec255a"}}></i></p>
                    </Col>
                    <Col className="col-lg-10">
                        <h5>Web Design</h5>
                        <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.</p>
                    </Col>
                </Col>
                <Col className="text-start d-flex">
                    <Col className="col-lg-2">
                        <p><i class="fas fa-bullhorn fa-3x" style={{color:"#ec255a"}}></i></p>
                    </Col>
                    <Col className="col-lg-10">
                        <h5>Copywrite</h5>
                        <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.</p>
                    </Col>
                </Col>
            </Row>
        </Container>
        <Container className="py-5">
            <h1>FIND <span style={{color:"#ec255a"}}>ME</span> ON</h1>
            <Col>
            <a href="https://github.com/Heezol06" style={{color:"#ec255a"}}><i class="fab fa-github fa-3x me-3 rounded-circle"> </i></a>
            <a href="https://www.linkedin.com/in/sr-heezol/" style={{color:"#ec255a"}}><i class="fab fa-linkedin fa-3x me-3 rounded-circle"></i></a>
            <a href="https://twitter.com/SHeezol" style={{color:"#ec255a"}}> <i class="fab fa-instagram-square fa-3x me-3 rounded-circle"></i></a>
            <a href="https://www.instagram.com/roy__jon__/" style={{color:"#ec255a"}}><i class="fab fa-twitter fa-3x rounded-circle"> </i></a>
            </Col>
        </Container>
        </div>
    );
};

export default AboutMe;