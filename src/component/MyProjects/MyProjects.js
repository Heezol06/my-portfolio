import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyProjects = () => {
    return (
        <div className="bg-dark text-white">
            <Container className="py-5">
            <Row >
                    <div className="d-inline-flex justify-content-center mt-4">
                    <h2 className=" p-3  rounded-pill text-white" style={{backgroundColor:"#22577E"}}>My Most Recent <span style={{color:"#ec255a"}}>Projects</span> </h2>
                    </div>
               <Col className="d-flex my-5">
                 <Col>
                    <div class="card text-dark" style={{width: "18rem", height: "600px"}}>
                        <img src="https://i.ibb.co/ssq8Fvc/v-Fa-X5x-F98q.png" class="card-img-top img-fluid h-75"  alt="..." />
                        <div class="card-body">
                            <h3>Travel Destination</h3>
                            <p class="card-text text-dark"><span style={{color:"#ec255a"}}>Travel Destination</span> Travel Destination is a Full Stack Project. It is A tourism related website.</p>
                            <div className="d-flex justify-content-evenly">
                              <a href=" https://travel-destination-e6f25.web.app/home"><button className="btn btn-info text-white rounded-pill">Preview</button></a> 
                            
                            <Link to="/travelDestination"><button className="btn btn-dark rounded-pill">Details</button></Link>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div class="card text-dark" style={{width: "18rem", height: "600px"}}>
                        <img src="https://i.ibb.co/pJXxVx4/5-IC84-Ba-ETz-1-1.png" class="card-img-top img-fluid h-75"  alt="..." />
                        <div class="card-body">
                            <h3>Royal Enfield</h3>
                            <p class="card-text text-dark"><span style={{color:"#ec255a"}}>Royal Enfield</span> Royal Enfield is a Full Stack Project. It is A bike showroom's website.</p>
                            <div className="d-flex justify-content-evenly">
                              <a href="https://royal-enfield-a8c34.web.app/home"><button className="btn btn-info rounded-pill text-white">Preview</button></a> 
                            
                              <Link to="/royalEnfield"><button className="btn btn-dark rounded-pill">Details</button></Link>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div class="card text-dark" style={{width: "18rem", height: "600px"}}>
                        <img src="https://i.ibb.co/B4c48Q6/Wuo-Q8g-Zunc.png" class="card-img-top img-fluid h-75"  alt="..." />
                        <div class="card-body">
                            <h3>Daily -Health- Care</h3>
                            <p class="card-text text-dark"><span style={{color:"#ec255a"}}>Daily -Health- Care</span> Daily Health Care is a Front End Project. It is A health care related clinic website.</p>
                            <div className="d-flex justify-content-evenly">
                              <a href="https://daily-health-care-1a683.web.app/home"><button className="btn btn-info rounded-pill text-white">Preview</button></a> 
                            
                              <Link to="/dailyHealthCare"><button className="btn btn-dark rounded-pill">Details</button></Link>
                            </div>
                        </div>
                    </div>
                </Col>
               </Col>
            </Row>
            </Container>
        </div>
    );
};

export default MyProjects;