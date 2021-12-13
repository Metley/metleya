import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LinearProgress, Typography, Box, Grid } from "@material-ui/core";

const LinearProgressWithLabel = (props) => (
    <div>
        <Grid container align="" wrap="wrap">
            <Grid item xs={12} align="center">
                <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{
                        color: "#ff9100",
                        textOverflow: "ellipsis",
                        textShadow: "0 0 10px #000000",
                    }}
                >
                    Guaranteed Summon for a Pick-Up Hero
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <LinearProgress variant="determinate" {...props} />
            </Grid>
            <Grid item xs={12} align="center">
                <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{
                        color: "white",
                        textOverflow: "ellipsis",
                        textShadow: "0 0 10px #000000",
                    }}
                >
                    {`${Math.round(props.value)}/100`}{" "}
                </Typography>
            </Grid>
        </Grid>
    </div>
);

export default LinearProgressWithLabel;
