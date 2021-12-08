import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="text-white bg-dark py-2 border-top">
            <Container className=" d-flex align-items-center justify-content-between">
            <p>Designed and Developed by |<a href="https://github.com/Heezol06">Heezol</a></p>
            <p>Copyright © 2021 S_H</p>
            <div>
            <a href="https://github.com/Heezol06" style={{color:"#ec255a"}}><i class="fab fa-github fa-xl me-3 rounded-circle"> </i></a>
            <a href="https://www.linkedin.com/in/sr-heezol/" style={{color:"#ec255a"}}><i class="fab fa-linkedin fa-xl me-3 rounded-circle"></i></a>
            <a href="https://twitter.com/SHeezol" style={{color:"#ec255a"}}> <i class="fab fa-instagram-square fa-xl me-3 rounded-circle"></i></a>
            <a href="https://www.instagram.com/roy__jon__/" style={{color:"#ec255a"}}><i class="fab fa-twitter fa-xl rounded-circle"> </i></a>
            </div>
        </Container>
        </div>
    );
};

export default Footer;