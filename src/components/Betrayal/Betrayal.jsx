import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BetrayalCard from "./BetrayalCard/BetrayalCard";
import PropTypes from "prop-types";
import Auxi from "../../hoc/Auxi";

import { Typography, Tabs, Tab, Box } from "@material-ui/core";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component={"span"}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

class Betrayal extends Component {
    state = {
        characters: [
            {
                name: "Missy Dubourde",
                description:
                    "A creepy little girl, who wants to be a doctor. She cuts up dead things, for fun. Missy then has nightmares about them.",
                image: require("../../assets/images/Betrayal/Missy_Dubourde.png"),
                traits: [
                    "Color: Yellow",
                    "Age: 9",
                    "Birthday: Febuary 14",
                    "Hobbies: Swimming, Medicine",
                    "Fears: Dead things coming back to life to haunt her",
                ],
                default: { speed: 3, might: 4, sanity: 3, knowledge: 4 },
                speed: [
                    { value: 0, label: "0" },
                    { value: 1, label: "3" },
                    { value: 2, label: "4" },
                    { value: 3, label: "5" },
                    { value: 4, label: "6" },
                    { value: 5, label: "6" },
                    { value: 6, label: "6" },
                    { value: 7, label: "7" },
                    { value: 8, label: "7" },
                ],
                might: [
                    { value: 0, label: "0" },
                    { value: 1, label: "2" },
                    { value: 2, label: "3" },
                    { value: 3, label: "3" },
                    { value: 4, label: "3" },
                    { value: 5, label: "4" },
                    { value: 6, label: "5" },
                    { value: 7, label: "6" },
                    { value: 8, label: "7" },
                ],
                sanity: [
                    { value: 0, label: "0" },
                    { value: 1, label: "1" },
                    { value: 2, label: "2" },
                    { value: 3, label: "3" },
                    { value: 4, label: "4" },
                    { value: 5, label: "5" },
                    { value: 6, label: "5" },
                    { value: 7, label: "6" },
                    { value: 8, label: "7" },
                ],
                knowledge: [
                    { value: 0, label: "0" },
                    { value: 1, label: "2" },
                    { value: 2, label: "3" },
                    { value: 3, label: "4" },
                    { value: 4, label: "4" },
                    { value: 5, label: "5" },
                    { value: 6, label: "6" },
                    { value: 7, label: "6" },
                    { value: 8, label: "6" },
                ],
                expanded: false,
            },
            {
                name: "Zoe Ingstrom",
                description:
                    "Zoe has an implied tragic story. Raised in an unhappy home, she uses dolls to express her emotions.",
                image: require("../../assets/images/Betrayal/Zoe_Ingstrom.png"),
                traits: [
                    "Color: Yellow",
                    "Age: 8",
                    "Birthday: November 5th",
                    "Hobbies: Dolls, Music",
                    "Fears: The Boogeyman.",
                ],
                default: { speed: 4, might: 4, sanity: 3, knowledge: 3 },
                speed: [
                    { value: 0, label: "0" },
                    { value: 1, label: "4" },
                    { value: 2, label: "4" },
                    { value: 3, label: "4" },
                    { value: 4, label: "4" },
                    { value: 5, label: "5" },
                    { value: 6, label: "6" },
                    { value: 7, label: "8" },
                    { value: 8, label: "8" },
                ],
                might: [
                    { value: 0, label: "0" },
                    { value: 1, label: "2" },
                    { value: 2, label: "2" },
                    { value: 3, label: "3" },
                    { value: 4, label: "3" },
                    { value: 5, label: "4" },
                    { value: 6, label: "4" },
                    { value: 7, label: "6" },
                    { value: 8, label: "7" },
                ],
                sanity: [
                    { value: 0, label: "0" },
                    { value: 1, label: "3" },
                    { value: 2, label: "4" },
                    { value: 3, label: "5" },
                    { value: 4, label: "5" },
                    { value: 5, label: "6" },
                    { value: 6, label: "6" },
                    { value: 7, label: "7" },
                    { value: 8, label: "8" },
                ],
                knowledge: [
                    { value: 0, label: "0" },
                    { value: 1, label: "1" },
                    { value: 2, label: "2" },
                    { value: 3, label: "3" },
                    { value: 4, label: "4" },
                    { value: 5, label: "4" },
                    { value: 6, label: "5" },
                    { value: 7, label: "5" },
                    { value: 8, label: "5" },
                ],
                expanded: false,
            },
            {
                name: "Jenny LeClerc",
                description:
                    "A quiet bookworm whose mother disappeared when she was younger. Jenny feels always alone.",
                image: require("../../assets/images/Betrayal/Jenny_LeClerc.png"),
                traits: [
                    "Color: Purple",
                    "Age: 21",
                    "Birthday: March 4th",
                    "Hobbies: Reading, Soccer ",
                    "Fears: Being trapped in a crowd or lost in the open air.",
                ],
                default: { speed: 4, might: 3, sanity: 5, knowledge: 3 },
                speed: [
                    { value: 0, label: "0" },
                    { value: 1, label: "2" },
                    { value: 2, label: "3" },
                    { value: 3, label: "4" },
                    { value: 4, label: "4" },
                    { value: 5, label: "4" },
                    { value: 6, label: "5" },
                    { value: 7, label: "6" },
                    { value: 8, label: "8" },
                ],
                might: [
                    { value: 0, label: "0" },
                    { value: 1, label: "3" },
                    { value: 2, label: "4" },
                    { value: 3, label: "4" },
                    { value: 4, label: "4" },
                    { value: 5, label: "4" },
                    { value: 6, label: "5" },
                    { value: 7, label: "6" },
                    { value: 8, label: "8" },
                ],
                sanity: [
                    { value: 0, label: "0" },
                    { value: 1, label: "1" },
                    { value: 2, label: "1" },
                    { value: 3, label: "2" },
                    { value: 4, label: "4" },
                    { value: 5, label: "3" },
                    { value: 6, label: "3" },
                    { value: 7, label: "5" },
                    { value: 8, label: "6" },
                ],
                knowledge: [
                    { value: 0, label: "0" },
                    { value: 1, label: "2" },
                    { value: 2, label: "3" },
                    { value: 3, label: "3" },
                    { value: 4, label: "4" },
                    { value: 5, label: "4" },
                    { value: 6, label: "5" },
                    { value: 7, label: "6" },
                    { value: 8, label: "8" },
                ],
                expanded: false,
            },
            {
                name: "Heather Granville",
                description:
                    "Seen as perfect in both her eyes and the eyes of others, when things aren’t perfect she suffers from headaches. She keeps smiling anyway.",
                image: require("../../assets/images/Betrayal/Heather_Granville.png"),
                traits: [
                    "Color: Purple",
                    "Age: 18",
                    "Birthday: August 2nd",
                    "Hobbies: Television, Shopping",
                    "Fears: Not being perfect.",
                ],
                default: { speed: 3, might: 3, sanity: 3, knowledge: 5 },
                speed: [
                    { value: 0, label: "0" },
                    { value: 1, label: "3" },
                    { value: 2, label: "3" },
                    { value: 3, label: "4" },
                    { value: 4, label: "5" },
                    { value: 5, label: "6" },
                    { value: 6, label: "6" },
                    { value: 7, label: "7" },
                    { value: 8, label: "8" },
                ],
                might: [
                    { value: 0, label: "0" },
                    { value: 1, label: "3" },
                    { value: 2, label: "3" },
                    { value: 3, label: "3" },
                    { value: 4, label: "4" },
                    { value: 5, label: "5" },
                    { value: 6, label: "6" },
                    { value: 7, label: "7" },
                    { value: 8, label: "8" },
                ],
                sanity: [
                    { value: 0, label: "0" },
                    { value: 1, label: "3" },
                    { value: 2, label: "3" },
                    { value: 3, label: "3" },
                    { value: 4, label: "4" },
                    { value: 5, label: "5" },
                    { value: 6, label: "6" },
                    { value: 7, label: "6" },
                    { value: 8, label: "6" },
                ],
                knowledge: [
                    { value: 0, label: "0" },
                    { value: 1, label: "2" },
                    { value: 2, label: "3" },
                    { value: 3, label: "3" },
                    { value: 4, label: "4" },
                    { value: 5, label: "5" },
                    { value: 6, label: "6" },
                    { value: 7, label: "7" },
                    { value: 8, label: "8" },
                ],
                expanded: false,
            },
            {
                name: "Madame Zostra",
                description:
                    "Also known as Belladina, Madame Zostra is a tarot card reader and tea-leaf reader with her own stay-at-home astrology business.",
                image: require("../../assets/images/Betrayal/Madame_Zostra.png"),
                traits: [
                    "Color: Blue",
                    "Age: 37",
                    "Birthday: December 10th",
                    "Hobbies: Astrology, Cooking, Baseball",
                    "Fears: Death, especially that of her self.",
                ],
                default: { speed: 3, might: 4, sanity: 3, knowledge: 4 },
                speed: [
                    { value: 0, label: "0" },
                    { value: 1, label: "2" },
                    { value: 2, label: "3" },
                    { value: 3, label: "3" },
                    { value: 4, label: "5" },
                    { value: 5, label: "5" },
                    { value: 6, label: "6" },
                    { value: 7, label: "6" },
                    { value: 8, label: "7" },
                ],
                might: [
                    { value: 0, label: "0" },
                    { value: 1, label: "2" },
                    { value: 2, label: "3" },
                    { value: 3, label: "3" },
                    { value: 4, label: "4" },
                    { value: 5, label: "5" },
                    { value: 6, label: "5" },
                    { value: 7, label: "5" },
                    { value: 8, label: "6" },
                ],
                sanity: [
                    { value: 0, label: "0" },
                    { value: 1, label: "4" },
                    { value: 2, label: "4" },
                    { value: 3, label: "4" },
                    { value: 4, label: "5" },
                    { value: 5, label: "6" },
                    { value: 6, label: "7" },
                    { value: 7, label: "8" },
                    { value: 8, label: "8" },
                ],
                knowledge: [
                    { value: 0, label: "0" },
                    { value: 1, label: "1" },
                    { value: 2, label: "3" },
                    { value: 3, label: "4" },
                    { value: 4, label: "4" },
                    { value: 5, label: "4" },
                    { value: 6, label: "5" },
                    { value: 7, label: "6" },
                    { value: 8, label: "6" },
                ],
                expanded: false,
            },
            {
                name: "Vivian Lopez",
                description:
                    "A small bookshop owner who, when finances become difficult, has thoughts of arson.",
                image: require("../../assets/images/Betrayal/Vivian_Lopez.png"),
                traits: [
                    "Color: Blue",
                    "Age: 42",
                    "Birthday: January 11th",
                    "Hobbies: Old Movies, Horses",
                    "Fears: The same as one of her greatest loves – fire.",
                ],
                default: { speed: 4, might: 3, sanity: 3, knowledge: 4 },
                speed: [
                    { value: 0, label: "0" },
                    { value: 1, label: "3" },
                    { value: 2, label: "4" },
                    { value: 3, label: "4" },
                    { value: 4, label: "4" },
                    { value: 5, label: "4" },
                    { value: 6, label: "6" },
                    { value: 7, label: "7" },
                    { value: 8, label: "8" },
                ],
                might: [
                    { value: 0, label: "0" },
                    { value: 1, label: "2" },
                    { value: 2, label: "2" },
                    { value: 3, label: "2" },
                    { value: 4, label: "4" },
                    { value: 5, label: "4" },
                    { value: 6, label: "5" },
                    { value: 7, label: "6" },
                    { value: 8, label: "6" },
                ],
                sanity: [
                    { value: 0, label: "0" },
                    { value: 1, label: "4" },
                    { value: 2, label: "4" },
                    { value: 3, label: "4" },
                    { value: 4, label: "5" },
                    { value: 5, label: "6" },
                    { value: 6, label: "7" },
                    { value: 7, label: "8" },
                    { value: 8, label: "8" },
                ],
                knowledge: [
                    { value: 0, label: "0" },
                    { value: 1, label: "4" },
                    { value: 2, label: "5" },
                    { value: 3, label: "5" },
                    { value: 4, label: "5" },
                    { value: 5, label: "5" },
                    { value: 6, label: "6" },
                    { value: 7, label: "6" },
                    { value: 8, label: "7" },
                ],
                expanded: false,
            },
            {
                name: "Darrin “Flash” Williams",
                description:
                    "Flash is a paranoid runner, who can’t help but shake the feeling that something is chasing him.",
                image: require("../../assets/images/Betrayal/Darrin_Flash_Williams.png"),
                traits: [
                    "Color: Red",
                    "Age: 20",
                    "Birthday: June 6th",
                    "Hobbies: Track, Music, Shakespearean Literature",
                    "Fears: Getting caught by that which is chasing him.",
                ],
                default: { speed: 5, might: 3, sanity: 3, knowledge: 3 },
                speed: [
                    { value: 0, label: "0" },
                    { value: 1, label: "4" },
                    { value: 2, label: "4" },
                    { value: 3, label: "4" },
                    { value: 4, label: "5" },
                    { value: 5, label: "6" },
                    { value: 6, label: "7" },
                    { value: 7, label: "7" },
                    { value: 8, label: "8" },
                ],
                might: [
                    { value: 0, label: "0" },
                    { value: 1, label: "2" },
                    { value: 2, label: "3" },
                    { value: 3, label: "3" },
                    { value: 4, label: "4" },
                    { value: 5, label: "5" },
                    { value: 6, label: "6" },
                    { value: 7, label: "6" },
                    { value: 8, label: "7" },
                ],
                sanity: [
                    { value: 0, label: "0" },
                    { value: 1, label: "1" },
                    { value: 2, label: "2" },
                    { value: 3, label: "3" },
                    { value: 4, label: "4" },
                    { value: 5, label: "5" },
                    { value: 6, label: "5" },
                    { value: 7, label: "5" },
                    { value: 8, label: "7" },
                ],
                knowledge: [
                    { value: 0, label: "0" },
                    { value: 1, label: "2" },
                    { value: 2, label: "3" },
                    { value: 3, label: "3" },
                    { value: 4, label: "4" },
                    { value: 5, label: "5" },
                    { value: 6, label: "5" },
                    { value: 7, label: "5" },
                    { value: 8, label: "7" },
                ],
                expanded: false,
            },
            {
                name: "Ox Bellows",
                description:
                    "A big kid who once had to lash out. Ox is now haunted by his past and what he did that one time.",
                image: require("../../assets/images/Betrayal/Ox_Bellows.png"),
                traits: [
                    "Color: Red",
                    "Age: 23",
                    "Birthday: October 18th",
                    "Hobbies: Football, Shiny Objects",
                    "Fears: The dark.",
                ],
                default: { speed: 5, might: 3, sanity: 3, knowledge: 3 },
                speed: [
                    { value: 0, label: "0" },
                    { value: 1, label: "2" },
                    { value: 2, label: "2" },
                    { value: 3, label: "2" },
                    { value: 4, label: "3" },
                    { value: 5, label: "4" },
                    { value: 6, label: "5" },
                    { value: 7, label: "5" },
                    { value: 8, label: "6" },
                ],
                might: [
                    { value: 0, label: "0" },
                    { value: 1, label: "4" },
                    { value: 2, label: "5" },
                    { value: 3, label: "5" },
                    { value: 4, label: "6" },
                    { value: 5, label: "6" },
                    { value: 6, label: "7" },
                    { value: 7, label: "8" },
                    { value: 8, label: "8" },
                ],
                sanity: [
                    { value: 0, label: "0" },
                    { value: 1, label: "2" },
                    { value: 2, label: "2" },
                    { value: 3, label: "3" },
                    { value: 4, label: "4" },
                    { value: 5, label: "5" },
                    { value: 6, label: "5" },
                    { value: 7, label: "6" },
                    { value: 8, label: "7" },
                ],
                knowledge: [
                    { value: 0, label: "0" },
                    { value: 1, label: "2" },
                    { value: 2, label: "2" },
                    { value: 3, label: "3" },
                    { value: 4, label: "3" },
                    { value: 5, label: "5" },
                    { value: 6, label: "5" },
                    { value: 7, label: "6" },
                    { value: 8, label: "6" },
                ],
                expanded: false,
            },
            {
                name: "Brandon Jaspers",
                description:
                    "A kid who never liked playing with traditional toys, Brandon could swear his old puppet was moving closer to him when he slept.",
                image: require("../../assets/images/Betrayal/Brandon_Jasper.png"),
                traits: [
                    "Color: Green",
                    "Age: 12",
                    "Birthday: May 12th",
                    "Hobbies: Computers, Camping, Hockey",
                    "Fears: Puppets, especially those of the clown variety.",
                ],
                default: { speed: 3, might: 4, sanity: 4, knowledge: 3 },
                speed: [
                    { value: 0, label: "0" },
                    { value: 1, label: "3" },
                    { value: 2, label: "4" },
                    { value: 3, label: "4" },
                    { value: 4, label: "4" },
                    { value: 5, label: "5" },
                    { value: 6, label: "6" },
                    { value: 7, label: "7" },
                    { value: 8, label: "8" },
                ],
                might: [
                    { value: 0, label: "0" },
                    { value: 1, label: "2" },
                    { value: 2, label: "3" },
                    { value: 3, label: "3" },
                    { value: 4, label: "4" },
                    { value: 5, label: "5" },
                    { value: 6, label: "6" },
                    { value: 7, label: "6" },
                    { value: 8, label: "7" },
                ],
                sanity: [
                    { value: 0, label: "0" },
                    { value: 1, label: "3" },
                    { value: 2, label: "3" },
                    { value: 3, label: "3" },
                    { value: 4, label: "4" },
                    { value: 5, label: "5" },
                    { value: 6, label: "6" },
                    { value: 7, label: "7" },
                    { value: 8, label: "8" },
                ],
                knowledge: [
                    { value: 0, label: "0" },
                    { value: 1, label: "1" },
                    { value: 2, label: "3" },
                    { value: 3, label: "3" },
                    { value: 4, label: "5" },
                    { value: 5, label: "5" },
                    { value: 6, label: "6" },
                    { value: 7, label: "6" },
                    { value: 8, label: "7" },
                ],
                expanded: false,
            },
            {
                name: "Peter Akimoto",
                description:
                    "Seriously bullied by his family, Peter liked to hide under his house and look at bugs. He wants to be an entomologist.",
                image: require("../../assets/images/Betrayal/Peter_Akimoto.png"),
                traits: [
                    "Color: Green",
                    "Age: 13",
                    "Birthday: September 3rd",
                    "Hobbies: Bugs, Basketball",
                    "Fears: Getting caught somewhere he can’t get out.",
                ],
                default: { speed: 4, might: 3, sanity: 4, knowledge: 3 },
                speed: [
                    { value: 0, label: "0" },
                    { value: 1, label: "3" },
                    { value: 2, label: "3" },
                    { value: 3, label: "3" },
                    { value: 4, label: "4" },
                    { value: 5, label: "6" },
                    { value: 6, label: "6" },
                    { value: 7, label: "7" },
                    { value: 8, label: "7" },
                ],
                might: [
                    { value: 0, label: "0" },
                    { value: 1, label: "2" },
                    { value: 2, label: "3" },
                    { value: 3, label: "3" },
                    { value: 4, label: "4" },
                    { value: 5, label: "5" },
                    { value: 6, label: "5" },
                    { value: 7, label: "6" },
                    { value: 8, label: "8" },
                ],
                sanity: [
                    { value: 0, label: "0" },
                    { value: 1, label: "3" },
                    { value: 2, label: "4" },
                    { value: 3, label: "4" },
                    { value: 4, label: "4" },
                    { value: 5, label: "5" },
                    { value: 6, label: "6" },
                    { value: 7, label: "6" },
                    { value: 8, label: "7" },
                ],
                knowledge: [
                    { value: 0, label: "0" },
                    { value: 1, label: "3" },
                    { value: 2, label: "4" },
                    { value: 3, label: "4" },
                    { value: 4, label: "5" },
                    { value: 5, label: "6" },
                    { value: 6, label: "7" },
                    { value: 7, label: "7" },
                    { value: 8, label: "8" },
                ],
                expanded: false,
            },
            {
                name: "Father Rhinehardt",
                description:
                    "A man who turned to religion to escape persecution, Father Rhinehardt is haunted by the mad whispers of the confessional booth.",
                image: require("../../assets/images/Betrayal/Father_Rhinehardt.png"),
                traits: [
                    "Color: White",
                    "Age: 62",
                    "Birthday: April 29th",
                    "Hobbies: Fencing, Gardening",
                    "Fears: Going mad.",
                ],
                default: { speed: 3, might: 3, sanity: 5, knowledge: 4 },
                speed: [
                    { value: 0, label: "0" },
                    { value: 1, label: "2" },
                    { value: 2, label: "3" },
                    { value: 3, label: "3" },
                    { value: 4, label: "4" },
                    { value: 5, label: "5" },
                    { value: 6, label: "6" },
                    { value: 7, label: "7" },
                    { value: 8, label: "7" },
                ],
                might: [
                    { value: 0, label: "0" },
                    { value: 1, label: "1" },
                    { value: 2, label: "2" },
                    { value: 3, label: "2" },
                    { value: 4, label: "4" },
                    { value: 5, label: "4" },
                    { value: 6, label: "5" },
                    { value: 7, label: "5" },
                    { value: 8, label: "7" },
                ],
                sanity: [
                    { value: 0, label: "0" },
                    { value: 1, label: "3" },
                    { value: 2, label: "4" },
                    { value: 3, label: "5" },
                    { value: 4, label: "5" },
                    { value: 5, label: "6" },
                    { value: 6, label: "7" },
                    { value: 7, label: "7" },
                    { value: 8, label: "8" },
                ],
                knowledge: [
                    { value: 0, label: "0" },
                    { value: 1, label: "1" },
                    { value: 2, label: "3" },
                    { value: 3, label: "3" },
                    { value: 4, label: "4" },
                    { value: 5, label: "5" },
                    { value: 6, label: "6" },
                    { value: 7, label: "6" },
                    { value: 8, label: "8" },
                ],
                expanded: false,
            },
            {
                name: "Professor Longfellow",
                description:
                    "An aristocrat by birth, Professor Longfellow now lives with his mother, broke and wondering about her life insurance policy.",
                image: require("../../assets/images/Betrayal/Professor_Longfellow.png"),
                traits: [
                    "Color: White",
                    "Age: 57",
                    "Birthday: July 27th",
                    "Hobbies: Gaelic Music, Drama, Fine Wines",
                    "Fears: Losing everything he has.",
                ],
                default: { speed: 4, might: 3, sanity: 3, knowledge: 5 },
                speed: [
                    { value: 0, label: "0" },
                    { value: 1, label: "2" },
                    { value: 2, label: "2" },
                    { value: 3, label: "4" },
                    { value: 4, label: "4" },
                    { value: 5, label: "5" },
                    { value: 6, label: "5" },
                    { value: 7, label: "6" },
                    { value: 8, label: "6" },
                ],
                might: [
                    { value: 0, label: "0" },
                    { value: 1, label: "1" },
                    { value: 2, label: "2" },
                    { value: 3, label: "3" },
                    { value: 4, label: "4" },
                    { value: 5, label: "5" },
                    { value: 6, label: "5" },
                    { value: 7, label: "6" },
                    { value: 8, label: "6" },
                ],
                sanity: [
                    { value: 0, label: "0" },
                    { value: 1, label: "1" },
                    { value: 2, label: "3" },
                    { value: 3, label: "3" },
                    { value: 4, label: "4" },
                    { value: 5, label: "5" },
                    { value: 6, label: "5" },
                    { value: 7, label: "6" },
                    { value: 8, label: "7" },
                ],
                knowledge: [
                    { value: 0, label: "0" },
                    { value: 1, label: "4" },
                    { value: 2, label: "5" },
                    { value: 3, label: "5" },
                    { value: 4, label: "5" },
                    { value: 5, label: "5" },
                    { value: 6, label: "6" },
                    { value: 7, label: "7" },
                    { value: 8, label: "8" },
                ],
                expanded: false,
            },
        ],
        tabValue: 0,
    };

    handleTabChange = (event, newValue) => {
        //  this.setState({ tabValue: newValue });
    };

    render() {
        const handleChange = (event, newValue) => {
            this.setState({ tabValue: newValue });
        };

        const cardTabs = Object.keys(this.state.characters).map((ctKey) => {
            return (
                <Tab key={ctKey} label={this.state.characters[ctKey].name} />
            );
        });

        const cardDisplay = Object.keys(this.state.characters).map((chrKey) => {
            return (
                <TabPanel
                    value={this.state.tabValue}
                    index={Number(chrKey)}
                    key={chrKey}
                >
                    <BetrayalCard
                        key={chrKey}
                        characterslist={this.state.characters[chrKey]}
                        label={this.state.characters[chrKey]}
                    />
                </TabPanel>
            );
        });

        return (
            <Auxi>
                <div
                    style={{
                        flexGrow: 1,
                        display: "flex",
                    }}
                >
                    <Tabs
                        variant="scrollable"
                        orientation="vertical"
                        value={this.state.tabValue}
                        onChange={handleChange}
                        style={{
                            margin: "100px 0px",
                            borderRight: `1px solid #e6e6e6`,
                        }}
                    >
                        {cardTabs}
                    </Tabs>
                    {cardDisplay}
                    <br />
                    <br />
                </div>
            </Auxi>
        );
    }
}

export default Betrayal;
