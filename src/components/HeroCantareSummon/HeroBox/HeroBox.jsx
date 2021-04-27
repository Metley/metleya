import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroBoxItem from "./HeroBoxItem/HeroBoxItem";
import backgroundHeroBox from "../../../assets/images/HeroCantare/Background/Back_HeroBox.png";
import { GridList } from "@material-ui/core";

class HeroBox extends Component {
    state = {};

    render() {
        var heroBoxOutput = <h1></h1>;

        if (this.props.heroList[0] !== undefined) {
            heroBoxOutput = Object.keys(this.props.heroList).map((pKey) => {
                return (
                    <HeroBoxItem
                        key={pKey}
                        img={this.props.heroList[pKey].source}
                        hero={this.props.heroList[pKey].heroName}
                        total={this.props.heroList[pKey].total}
                    />
                );
            });
        }

        return (
            <GridList
                cellHeight={"auto"}
                cols={6}
                spacing={10}
                style={{
                    flexWrap: "wrap",
                    backgroundImage: `url(${backgroundHeroBox})`,
                    justifyContent: "left",
                    overflow: "scroll",
                    height: "400px",
                }}
            >
                {heroBoxOutput}
            </GridList>
        );
    }
}

export default HeroBox;
