import React, { Component } from "react";
import Auxi from "../../hoc/Auxi";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

class Home extends Component {
    state = {};
    render() {
        return (
            <Auxi>
                <Container>
                    <Row>
                        <Col md={4}></Col>
                        <Col>
                            <h1 class="display-3">Home?</h1>
                        </Col>
                        <Col md={4}></Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={1} />
                        <Col md={5}></Col>
                        <Col md={5}>
                            <p class="text-justify">
                                Welcome to my website, this was created to help
                                myself learn and experiment with using React
                                while creating a portfolio to store my projects
                                and have them on display. Currently living in
                                Toronto, ON, Canada and hoping to find a place
                                to work either nearby or remotely to build upon
                                my current skills and learn from more
                                experienced individuals.
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

export default Home;
