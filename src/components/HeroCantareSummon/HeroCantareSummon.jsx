import React, { Component } from "react";
import Auxi from "../../hoc/Auxi";
import "bootstrap/dist/css/bootstrap.min.css";
import SummonList from "./SummonList/SummonList";
import SummonBox from "./SummonBox/SummonBox";
import { Grid, List, ListItem, ListItemText } from "@material-ui/core";

class HeroCantareSummon extends Component {
    state = {
        summonList: [
            {
                type: "Pick-Up Cube",
                heros: "Maschenny & Queen No-nane White",
            },
            {
                type: "Pick-Up Cube",
                heros: "Baylord Yama & Phantom Thief Liddie",
            },
            { type: "Dimension Cube", heros: "Oringal" },
        ],
        summonListSelected: "Maschenny & Queen No-nane White",
    };

    onSelectHandler = (title) => {
        const newSelect = this.state.summonList[title].heros;

        this.setState({ summonListSelected: newSelect });
    };

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
                        This a simple counter to keep track of death while
                        playing any game and with the ability to count up to any
                        number of plays. To save your Death Count for the future
                        you will need to sign in.
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={1} />
                    <Grid item xs={10} align="">
                        <Grid item xs={3} align="right">
                            <SummonList
                                summonList={this.state.summonList}
                                summonListSelected={
                                    this.state.summonListSelected
                                }
                                onSelect={this.onSelectHandler}
                            />
                        </Grid>
                        <Grid item xs={9} align="center">
                            {" "}
                            <SummonBox />{" "}
                        </Grid>
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </Auxi>
        );
    }
}

export default HeroCantareSummon;
