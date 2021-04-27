import React, { Component } from "react";
import Auxi from "../../hoc/Auxi";
import "bootstrap/dist/css/bootstrap.min.css";
import SummonList from "./SummonList/SummonList";
import SummonBox from "./SummonBox/SummonBox";
import HeroBox from "./HeroBox/HeroBox";
import { Grid } from "@material-ui/core";
import backgroundGacha from "../../assets/images/HeroCantare/Background/Back_Gacha.png";
import backgroundBanner from "../../assets/images/HeroCantare/Background/Back_Banner.png";

class HeroCantareSummon extends Component {
    state = {
        heroList: [
            {
                heroName: "666: Satan",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/666_Satan.png"),
            },
            {
                heroName: "Argyll",
                tier: "S",
                source: require("../../assets/images/HeroCantare/HeroIcons/Argyll.png"),
            },
            {
                heroName: "Arin",
                tier: "S",
                source: require("../../assets/images/HeroCantare/HeroIcons/Arin.png"),
            },
            {
                heroName: "Armes",
                tier: "S",
                source: require("../../assets/images/HeroCantare/HeroIcons/Armes.png"),
            },
            {
                heroName: "Bam & Ilypo Park",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Bam_Ilpyo_Park.png"),
            },
            {
                heroName: "Bam",
                tier: "A",
                source: require("../../assets/images/HeroCantare/HeroIcons/Bam.png"),
            },
            {
                heroName: "Baylord Yama",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Baylord_Yama.png"),
            },
            {
                heroName: "Black-March Bam",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Black_March_Bam.png"),
            },
            {
                heroName: "Casey",
                tier: "S",
                source: require("../../assets/images/HeroCantare/HeroIcons/Casey.png"),
            },
            {
                heroName: "Cat Eye Odette",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Cat_Eye_Odette.png"),
            },
            {
                heroName: "Charlotte",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Charlotte.png"),
            },
            {
                heroName: "Chi Chi",
                tier: "S",
                source: require("../../assets/images/HeroCantare/HeroIcons/Chi_Chi.png"),
            },
            {
                heroName: "Chi_Pong",
                tier: "S",
                source: require("../../assets/images/HeroCantare/HeroIcons/Chi_Pong.png"),
            },
            {
                heroName: "Chloris",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Chloris.png"),
            },
            {
                heroName: "Choco_Bibi",
                tier: "S",
                source: require("../../assets/images/HeroCantare/HeroIcons/Choco_Bibi.png"),
            },
            {
                heroName: "Claude",
                tier: "S",
                source: require("../../assets/images/HeroCantare/HeroIcons/Claude.png"),
            },
            {
                heroName: "Crusade Mira Yoo",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Crusade_Mira_Yoo.png"),
            },
            {
                heroName: "Curtis",
                tier: "S",
                source: require("../../assets/images/HeroCantare/HeroIcons/Curtis.png"),
            },
            {
                heroName: "D. Jahad",
                tier: "S",
                source: require("../../assets/images/HeroCantare/HeroIcons/D_Jahad.png"),
            },
            {
                heroName: "D. Khun Edahn",
                tier: "S",
                source: require("../../assets/images/HeroCantare/HeroIcons/D_Khun_Edahn.png"),
            },
            {
                heroName: "D Maschenny",
                tier: "A",
                source: require("../../assets/images/HeroCantare/HeroIcons/D_Maschenny.png"),
            },
            {
                heroName: "Daewi Han",
                tier: "S",
                source: require("../../assets/images/HeroCantare/HeroIcons/Daewi_Han.png"),
            },
            {
                heroName: "Daisy",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Daisy.png"),
            },
            {
                heroName: "Dark",
                tier: "S",
                source: require("../../assets/images/HeroCantare/HeroIcons/Dark.png"),
            },
            {
                heroName: "Ehwa Yeon",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Ehwa_Yeon.png"),
            },
            {
                heroName: "Elaine",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Elaine.png"),
            },
            {
                heroName: "Endorsi",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Endorsi.png"),
            },
            {
                heroName: "Flora",
                tier: "S",
                source: require("../../assets/images/HeroCantare/HeroIcons/Flora.png"),
            },
            {
                heroName: "Ghost Bride Hwaryun",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Ghost_Bride_Hwaryun.png"),
            },
            {
                heroName: "God-Killer Zero",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/God_Killer_Zero.png"),
            },
            {
                heroName: "Greatsword Warrior",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Greatsword_Warrior.png"),
            },
            {
                heroName: "Green-April Yuri Ha",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Green_April_Yuri_Ha.png"),
            },
            {
                heroName: "Haetae",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Haetae.png"),
            },
            {
                heroName: "Hardcore Leveling Warrior",
                tier: "A",
                source: require("../../assets/images/HeroCantare/HeroIcons/Hardcore_Leveling_Warrior.png"),
            },
            {
                heroName: "Heart Heater",
                tier: "S",
                source: require("../../assets/images/HeroCantare/HeroIcons/Heart_Heater.png"),
            },
            {
                heroName: "Heavenly Warlord & Dark",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Heavenly_Warlord_Dark.png"),
            },
            {
                heroName: "Heavenly Warlord",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Heavenly_Warlord.png"),
            },
            {
                heroName: "Hilda",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Hilda.png"),
            },
            {
                heroName: "Hwaryun",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Hwaryun.png"),
            },
            {
                heroName: "Idol Rockcrawler",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Idol_Rockcrawler.png"),
            },
            {
                heroName: "Ilpyo Park",
                tier: "S",
                source: require("../../assets/images/HeroCantare/HeroIcons/Ilpyo_Park.png"),
            },
            {
                heroName: "Jack",
                tier: "A",
                source: require("../../assets/images/HeroCantare/HeroIcons/Jack.png"),
            },
            {
                heroName: "Jade Emperor Daewi Han",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Jade_Emperor_Daewi_Han.png"),
            },
            {
                heroName: "Jinsung Ha",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Jinsung_Ha.png"),
            },
            {
                heroName: "Jue Viole Grace",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Jue_Viole_Grace.png"),
            },
            {
                heroName: "Kaiser",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Kaiser.png"),
            },
            {
                heroName: "Khun Aguero",
                tier: "S",
                source: require("../../assets/images/HeroCantare/HeroIcons/Khun_Aguero.png"),
            },
            {
                heroName: "King Dark",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/King_Dark.png"),
            },
            {
                heroName: "King Uma",
                tier: "A",
                source: require("../../assets/images/HeroCantare/HeroIcons/King_Uma.png"),
            },
            {
                heroName: "Liddie",
                tier: "A",
                source: require("../../assets/images/HeroCantare/HeroIcons/Liddie.png"),
            },
            {
                heroName: "Light",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Light.png"),
            },
            {
                heroName: "Lime",
                tier: "S",
                source: require("../../assets/images/HeroCantare/HeroIcons/Lime.png"),
            },
            {
                heroName: "Maitreya Mujin Park",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Maitreya_Mujin_Park.png"),
            },
            {
                heroName: "Mame Shiba Daisy",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Mame_Shiba_Daisy.png"),
            },
            {
                heroName: "Manjin Sang",
                tier: "S",
                source: require("../../assets/images/HeroCantare/HeroIcons/Manjin_Sang.png"),
            },
            {
                heroName: "Maschenny",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Maschenny.png"),
            },
            {
                heroName: "Master Pooh Upooh",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Master_Pooh_Upooh.png"),
            },
            {
                heroName: "Max Level Warrior",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Max_Level_Warrior.png"),
            },
            {
                heroName: "Mira Yoo",
                tier: "A",
                source: require("../../assets/images/HeroCantare/HeroIcons/Mira_Yoo.png"),
            },
            {
                heroName: "Mori Jin",
                tier: "A",
                source: require("../../assets/images/HeroCantare/HeroIcons/Mori_Jin.png"),
            },
            {
                heroName: "Night Queen Zero",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Night_Queen_Zero.png"),
            },
            {
                heroName: "Nine Tailed Ilypo Park",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Nine_Tailed_Ilpyo_Park.png"),
            },
            {
                heroName: "No-name",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/No_Name.png"),
            },
            {
                heroName: "Odette",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Odette.png"),
            },
            {
                heroName: "Phantom Thief Liddie",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Phantom_Thief_Liddie.png"),
            },
            {
                heroName: "Pooh Upooh",
                tier: "A",
                source: require("../../assets/images/HeroCantare/HeroIcons/Pooh_Upooh.png"),
            },
            {
                heroName: "Prime King Uma",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Prime_King_Uma.png"),
            },
            {
                heroName: "Pure Green Arin",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Pure_Green_Arin.png"),
            },
            {
                heroName: "Queen No-name & White",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Queen_No_Name_White.png"),
            },
            {
                heroName: "Queen No-name",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Queen_No_Name.png"),
            },
            {
                heroName: "Rachel",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Rachel.png"),
            },
            {
                heroName: "Rak Wrathraiser",
                tier: "A",
                source: require("../../assets/images/HeroCantare/HeroIcons/Rak_Wrathraiser.png"),
            },
            {
                heroName: "Rockcrawler",
                tier: "A",
                source: require("../../assets/images/HeroCantare/HeroIcons/Rockcrawler.png"),
            },
            {
                heroName: "Sora",
                tier: "A",
                source: require("../../assets/images/HeroCantare/HeroIcons/Sora.png"),
            },
            {
                heroName: "Sujin Lee",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Sujin_Lee.png"),
            },
            {
                heroName: "Sweet Dream Charlotte",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Sweet_Dream_Charlotte.png"),
            },
            {
                heroName: "Taek Jegal",
                tier: "S",
                source: require("../../assets/images/HeroCantare/HeroIcons/Taek_Jegal.png"),
            },
            {
                heroName: "The King",
                tier: "S",
                source: require("../../assets/images/HeroCantare/HeroIcons/The_King.png"),
            },
            {
                heroName: "Urek Mazino",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Urek_Mazino.png"),
            },
            {
                heroName: "Uriel",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Uriel.png"),
            },
            {
                heroName: "Valkyrie",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Valkyrie.png"),
            },
            {
                heroName: "White Albelda",
                tier: "S",
                source: require("../../assets/images/HeroCantare/HeroIcons/White_Albelda.png"),
            },
            {
                heroName: "White",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/White.png"),
            },
            {
                heroName: "Witch of the West Mira Yoo",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Witch_Of_The_West_Mira_Yoo.png"),
            },
            {
                heroName: "Yeon Flame Khun",
                tier: "SS",
                source: require("../../assets/images/HeroCantare/HeroIcons/Yeon_Flame_Khun.png"),
            },
            {
                heroName: "Yuri Ha",
                tier: "S",
                source: require("../../assets/images/HeroCantare/HeroIcons/Yuri_Ha.png"),
            },
            {
                heroName: "Zero",
                tier: "S",
                source: require("../../assets/images/HeroCantare/HeroIcons/Zero.png"),
            },
        ],
        heroBoxList: [],
        summonList: [
            {
                type: "Pick-Up Cube",
                title: "Rachel & Sujin Lee",
                hero1: "Rachel",
                hero2: "Sujin Lee",
                banner: require("../../assets/images/HeroCantare/Banner/Banner_Rachel_Sujin.png"),
                cube: require("../../assets/images/HeroCantare/UI/UI_Cube_Blue.png"),
            },
            {
                type: "Pick-Up Cube",
                title: "Baylord Yama & Phantom Thief Liddie",
                hero1: "Baylord Yama",
                hero2: "Phantom Thief Liddie",
                banner: require("../../assets/images/HeroCantare/Banner/Banner_Yama_Liddie.png"),
                cube: require("../../assets/images/HeroCantare/UI/UI_Cube_Blue.png"),
            },
            {
                type: "Pick-Up Cube",
                title: "Ghost Bride Hwaryun & Uriel",
                hero1: "Ghost Bride Hwaryun",
                hero2: "Uriel",
                banner: require("../../assets/images/HeroCantare/Banner/Banner_Ghost_Uriel.png"),
                cube: require("../../assets/images/HeroCantare/UI/UI_Cube_Blue.png"),
            },
            {
                type: "Pick-Up Cube",
                title: "Idol Rockcrawler & King Dark",
                hero1: "Idol Rockcrawler",
                hero2: "King Dark",
                banner: require("../../assets/images/HeroCantare/Banner/Banner_Idol_Dark.png"),
                cube: require("../../assets/images/HeroCantare/UI/UI_Cube_Blue.png"),
            },
            {
                type: "Dimension Cube",
                title: "Orginal",
                hero1: "",
                hero2: "",
                banner: require("../../assets/images/HeroCantare/Banner/Banner_Jinsung_Valk.png"),
                cube: require("../../assets/images/HeroCantare/UI/UI_Cube_Yellow.png"),
            },
        ],
        summonListSelected: {
            title: "Rachel & Sujin Lee",
            hero1: "Rachel",
            hero2: "Sujin Lee",
            selected: true,
            banner: require("../../assets/images/HeroCantare/Banner/Banner_Rachel_Sujin.png"),
            cube: require("../../assets/images/HeroCantare/UI/UI_Cube_Blue.png"),
        },
        summonedHeros: [],
    };

    onSelectHandler = (title) => {
        const newSelect = { ...this.state.summonList[title], selected: true };

        this.setState({ summonListSelected: newSelect });
    };

    onSummonHandler = (heroList) => {
        const newSummons = [...heroList];
        const currentBox = [...this.state.heroBoxList];
        const currentSelected = { ...this.state.summonListSelected };
        currentSelected.selected = false;

        var newBox;

        const tempSummon = [...heroList];

        //new array which counts the duplicate summons and replaces duplicate with null
        const convertedSummonList = Object.keys(newSummons).map((pKey) => {
            var newSummon;
            var duplicate = 1;
            for (
                var hero = 1 + parseInt(pKey);
                hero < tempSummon.length;
                hero++
            ) {
                if (tempSummon[pKey] === tempSummon[hero]) {
                    duplicate++;
                    tempSummon[hero] = null;
                }
            }

            if (tempSummon[pKey] !== null) {
                newSummon = {
                    heroName: tempSummon[pKey].heroName,
                    tier: tempSummon[pKey].tier,
                    source: tempSummon[pKey].source,
                    total: duplicate,
                };
            } else {
                newSummon = null;
            }

            return newSummon;
        });

        //filter out all of the null objects
        const refactoredSummonList = convertedSummonList.filter(
            (hero) => hero !== null
        );

        if (currentBox[0] !== undefined) {
            //filtering out the duplicate between current summonbox and herobox and replacing with null
            const newHeroList = Object.keys(refactoredSummonList).map(
                (pKey) => {
                    var newSummon;

                    for (var hero = 0; hero < currentBox.length; hero++) {
                        if (
                            refactoredSummonList[pKey].heroName ===
                            currentBox[hero].heroName
                        ) {
                            currentBox[hero].total +=
                                refactoredSummonList[pKey].total;
                            return null;
                        } else if (currentBox.length === hero + 1) {
                            const newHero = {
                                heroName: refactoredSummonList[pKey].heroName,
                                tier: refactoredSummonList[pKey].tier,
                                source: refactoredSummonList[pKey].source,
                                total: refactoredSummonList[pKey].total,
                            };

                            newSummon = newHero;
                        }
                    }

                    return newSummon;
                }
            );

            //removing all null from the summonlist
            const refactoredNewHeroList = newHeroList.filter(
                (hero) => hero !== null
            );

            newBox = [...currentBox, ...refactoredNewHeroList];
        } else {
            newBox = [...refactoredSummonList];
        }

        this.setState({
            summonedHeros: newSummons,
            heroBoxList: newBox,
            summonListSelected: currentSelected,
        });
    };

    render() {
        let background = this.state.summonListSelected.selected
            ? backgroundBanner
            : backgroundGacha;

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
                        <h1 className="display-3">
                            Hero Cantare Summon Simulator
                        </h1>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        This a Summon Simulator from Hero Cantare, where you can
                        test your luck without needing to spend any money. For
                        each banner except the Original, you have an increased
                        chance to draw for those heros with a bonus of a
                        guaranteed banner hero for every 100 summons.
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={1} />
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
                                summonListSelected={
                                    this.state.summonListSelected
                                }
                                onSelect={this.onSelectHandler}
                            />
                        </Grid>
                        <Grid item xs={9} align="center">
                            {" "}
                            <SummonBox
                                heroList={this.state.heroList}
                                selected={this.state.summonListSelected}
                                onSummon={this.onSummonHandler}
                            />{" "}
                        </Grid>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={1} />
                    <Grid container item xs={10} align="">
                        <Grid item xs={12}>
                            <HeroBox heroList={this.state.heroBoxList} />
                        </Grid>
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </Auxi>
        );
    }
}

export default HeroCantareSummon;
