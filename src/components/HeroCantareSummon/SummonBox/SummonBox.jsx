import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Auxi from "../../../hoc/Auxi";
import SummonBoxItem from "./SummonBoxItem/SummonBoxItem";
import PityBar from "../PityBar/PityBar";
import { Grid, Button } from "@material-ui/core";
import background from "../../../assets/images/HeroCantare/Background/Back_Banner.png";

class SummonBox extends Component {
    state = {
        heroSummonedRow1: [],
        heroSummonedRow2: [],
        lastSummon: "",
        heroSummonChance: { tierA: 84, tierS: 13, tierSS: 1, tierSSS: 2 },
    };

    onSummonHandler = (banner) => {
        const allHeros = [...this.props.heroList];
        // const tierAHeros = allHeros.filter((hero) => {
        //     return hero.tier === "A";
        // });

        const tierAHeros = allHeros.filter((hero) => hero.tier === "A");
        const tierSHeros = allHeros.filter((hero) => hero.tier === "S");
        const tierSSHeros = allHeros.filter(
            (hero) =>
                hero.tier === "SS" &&
                hero.heroName !== this.props.selected.hero1 &&
                hero.heroName !== this.props.selected.hero2
        );

        const bannerHero = allHeros.filter(
            (hero) =>
                hero.heroName === this.props.selected.hero1 ||
                hero.heroName === this.props.selected.hero2
        );
        console.log(bannerHero);
        console.log(tierSSHeros);

        const rawSummon = Array.from({ length: 10 }, () =>
            Math.floor(Math.random() * 100)
        );

        const finalSummon = Object.keys(rawSummon).map((pKey) => {
            const pull = Math.floor(Math.random() * 100);
            var summon = rawSummon[pKey];
            switch (true) {
                case rawSummon[pKey] < 84:
                    summon =
                        tierAHeros[
                            Math.floor(Math.random() * tierAHeros.length)
                        ];
                    break;
                case rawSummon[pKey] < 97:
                    summon =
                        tierSHeros[
                            Math.floor(Math.random() * tierSHeros.length)
                        ];
                    break;
                case rawSummon[pKey] < 98:
                    summon =
                        tierSSHeros[
                            Math.floor(Math.random() * tierSSHeros.length)
                        ];
                    break;
                case rawSummon[pKey] < 100:
                    if (bannerHero[0] !== undefined) {
                        summon =
                            bannerHero[
                                Math.floor(Math.random() * bannerHero.length)
                            ];
                    } else {
                        summon =
                            tierSSHeros[
                                Math.floor(Math.random() * tierSSHeros.length)
                            ];
                    }

                    break;
                default:
                    break;
            }
            return summon;
        });

        const summonRow1 = [...finalSummon].splice(0, 5);
        const summonRow2 = [...finalSummon].splice(5);

        this.props.onSummon(finalSummon);

        this.setState({
            heroSummonedRow1: summonRow1,
            heroSummonedRow2: summonRow2,
            lastSummon: this.props.selected.title,
        });
    };

    tierBackgroundHandler = (tier) => {
        let background;
        switch (true) {
            case tier === "SS":
                background = require("../../../assets/images/HeroCantare/Background/Circle_SS.png");
                break;
            case tier === "S":
                background = require("../../../assets/images/HeroCantare/Background/Circle_S.png");
                break;
            case tier === "A":
                background = require("../../../assets/images/HeroCantare/Background/Circle_A.png");
                break;
            default:
                background = require("../../../assets/images/HeroCantare/Background/Circle_A.png");
                break;
        }
        return background;
    };

    render() {
        const heroSummonedRow1 = Object.keys(this.props.heroSummonedRow1).map(
            (pKey) => {
                return (
                    <Grid item xs={2} key={pKey} style={{ marginTop: "10px" }}>
                        <SummonBoxItem
                            key={pKey}
                            imgSource={this.props.heroSummonedRow1[pKey].source}
                            heroName={
                                this.props.heroSummonedRow1[pKey].heroName
                            }
                            tier={this.props.heroSummonedRow1[pKey].tier}
                            background={
                                this.tierBackgroundHandler(
                                    this.props.heroSummonedRow1[pKey].tier
                                ).default
                            }
                        />
                    </Grid>
                );
            }
        );
        const heroSummonedRow2 = Object.keys(this.props.heroSummonedRow2).map(
            (pKey) => {
                return (
                    <Grid item xs={2} key={pKey}>
                        <SummonBoxItem
                            key={pKey}
                            imgSource={this.props.heroSummonedRow2[pKey].source}
                            heroName={
                                this.props.heroSummonedRow2[pKey].heroName
                            }
                            tier={this.props.heroSummonedRow2[pKey].tier}
                            background={
                                this.tierBackgroundHandler(
                                    this.props.heroSummonedRow2[pKey].tier
                                ).default
                            }
                        />
                    </Grid>
                );
            }
        );

        const heroSummonedRow1Names = Object.keys(
            this.props.heroSummonedRow1
        ).map((pKey) => {
            return (
                <Grid item xs={2} key={pKey}>
                    <p
                        style={{
                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                            color: "white",
                            margin: "5px",
                            textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF",
                        }}
                    >
                        {this.props.heroSummonedRow1[pKey].heroName}
                    </p>
                </Grid>
            );
        });

        const heroSummonedRow2Names = Object.keys(
            this.props.heroSummonedRow2
        ).map((pKey) => {
            return (
                <Grid item xs={2} key={pKey}>
                    <p
                        style={{
                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                            color: "white",
                            margin: "5px",
                            textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF",
                        }}
                    >
                        {this.props.heroSummonedRow2[pKey].heroName}
                    </p>
                </Grid>
            );
        });

        let output = this.props.showBanner ? (
            <Grid container direction="row"></Grid>
        ) : (
            <div>
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                >
                    {heroSummonedRow1}
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                >
                    {heroSummonedRow1Names}
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                >
                    {heroSummonedRow2}
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                >
                    {heroSummonedRow2Names}
                </Grid>
            </div>
        );

        return (
            <Auxi>
                <Grid container align="center">
                    <Grid item xs={12} align="center" style={{ marginTop: 10 }}>
                        <PityBar
                            value={this.props.selected.pity}
                            style={{
                                marginLeft: 20,
                                marginRight: 20,
                            }}
                        />
                    </Grid>
                </Grid>

                {output}
                <Button
                    onClick={this.props.onReturnHandler}
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        color: "white",
                        margin: "5px",
                        textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF",
                    }}
                >
                    Return
                </Button>
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
            </Auxi>
        );
    }
}

export default SummonBox;
