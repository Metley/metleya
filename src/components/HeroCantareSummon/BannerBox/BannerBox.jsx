import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SummonList from "../SummonList/SummonList";
import LinearProgressWithLabel from "../../UI/LinearProgressWithLabel/LinearProgressWithLabel";
import { Grid, Button } from "@material-ui/core";

class BannerBox extends Component {
    state = {};

    render() {
        return (
            <Grid container align="" wrap="wrap">
                <Grid
                    item
                    xs={3}
                    align="right"
                    style={{
                        height: "100%",
                        width: "100%",
                        overflow: "hidden",
                    }}
                >
                    <SummonList
                        summonList={this.props.summonList}
                        summonListSelected={this.props.summonListSelected}
                        onSelect={this.props.onSelect}
                    />
                </Grid>
                <Grid
                    container
                    item
                    xs={9}
                    align="center"
                    style={{
                        backgroundImage: `url(${this.props.summonListSelected.banner.default})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <Grid item xs={12} align="center" style={{ marginTop: 10 }}>
                        <LinearProgressWithLabel
                            style={{
                                marginLeft: 20,
                                marginRight: 20,
                            }}
                            value={this.props.summonListSelected.pity}
                        />
                    </Grid>
                    <Grid item xs={12} align="center">
                        {/* <img
                            src={this.props.summonListSelected.banner.default}
                            style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                            }}
                        /> */}
                    </Grid>
                    <Grid
                        container
                        align="center"
                        direction="row"
                        justify="center"
                        alignItems="flex-end"
                    >
                        <Button
                            onClick={this.props.onSummonHandler}
                            style={{
                                backgroundColor: "rgba(0, 0, 0, 0.4)",
                                color: "white",
                                margin: "5px",
                                textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF",
                            }}
                        >
                            Summon
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default BannerBox;
