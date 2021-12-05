import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div  className="bg-dark text-light">
        <Container>
            <Row>
                <Col>
                <img src="https://i.ibb.co/BKPjRLp/photo-1552374196-c4e7ffc6e126.png" className="w-100 rounded-circle" style={{border:"20px solid gray"}} alt="" />
                </Col>
                <Col className="text-start p-5 text-animation-col">
                <h6>frontend-developer</h6>
                    <h1 className="text-animation" data-text="Shahriar-Rahman-Heezol...">Shahriar-Rahman-Heezol...</h1>
                    <p>Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.</p>
                    <br></br>
                    <Button variant="primary" className="me-5 rounded-pill"> 
                    <a
                        className="button text-decoration-none text-light"
                        href="https://drive.google.com/file/d/1JKhsvJM-M4XUaE0gQJXjBnpCoNz6RjI7/view"
                        download
                        >
                    Download Resume
                    </a></Button>
                    <Button variant="primary" className="rounded-pill">Primary</Button>
                </Col>
            </Row>
        </Container>


         {/* what i do */}
        <Container className="py-5">
            <h4 className="text-start mb-5">
                What I Do
            </h4>
            <Row>
                <Col className="text-start d-flex">
                    <Col className="col-lg-2">
                        <p><i className="fas fa-pencil-alt text-primary fa-3x"></i></p>
                    </Col>
                    <Col className="col-lg-10">
                        <h5>Copywrite</h5>
                        <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.</p>
                    </Col>
                </Col>
                <Col className="text-start d-flex">
                    <Col className="col-lg-2">
                        <p><i class="fas fa-store-alt text-primary fa-3x"></i></p>
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
                        <p><i class="fas fa-tv text-primary fa-3x"></i></p>
                    </Col>
                    <Col className="col-lg-10">
                        <h5>Web Design</h5>
                        <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.</p>
                    </Col>
                </Col>
                <Col className="text-start d-flex">
                    <Col className="col-lg-2">
                        <p><i class="fas fa-bullhorn text-primary fa-3x"></i></p>
                    </Col>
                    <Col className="col-lg-10">
                        <h5>Copywrite</h5>
                        <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.</p>
                    </Col>
                </Col>
            </Row>
        </Container>
        {/* testimonials  */}
        <Container className="py-5">
            <h4 className="text-start mb-5">
                Testimonials
            </h4>
            <Row >
                <Col className="text-start rounded me-5" style={{border:"1px solid lightGray"}}>
                    <Col className="col-lg-2">
                    <img src="https://i.ibb.co/cxVxbFv/photo-1528892952291-009c663ce843.png" className="w-100 rounded-circle" style={{margin:"-40px"}} alt="" />
                    </Col>
                    <Col className="col-lg-10 mt-4 ms-4">
                    <p>Donec eu est vel metus consequat volutpat. Nunc aliquet euismod mauris, a feugiat urna ullamcorper non.</p>
                    <h6>Billy Adams</h6>
                    <p className="text-light">Rolling Thunder</p>
                    </Col>
                </Col>
                <Col className="text-start rounded me-5" style={{border:"1px solid lightGray"}}>
                    <Col className="col-lg-2">
                    <img src="https://i.ibb.co/xjmTThg/photo-1544005313-94ddf0286df2.png" className="w-100 rounded-circle" style={{margin:"-40px"}} alt="" />
                    </Col>
                    <Col className="col-lg-10 mt-4 ms-4">
                    <p>Donec eu est vel metus consequat volutpat. Nunc aliquet euismod mauris, a feugiat urna ullamcorper non.</p>
                    <h6>Billy Adams</h6>
                    <p className="text-light">Rolling Thunder</p>
                    </Col>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default AboutMe;