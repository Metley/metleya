import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Grid,
} from "@material-ui/core";
import background from "../../../../assets/images/HeroCantare/Background/Back_BlueBox.png";
import Icon from "../../../../assets/images/HeroCantare/UI/UI_Cube_Blue.png";

const summonListItems = (props) => (
    <ListItem
        button
        selected={props.selected === props.heros}
        onClick={props.onSelect}
        style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",

            marginTop: "5px",
        }}
    >
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ marginTop: "5px" }}
        >
            <Grid item xs={3}>
                <ListItemAvatar>
                    <Avatar src={props.cube.default} />
                </ListItemAvatar>
            </Grid>
            <Grid item xs={9}>
                <h5
                    style={{
                        color: "#eb8aff",
                        margin: "5px",
                        textOverflow: "ellipsis",
                        textShadow: "0 0 10px #000000",
                    }}
                >
                    {props.type}
                </h5>
                <h6
                    style={{
                        color: "white",
                        margin: "5px",
                        textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF",
                    }}
                >
                    {props.heros}
                </h6>
            </Grid>
            {/* <Grid item xs={12}>
                <h6
                    style={{
                        color: "white",
                        margin: "5px",
                        textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF",
                    }}
                >
                    {props.heros}
                </h6>
            </Grid> */}
        </Grid>
    </ListItem>
);

export default summonListItems;
