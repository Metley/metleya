import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./SummonList.css";
import SummonList from "../SummonList/SummonList";
import { Grid } from "@material-ui/core";

class BannerBox extends Component {
    state = {};

    render() {
        const summonList = Object.keys(this.props.summonList).map((pKey) => {
            return (
                <SummonListItems
                    key={pKey}
                    type={this.props.summonList[pKey].type}
                    heros={this.props.summonList[pKey].title}
                    cube={this.props.summonList[pKey].cube}
                    selected={this.props.summonListSelected.title}
                    onSelect={() => this.props.onSelect(pKey)}
                />
            );
        });

        return (
            <Grid
                container
                item
                xs={10}
                align=""
                wrap="wrap"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
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
                        summonList={this.state.summonList}
                        summonListSelected={this.state.summonListSelected}
                        onSelect={this.onSelectHandler}
                    />
                </Grid>
                <Grid item xs={9} align="center"></Grid>
            </Grid>
        );
    }
}

export default BannerBox;
