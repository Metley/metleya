import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./SummonList.css";
import SummonListItems from "./SummonListItems/SummonListItems";
import { List } from "@material-ui/core";

class SummonList extends Component {
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
            <List
                style={{
                    height: "99%",
                    width: "100%",
                    overflow: "auto",
                    maxHeight: 500,
                    scrollbarColor: "red",
                }}
                className={classes}
            >
                {" "}
                {summonList}
            </List>
        );
    }
}

export default SummonList;
