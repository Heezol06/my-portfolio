import React from 'react';
import emailjs from 'emailjs-com';
import { Col, Container, Form, Row } from 'react-bootstrap';

const ContactMe = () => {

    // export const ContactUs = () => {
    //     const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_twoprlo', 'template_8pjmnjy', e.target, 'user_rfgbua4a0L9B2swi5VGR9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
        };
    return (
        <div className="bg-dark text-white py-5">
            <Container className="py-5">
            <h1>Contact Me</h1>
            <Row className="py-5">
                <Col data-aos="zoom-out-right">
                    <h1 style={{color:"#ec255a"}}>Get in Touch</h1>
                    <p>Have a question? Concern? Request? I’d love to hear from you. You just have to contact with me so with out hesitation contact with us. </p>
                      <div className="text-start">
                      <div className="d-flex align-items-center">
                                <i class="fas fa-map-marker-alt fa-2x " style={{color:"#ec255a"}}></i>
                                <h4 className="ms-3">Location</h4>
                                </div>
                                <p className="ms-5">তেজগাঁও শিল্প এলাকা, Dhaka 1208</p>
                        </div>          
                      <div className="text-start">
                      <div className="d-flex align-items-center ">
                                <i class="fas fa-envelope fa-2x " style={{color:"#ec255a"}}></i>
                                <h4 className="ms-3">Email</h4>
                                </div>
                                <p className="ms-5">shahriarrahmanheezol@gmail.com</p>
                        </div>          
                      <div className="text-start">
                      <div className="d-flex align-items-center ">
                      <i class="fas fa-phone-alt fa-2x " style={{color:"#ec255a"}}></i>
                                <h4 className="ms-3">Phone</h4>
                                </div>
                                <p className="ms-5">01629249295</p>
                        </div>          
                </Col>
                <Col data-aos="zoom-out-left">
                <Form onSubmit={sendEmail}>
                <div className="d-flex">
                <Form.Group className="mb-3 me-5" controlId="exampleForm.ControlInput1">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" className="pe-5" placeholder="Your Name" name="name" />
                </Form.Group>
                <Form.Group className="mb-3 ms-4" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" className="pe-5" placeholder="Your Email" name="email"/>
                </Form.Group>
                </div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text"  placeholder="Subject" name="subject"/>
                    </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Type your message here</Form.Label>
                    <Form.Control as="textarea" rows={3} name="message" />
                </Form.Group>
                <input type="submit" className="btn btn-danger" value="Send Message" />
                </Form>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default ContactMe;