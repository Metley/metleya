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
                <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justify="center"
                >
                    <Grid item xs={1} />
                    <Grid item xs={10} align="center">
                        <h1 className="display-3">
                            Hero Cantare Summon Simulator
                        </h1>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        This a Summon Simulator from Hero Cantare, where you can
                        test your luck without needing to spend any money. For
                        each banner except the Original, you have an increased
                        chance to draw for those heros with a bonus of a
                        guaranteed banner hero for every 100 summons.
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={1} />
                    <Grid item xs={10} align="center">
                        <HeroCantareSummon />
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </Auxi>
        );
    }
}

export default HeroCantare;
