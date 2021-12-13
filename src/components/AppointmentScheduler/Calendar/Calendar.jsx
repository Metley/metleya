import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Auxi from "../../../hoc/Auxi";

import {
    Typography,
    Grid,
    Card,
    CardContent,
    CardActions,
    Button,
    Paper,
} from "@material-ui/core";

class Calendar extends Component {
    state = {};

    render() {
        return (
            <Auxi>
                <h1>poop</h1>
                <Grid
                    container
                    xs={2}
                    style={{
                        border: "1px solid black",
                        minWidth: "25%",
                        minHeight: "250px",
                    }}
                >
                    <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="flex-start"
                    >
                        <Grid item>
                            <Typography variant="h2" component="h2">
                                {15}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item>{"no slots"}</Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item>{"no slots"}</Grid>
                    </Grid>
                </Grid>
                <Grid xs={2}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                14
                            </Typography>
                            <Typography
                                variant="h5"
                                component="h2"
                            ></Typography>
                            <Typography color="textSecondary"></Typography>
                            <Typography variant="body2" component="p">
                                <br />
                                No Slots
                                <br />
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid xs={2}>
                    <Paper
                        variant="outlined"
                        square
                        style={{
                            border: "1px solid black",
                            minWidth: "250px",
                            minHeight: "250px",
                        }}
                    >
                        <p>hello</p>
                    </Paper>
                </Grid>
            </Auxi>
        );
    }
}

export default Calendar;
