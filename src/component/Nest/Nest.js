import React from 'react';
import { Button, Carousel, Col, Container, ProgressBar, Row } from 'react-bootstrap';

const Nest = () => {
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
                                    src="https://i.ibb.co/FgMW8jF/76j-UXk8-Fl7.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded"
                                    src="https://i.ibb.co/RjVDWpc/ir-Li-P2y-Vr0-1.jpg"
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded"
                                    src="https://i.ibb.co/n0SnZcZ/5m-Wt-Sw-Uod6.jpg"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded"
                                    src="https://i.ibb.co/BwMKDyM/Te-TU8l2-Xb-H.jpg"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded"
                                    src="https://i.ibb.co/CvvqcSf/Screenshot-2022-06-05-232858.jpg"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col>
                        <div data-aos="zoom-in-up">
                            <h2 className='text-decoration-underline'>Nest</h2>
                            <p className='ms-5'>This is a E-commerce website. You can add to your cart any kind of products from our site. This site is base on Javascript, React, Node js, Express, MongoDB, chartJS, Css, html5 this is an responsive and smooth site you can use is very easily. This is very handy there have many info about our products. This site is very fast to render.</p>
                            <ul className='d-flex flex-column align-items-center justify-content-center'>
                                <h1>Features</h1>
                                <li className='text-start'>This project is full stack project.</li>
                                <li>This side is based on a shopping your products from here.</li>
                                <li>It's a react and firebase project.</li>
                                <li>This project is based on mongodb.</li>
                                <li>We also use nested route mui and react bootstrap.</li>
                            </ul>
                            <ProgressBar className='ms-5 my-4' variant="danger" now={now} label={`JavaScript ${now}%`} />
                            <ProgressBar className='ms-5 my-4' variant="danger" now={nowCss} label={`${nowCss}%`} />
                            <ProgressBar className='ms-5' variant="danger" now={nowHtml} label={`${nowHtml}%`} />
                            <div className='my-5 button-media'>
                                <a href="https://github.com/Alve576/Team-Project-001"> <Button className="btn-danger me-5 my-5">Git-Server-link</Button> </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Nest;