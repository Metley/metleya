import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Auxi from "../../../hoc/Auxi";
import { List, Grid } from "@material-ui/core";

import image from "../../../assets/images/HeroCantare/HeroIcons/bam.png";

class SummonBox extends Component {
    state = {
        heroList: [
            {
                heroName: "Bam",
                tier: "A",
                source: require("../../../assets/images/HeroCantare/HeroIcons/Bam.png"),
            },
            {
                heroName: "Ehwa Yeon",
                tier: "SS",
                source: require("../../../assets/images/HeroCantare/HeroIcons/Ehwa_Yeon.png"),
            },
            { heroName: "Kaiser", tier: "SS", source: "Oringal" },
        ],
    };

    render() {
        return (
            <Auxi>
                <Grid>
                    <Grid item></Grid>
                </Grid>
                <h1>poop</h1>
            </Auxi>
        );
    }
}

export default SummonBox;
