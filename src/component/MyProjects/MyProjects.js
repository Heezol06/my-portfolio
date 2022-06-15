import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MyProject.css'

const MyProjects = () => {
    return (
        <div className="bg-dark text-white">
            <Container className="py-5">
                <Row>
                    <div className="d-inline-flex justify-content-center mt-4">
                        <h2 className=" p-3  rounded-pill text-white" style={{ backgroundColor: "#22577E" }}>My Most Recent <span style={{ color: "#ec255a" }}>Projects</span> </h2>
                    </div>
                    <Col className="d-flex my-5 project-media" data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom">
                        <Col>
                            <div class="card text-dark card-media" style={{ width: "18rem", height: "400px" }}>
                                <img src="https://i.ibb.co/WsNc6L5/ezgif-com-gif-maker-4.gif" class="card-img-top img-fluid h-75" alt="..." />
                                <div class="card-body">
                                    <h3>Travel Destination</h3>
                                    <p class="card-text text-dark"><span style={{ color: "#ec255a" }}>Travel Destination</span> Travel Destination is a Full Stack Project. It is A tourism related website.</p>
                                    <div className="d-flex justify-content-evenly">
                                        <a href=" https://travel-destination-e6f25.web.app/home"><button className="btn btn-info text-white rounded-pill">Preview</button></a>

                                        <Link to="/travelDestination"><button className="btn btn-dark rounded-pill">Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div class="card text-dark card-media" style={{ width: "18rem", height: "400px" }}>
                                <img src="https://i.ibb.co/KrN1gXM/ezgif-com-gif-maker-5.gif" class="card-img-top img-fluid h-75" alt="..." />
                                <div class="card-body">
                                    <h3>Royal Enfield</h3>
                                    <p class="card-text text-dark"><span style={{ color: "#ec255a" }}>Royal Enfield</span> Royal Enfield is a Full Stack Project. It is A bike showroom's website.</p>
                                    <div className="d-flex justify-content-evenly">
                                        <a href="https://royal-enfield-a8c34.web.app/home"><button className="btn btn-info rounded-pill text-white">Preview</button></a>

                                        <Link to="/royalEnfield"><button className="btn btn-dark rounded-pill">Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div class="card text-dark card-media" style={{ width: "18rem", height: "400px" }}>
                                <img src="https://i.ibb.co/PQDGBTK/ezgif-com-gif-maker-7.gif" class="card-img-top img-fluid h-100" alt="..." />
                                <div class="card-body">
                                    <h3>Apartment Seller</h3>
                                    <p class="card-text text-dark"><span style={{ color: "#ec255a" }}>Apartment Seller</span> Apartment Seller is a Full-Stack Project. It is a selling or buying appertment website.</p>
                                    <div className="d-flex justify-content-evenly">
                                        <a href="https://daily-health-care-1a683.web.app/home"><button className="btn btn-info rounded-pill text-white">Preview</button></a>

                                        {/* <Link to="/dailyHealthCare"><button className="btn btn-dark rounded-pill">Details</button></Link> */}
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div class="card text-dark card-media" style={{ width: "18rem", height: "400px" }}>
                                <img src="https://i.ibb.co/JnzcDnS/ezgif-com-gif-maker-6.gif" class="card-img-top img-fluid h-75" alt="..." />
                                <div class="card-body">
                                    <h3>Nest</h3>
                                    <p class="card-text text-dark"><span style={{ color: "#ec255a" }}>Nest</span>It is a e-commerce website you can buy all of you want.</p>
                                    <div className="d-flex justify-content-evenly">
                                        <a href="https://team-project-003.web.app/"><button className="btn btn-info rounded-pill text-white">Preview</button></a>

                                        <Link to="/nest"><button className="btn btn-dark rounded-pill">Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Col>

                    <Col>
                        <div class="card text-dark card-media" style={{ width: "18rem", height: "400px" }}>
                            <img src="https://i.ibb.co/3WwPMzP/ezgif-com-gif-maker-1.gif" class="card-img-top img-fluid h-75" alt="..." />
                            <div class="card-body">
                                <h3>Brain Skill</h3>
                                <p class="card-text text-dark"><span style={{ color: "#ec255a" }}>Brain Skill</span> Brain Skill is a Full Stack Project. It is E-Learning website.</p>
                                <div className="d-flex justify-content-evenly">
                                    <a href="https://brain-skill.netlify.app/"><button className="btn btn-info text-white rounded-pill">Preview</button></a>
                                    {/* <Link to="/travelDestination"><button className="btn btn-dark rounded-pill">Details</button></Link> */}
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default MyProjects;