import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";

const navigationbar = (props) => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Metley</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/About">About</Nav.Link>
                <NavDropdown title="Projects" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/DeathCounter">
                        Death Counter
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/BetrayalTracker">
                        Betrayal Tracker
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/HeroCantare">
                        Hero Cantare Summon Simulator
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/AppointmentScheduler">
                        Appointment Scheduler
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/">Coming Soon</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            {/* <Form inline>
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
            </Form> */}
        </Navbar.Collapse>
    </Navbar>
);

export default navigationbar;
