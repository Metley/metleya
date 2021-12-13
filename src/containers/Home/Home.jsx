import React, { Component } from "react";
import Auxi from "../../hoc/Auxi";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActionArea,
    Typography,
} from "@material-ui/core";

import herocantre from "../../assets/images/HeroCantare/UI/UI_HC_Title.png";

class Home extends Component {
    state = {
        projectList: [
            {
                name: "Death Counter",
                link: "/DeathCounter",
                image: require("../../assets/images/DeathCount/UI/UI_DC_Title.png"),
                description:
                    "To help you keep track deaths when a game doesn't do it for you.",
            },
            {
                name: "Betrayal Card Tracker",
                link: "/BetrayalTracker",
                image: require("../../assets/images/Betrayal/UI/UI_BHTH_Title.png"),
                description:
                    "Character tracker for Betrayal at House on the Hill since the sliders always fall off",
            },
            {
                name: "Hero Cantare Summon Simulator",
                link: "/HeroCantare",
                image: require("../../assets/images/HeroCantare/UI/UI_HC_Title.png"),
                description:
                    "A Summon Simulator from the mobile game Hero Cantare using that exact same odds, where you can test your luck without needing to spend.",
            },
            {
                name: "Appointment Scheduler",
                link: "/AppointmentScheduler",
                image: require("../../assets/images/AppointmentScheduler/UI/UI_AP_Title.png"),
                description: "Work in Progress",
            },
        ],
    };
    render() {
        const projectCardList = Object.keys(this.state.projectList).map(
            (pKey) => {
                return (
                    <Grid item xs={3} key={pKey} style={{ marginTop: "10px" }}>
                        <Card>
                            <CardActionArea
                                href={this.state.projectList[pKey].link}
                            >
                                <CardMedia>
                                    <img
                                        src={
                                            this.state.projectList[pKey].image
                                                .default
                                        }
                                        style={{
                                            marginTop: "20px",
                                            maxWidth: "100%",
                                            maxHeight: "100%",
                                        }}
                                    />
                                </CardMedia>
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        {this.state.projectList[pKey].name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        {
                                            this.state.projectList[pKey]
                                                .description
                                        }
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                );
            }
        );

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
                        <h1 className="display-3">Current Projects</h1>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <Grid container spacing={2} justify="center">
                            {projectCardList}
                        </Grid>
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </Auxi>
        );
    }
}

export default Home;
