import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div  className="bg-dark text-light">
        <Container >
            <Row className="py-5">
                <Col className="" data-aos="fade-up">
                <img src="https://i.ibb.co/XZGQFyp/ps.jpg" className="w-75 h-75 rounded-circle" style={{border:"20px solid gray"}} alt="" />
                </Col>
                <Col className="text-start p-5 text-animation-col" data-aos="fade-down">
                <h6>frontend-developer</h6>
                    <h1 className="text-animation" data-text="Shahriar-Rahman-Heezol">Shahriar-Rahman-Heezol</h1>
                    <p>I am Shahriar Rahman Heezol. And a fullstack junior MERN Stack developer. I have rich experience in both front end and back end development. I always try to ne unique. </p>
                    <br></br>
                    <h4>Name: Shahriar Rahman Heezol</h4>
                    <h4>Date of Birth: November 1, 2002</h4>
                    <h4>Phone No: +8801629249295</h4>
                    <h4>Email: Shahriarrahmanheezol@gmail.com</h4>
                    <h4>Address: Tejgaon,Dhaka,Bangladesh</h4>
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
            <Row >
                <div className='my-experience d-flex'>
                <Col className="text-start d-flex " data-aos="fade-right">
                    <Col className="col-lg-2">
                        <p><i className="fas fa-pencil-alt fa-3x" style={{color:"#ec255a"}}></i></p>
                    </Col>
                    <Col className="col-lg-10">
                        <h5>Web Design</h5>
                        <p>I am a UI/UX designer. I always try to design unique from all other website.</p>
                    </Col>
                </Col>
                <Col className="text-start d-flex" data-aos="fade-left">
                    <Col className="col-lg-2">
                        <p><i class="fas fa-mobile-alt fa-3x"  style={{color:"#ec255a"}}></i></p>
                    </Col>
                    <Col className="col-lg-10">
                        <h5>Responsive Design</h5>
                        <p>Responsive is means all other device friendly. I do Responsive for phone & tab.</p>
                    </Col>
                </Col>
                </div>
            </Row>
            <Row>
                <div className='my-experience d-flex'>
                <Col className="text-start d-flex" data-aos="fade-right">
                    <Col className="col-lg-2">
                        <p><i class="far fa-file-code fa-3x" style={{color:"#ec255a"}}></i></p>
                    </Col>
                    <Col className="col-lg-10">
                        <h5>Web Development</h5>
                        <p>Development is my fast priority. I creat many fullstack project. I good at frontend part and i would love to do this part. </p>
                    </Col>
                </Col>
                <Col className="text-start d-flex" data-aos="fade-left">
                    <Col className="col-lg-2">
                        <p><i class="fas fa-camera-retro fa-3x" style={{color:"#ec255a"}}></i></p>
                    </Col>
                    <Col className="col-lg-10">
                        <h5>Photography</h5>
                        <p>Photography is my hobby. I am not professional at Photography but i am a quality photographer tough.</p>
                    </Col>
                </Col>
                </div>
            </Row>
        </Container>
        <Container className="py-5" data-aos="zoom-out">
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