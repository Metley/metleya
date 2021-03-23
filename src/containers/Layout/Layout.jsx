import React, { Component } from "react";
import Auxi from "../../hoc/Auxi";
import "bootstrap/dist/css/bootstrap.min.css";

import NavigationBar from "../../components/Navigation/NavigationBar/NavigationBar";
import DeathCounter from "../DeathCounter/DeathCounter";
import About from "../About/About";
import Home from "../Home/Home";
import BetrayalCards from "../BetrayalCards/BetrayalCards";
import { Button } from "react-bootstrap";

class Layout extends Component {
    state = {};

    render() {
        return (
            <Auxi>
                <NavigationBar />
                <main>{this.props.children}</main>
            </Auxi>
        );
    }
}

export default Layout;
