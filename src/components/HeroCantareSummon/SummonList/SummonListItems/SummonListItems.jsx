import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListItem, ListItemText } from "@material-ui/core";

const summonListItems = (props) => (
    <ListItem
        button
        selected={props.selected === props.heros}
        onClick={props.onSelect}
    >
        <ListItemText primary={props.type} secondary={props.heros} />
    </ListItem>
);

export default summonListItems;
