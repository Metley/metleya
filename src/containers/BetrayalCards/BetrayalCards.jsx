import React, { Component } from "react";
import Auxi from "../../hoc/Auxi";
import Betrayal from "../../components/Betrayal/Betrayal";
import "bootstrap/dist/css/bootstrap.min.css";

import { Grid } from "@material-ui/core";

class BetrayalCards extends Component {
    state = {};

    valueLabelFormat(value) {
        return (
            this.state.characters[0].speed.findIndex(
                (mark) => mark.value === value
            ) + 1
        );
    }

    render() {
        return (
            <Auxi>
                <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justify="center"
                >
                    <Grid item xs={1} />
                    <Grid item xs={10} align="center">
                        <h1 className="display-3">Betrayal Card Tracker</h1>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        This a simple counter to keep track of death while
                        playing any game and with the ability to count up to any
                        number of plays. To save your Death Count for the future
                        you will need to sign in.
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={1} />
                    <Grid item xs={10} align="center">
                        <Betrayal />
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </Auxi>
        );
    }
}

export default BetrayalCards;
