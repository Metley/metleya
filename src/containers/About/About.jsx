import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profilePic from "../../assets/images/About/profile-pic.png";
import Auxi from "../../hoc/Auxi";
import { Container, Row, Col, Image } from "react-bootstrap";

class About extends Component {
    state = {};
    render() {
        return (
            <Auxi>
                <Container>
                    <Row>
                        <Col md={4}></Col>
                        <Col>
                            <h1 class="display-3">About</h1>
                        </Col>
                        <Col md={4}></Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={1} />
                        <Col md={5}>
                            <Image
                                src={profilePic}
                                alt="ProfilePic"
                                thumbnail
                            />
                        </Col>
                        <Col md={5}>
                            <p class="text-justify">
                                Welcome to my website, this was created to help
                                myself learn and experiment with using Reactjs
                                while creating a portfolio to store my projects
                                and have them on display. I have currently been
                                focused on creating different projects but will
                                soon focus on making the site overall more
                                appealing. Currently living in Toronto, ON,
                                Canada and hoping to find a place to work either
                                nearby or remotely to build upon my current
                                skills and learn from more experienced
                                individuals.
                            </p>
                        </Col>
                        <Col md={1} />
                    </Row>
                    <br />
                    <Row>
                        <Col xs={6} md={4}></Col>
                        <Col xs={12} md={8}></Col>
                    </Row>
                </Container>
            </Auxi>
        );
    }
}

export default About;
