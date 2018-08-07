import React, { Component } from 'react';
import {Container, Row, Col, Card, CardBody } from 'reactstrap';
import './about.css'

class About extends Component {
    render() {
        return (
        <section id="About" >
            <div>
                <h1 id="abHead">
                    About Me
                </h1>
            </div>
            <div>
            <Container>
                <Row>
                    <Col>
                        {/* <h4>
                            My dog Thor
                        </h4> */}
                        <img src={require('../images/thor.JPG')} alt="my dog" className="img-fluid"/>
                    </Col>
                    <Col xs="9">
                    {/* <Card>
                        <CardBody> */}
                        <div id="abForm">
                            <p>
                                My name is Chelsea Gieck, and I’m a Freelance Web Development Professional. I have over three years of experience working with JavaScript, HTML and CSS - including HTML5, Bootstrap 3 & 4, Bulma, and jQuery (and other frameworks and libraries). I love to learn, and I recently completed a Certification for Full Stack Web Development through The Friday Center at the University of North Carolina at Chapel Hill. Through this certification, I gained experience with the MERN Stack. I have developed a portfolio below relating to my coursework.
                                <br/>
                                For the past few years, I have been working for Enigma Systems as a Freelance Front End and Search Engine Optimization (SEO) Consultant. I have gained experience with Google AdWords and Google Analytics. For client's sites, I do market research for keywords geotargeted and nationally with Google Trends / Insights. Using these trends, I manage client's sites by updating the sitemap, and I generate content with a focus on H1, hyperlinks, meta title and description. During my time with Enigma Systems, I also learned to use Google Analytics to identify which new pages I've created are drawing in organic traffic. Through this job, I have gained experience with Search Engine Optimization, Search Engine Marketing, and Content Creation.
                                <br/>
                                {/* When I am not working, you can find me outdoors. I love to hike and explore nature, and I have an excellent canine companion named Mr. Thor. */}
                            </p>
                            <p id="cent">
                                Want to work together? I’d love to hear from you.
                            </p>
                        </div>
                        {/* </CardBody>
                        </Card> */}
                    </Col>
                </Row>
            </Container>
            </div>
        </section>
    );
}}

export default About;
