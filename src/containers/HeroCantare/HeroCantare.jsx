import React, { Component } from "react";
import Auxi from "../../hoc/Auxi";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroCantareSummon from "../../components/HeroCantareSummon/HeroCantareSummon";
import { Grid, List, ListItem, ListItemText } from "@material-ui/core";

class HeroCantare extends Component {
    state = {};
    render() {
        return (
            <Auxi>
                <HeroCantareSummon />
            </Auxi>
        );
    }
}

export default HeroCantare;
