import React, { Component } from "react";
import Auxi from "../../../hoc/Auxi";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Typography,
    Card,
    CardMedia,
    CardContent,
    Slider,
    Collapse,
    IconButton,
    Grid,
    Chip,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class BetrayalCard extends Component {
    state = {
        expanded: false,
    };

    handleExpandClick = () => {
        this.setState((state) => ({
            expanded: !state.expanded,
        }));
    };

    render() {
        const allTraits = Object.keys(this.props.characterslist.traits).map(
            (trKey) => {
                return (
                    <Grid item key={trKey}>
                        <Chip
                            size="small"
                            color="primary"
                            key={trKey}
                            label={this.props.characterslist.traits[trKey]}
                        />
                    </Grid>
                );
            }
        );

        return (
            <Auxi>
                <Card style={{ maxWidth: 500 }}>
                    <CardMedia>
                        <img
                            src={this.props.characterslist.image.default}
                            alt={this.props.characterslist.name}
                            style={{
                                padding: "20px",
                                maxWidth: "100%",
                                maxHeight: "100%",
                            }}
                        />
                    </CardMedia>

                    <CardContent align="left">
                        <Typography
                            gutterBottom
                            variant="h4"
                            component={"span"}
                        >
                            {this.props.characterslist.name}
                        </Typography>
                        <Grid container direction="row" alignItems="flex-end">
                            <Grid item>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component={"span"}
                                    noWrap={false}
                                    style={{ maxWidth: 350 }}
                                >
                                    {this.props.characterslist.description}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <IconButton
                                    onClick={this.handleExpandClick}
                                    color="primary"
                                    aria-expanded={this.state.expanded}
                                    aria-label="show more"
                                    style={
                                        this.state.expanded
                                            ? {
                                                  transform: "rotate(180deg)",
                                              }
                                            : { transform: "rotate(0deg)" }
                                    }
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </Grid>
                        </Grid>

                        <Collapse
                            in={this.state.expanded}
                            timeout="auto"
                            unmountOnExit
                        >
                            <CardContent>
                                <Grid container alignItems="center" spacing={1}>
                                    {allTraits}
                                </Grid>
                            </CardContent>
                        </Collapse>
                        <br />
                        <Typography id="discrete-slider-restrict" gutterBottom>
                            Speed
                        </Typography>
                        <Slider
                            defaultValue={
                                this.props.characterslist.default.speed
                            }
                            step={null}
                            valueLabelDisplay="off"
                            aria-labelledby="discrete-slider-restrict"
                            marks={this.props.characterslist.speed}
                            max={8}
                        />
                        <Typography id="discrete-slider-restrict" gutterBottom>
                            Might
                        </Typography>
                        <Slider
                            defaultValue={
                                this.props.characterslist.default.might
                            }
                            step={null}
                            valueLabelDisplay="off"
                            aria-labelledby="discrete-slider-restrict"
                            marks={this.props.characterslist.might}
                            max={8}
                        />
                        <Typography id="discrete-slider-restrict" gutterBottom>
                            Sanity
                        </Typography>
                        <Slider
                            defaultValue={
                                this.props.characterslist.default.sanity
                            }
                            step={null}
                            valueLabelDisplay="off"
                            aria-labelledby="discrete-slider-restrict"
                            marks={this.props.characterslist.sanity}
                            max={8}
                        />
                        <Typography id="discrete-slider-restrict" gutterBottom>
                            Knowledge
                        </Typography>
                        <Slider
                            defaultValue={
                                this.props.characterslist.default.knowledge
                            }
                            step={null}
                            valueLabelDisplay="off"
                            aria-labelledby="discrete-slider-restrict"
                            marks={this.props.characterslist.knowledge}
                            max={8}
                        />
                    </CardContent>
                </Card>
            </Auxi>
        );
    }
}

export default BetrayalCard;
