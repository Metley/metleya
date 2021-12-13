import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Auxi from "../../hoc/Auxi";
import Calendar from "./Calendar/Calendar";

import { Typography, Tabs, Tab, Box } from "@material-ui/core";

class Scheduler extends Component {
    state = {};

    render() {
        return <Calendar />;
    }
}

export default Scheduler;
