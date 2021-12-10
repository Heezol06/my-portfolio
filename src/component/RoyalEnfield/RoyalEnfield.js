import React from 'react';
import { Button, Carousel, Col, Container, ProgressBar, Row } from 'react-bootstrap';

const RoyalEnfield = () => {
    const now = '91.9';
  const nowCss = 'CSS 3.4';
  const nowHtml = 'HTML 4.7';
    return (
        <div className="bg-dark text-light">
          
            <Container>
                <Row className='g-0 img-row py-5 '>
                    <Col className='d-flex img-col'>
                          <Carousel>
                            <Carousel.Item>
                              <img
                                className="d-block w-100 rounded"
                                src="https://i.ibb.co/0Fz90QG/5-IC84-Ba-ETz-1.jpg"
                                alt="First slide"
                              />
                              <Carousel.Caption>
                              </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w-100 rounded"
                                src="https://i.ibb.co/MpLkx1k/e-Rs8a3-BQt-C.jpg"
                                alt="Second slide"
                              />

                              <Carousel.Caption>
                              </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w-100 rounded"
                                src="https://i.ibb.co/db3P4jk/Screenshot-2021-12-11-001145.png"
                                alt="Third slide"
                              />

                              <Carousel.Caption>
                              </Carousel.Caption>
                            </Carousel.Item>
                          </Carousel>
                    </Col>
                    <Col>
                    <div>
                    <h2 className='text-decoration-underline'> Travel Distinction</h2>
                       <p className='ms-5'>This is a travel booking agency website. You can book your travel destination and add a new destination where you want to travel. This site is base on Javascript, React, Css, html5 this is an responsive and smooth site you can use is very easily. This is very handy there have many info about our hospital you can take many services from this site. This site is very fast to render.</p>
                       <ul className='d-flex flex-column align-items-center justify-content-center'>
                         <h1>Features</h1>
                         <li className='text-start'>This is an react based website.</li>
                         <li>Privet route also included.</li>
                         <li>We use authentication system on our site.</li>
                         <li>And this is a responsive site for phone also.</li>
                         <li>There have routing system dynamic route system.</li>
                       </ul>
                        <ProgressBar className='ms-5 my-4' variant="danger" now={now} label={`JavaScript ${now}%`} />
                        <ProgressBar className='ms-5 my-4' variant="danger" now={nowCss} label={`${nowCss}%`} />
                        <ProgressBar className='ms-5' variant="danger" now={nowHtml} label={`${nowHtml}%`} />
                        <div className='my-5'>
                          <a href="https://github.com/Heezol06/royal-enfield-server"> <Button className="btn-danger me-5">Git-Server-link</Button> </a>
                          <a href="https://github.com/Heezol06/royel-enfield-client"> <Button className="btn-danger">Git-Client-link</Button> </a>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RoyalEnfield;