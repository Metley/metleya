import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
                    heros={this.props.summonList[pKey].heros}
                    selected={this.props.summonListSelected}
                    onSelect={() => this.props.onSelect(pKey)}
                />
            );
        });

        return <List> {summonList}</List>;
    }
}

export default SummonList;
