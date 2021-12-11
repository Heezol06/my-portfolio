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
                    <div data-aos="zoom-in-up">
                    <h2 className='text-decoration-underline'>Royal Enfield</h2>
                       <p className='ms-5'>This is a bike showroom & booking website. You can book your bike and admin can add a new bike. This site is base on Javascript, React, Node js, Express, MongoDB, Css, html5 this is an responsive and smooth site you can use is very easily. This is very handy there have many info about our bikes you can take many services for your bike on this site. This site is very fast to render.</p>
                       <ul className='d-flex flex-column align-items-center justify-content-center'>
                         <h1>Features</h1>
                         <li className='text-start'>This project is full stack project.</li>
                         <li>This side is based on a most popular bike brand your can buy bike from here.</li>
                         <li>It's a react and firebase project.</li>
                         <li>This project is based on mongodb.</li>
                         <li>We also use nested route mui and react bootstrap.</li>
                       </ul>
                        <ProgressBar className='ms-5 my-4' variant="danger" now={now} label={`JavaScript ${now}%`} />
                        <ProgressBar className='ms-5 my-4' variant="danger" now={nowCss} label={`${nowCss}%`} />
                        <ProgressBar className='ms-5' variant="danger" now={nowHtml} label={`${nowHtml}%`} />
                        <div className='my-5 button-media'>
                          <a href="https://github.com/Heezol06/royal-enfield-server"> <Button className="btn-danger me-5 my-5">Git-Server-link</Button> </a>
                          <a href="https://github.com/Heezol06/royel-enfield-client my-5"> <Button className="btn-danger">Git-Client-link</Button> </a>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RoyalEnfield;