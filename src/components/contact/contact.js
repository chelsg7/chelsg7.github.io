import React, { Component } from 'react';
import {Container, Row, Col } from 'reactstrap';
import './contact.css'

class Contact extends Component {
    render() {
        return (
        <section id="Contact">
            <div>
                <h1 id="contHead">
                    Contact Me
                </h1>
            </div>
            <div id="formatCont">
            <Container>
                <Row>
                    {/* <Col>
                        <h2>
                            <a href = "https://www.dropbox.com/s/cxtt9kky3pijit9/ChelseaGieckResume.pdf?dl=0" alt="resume">
                                <i class="far fa-file"></i> resume
                            </a>
                        </h2>
                    </Col> */}
                    <Col>
                        <h2>
                            <a href="Mailto:thorc.design@gmail.com">
                                <i class="fas fa-envelope"></i>
                            </a>
                        </h2>
                    </Col>
                    <Col>
                        <h2>
                            <a href="https://www.linkedin.com/in/chelsea7/">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </h2>
                    </Col>
                    <Col>
                        <h2>
                            <a href="https://github.com/chelsg7">
                                <i class="fab fa-github"></i>
                            </a>
                        </h2>
                    </Col>
                    <Col>
                        <h2>
                            <a href="https://stackexchange.com/users/12884145/chegi7">
                                <i class="fab fa-stack-overflow"></i>
                            </a>
                        </h2>
                    </Col>
                    <Col>
                        <h2>
                            <a href="https://angel.co/chelsea-g?public_profile=1">
                                <i class="fab fa-angellist"></i>
                            </a>
                        </h2>
                    </Col>
                </Row>
            </Container>
            </div>
        </section>
    );
}}

export default Contact;
