import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListItem, ListItemText, Avatar } from "@material-ui/core";

const summonBoxItems = (props) => (
    <Avatar alt={props.heroName} src={props.imgSource} />
);

export default summonBoxItems;
