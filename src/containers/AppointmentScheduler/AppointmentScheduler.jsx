import React, { Component } from "react";
import Auxi from "../../hoc/Auxi";
import "bootstrap/dist/css/bootstrap.min.css";
import Scheduler from "../../components/AppointmentScheduler/Scheduler";
import {
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@material-ui/core";

class AppointmentScheduler extends Component {
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
                        <h1 className="display-3">Appointment Scheduler</h1>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        This project will be about creating appointment booking
                        tool which will display a calender and show which dates
                        and time slots are available to book with a simple and
                        clean UI. It will also pull its information from a
                        database and update when a new appointment is made.
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={1} />
                    <Grid item xs={10} align="center" justifyContent="center">
                        {/* <Scheduler /> */}
                        <br />
                        <br />
                        <Typography variant="h2"> Work in progress </Typography>
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </Auxi>
        );
    }
}

export default AppointmentScheduler;
