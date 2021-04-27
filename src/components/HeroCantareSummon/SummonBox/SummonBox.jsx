import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Auxi from "../../../hoc/Auxi";
import SummonBoxItem from "./SummonBoxItem/SummonBoxItem";
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
        const heroSummonedRow1 = Object.keys(this.state.heroSummonedRow1).map(
            (pKey) => {
                return (
                    <Grid item xs={2} key={pKey} style={{ marginTop: "10px" }}>
                        <SummonBoxItem
                            key={pKey}
                            imgSource={this.state.heroSummonedRow1[pKey].source}
                            heroName={
                                this.state.heroSummonedRow1[pKey].heroName
                            }
                            tier={this.state.heroSummonedRow1[pKey].tier}
                            background={
                                this.tierBackgroundHandler(
                                    this.state.heroSummonedRow1[pKey].tier
                                ).default
                            }
                        />
                    </Grid>
                );
            }
        );
        const heroSummonedRow2 = Object.keys(this.state.heroSummonedRow2).map(
            (pKey) => {
                return (
                    <Grid item xs={2} key={pKey}>
                        <SummonBoxItem
                            key={pKey}
                            imgSource={this.state.heroSummonedRow2[pKey].source}
                            heroName={
                                this.state.heroSummonedRow2[pKey].heroName
                            }
                            tier={this.state.heroSummonedRow2[pKey].tier}
                            background={
                                this.tierBackgroundHandler(
                                    this.state.heroSummonedRow2[pKey].tier
                                ).default
                            }
                        />
                    </Grid>
                );
            }
        );

        let output = this.props.selected.selected ? (
            <Grid container direction="row">
                <img
                    src={this.props.selected.banner.default}
                    style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                    }}
                />
            </Grid>
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
                    {heroSummonedRow2}
                </Grid>
            </div>
        );

        return (
            <Auxi>
                {output}
                <Button onClick={this.onSummonHandler}>Summon</Button>
            </Auxi>
        );
    }
}

export default SummonBox;
