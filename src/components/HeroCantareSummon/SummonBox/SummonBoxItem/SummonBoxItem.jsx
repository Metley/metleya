import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Avatar } from "@material-ui/core";

const summonBoxItems = (props) => (
    <div>
        <div
            style={{
                backgroundImage: `url(${props.background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
            }}
        >
            {/* <Avatar
                alt={props.heroName}
                src={props.imgSource.default}
                style={{
                    width: "110%",
                    height: "120%",
                    padding: "20%",
                    position: "-5",
                }}
            /> */}

            <img
                src={props.imgSource.default}
                alt={props.heroName}
                style={{
                    padding: "20% 20% 20% 15%",
                    maxWidth: "105%",
                    maxHeight: "100%",
                }}
            />
        </div>
        <p>{props.tier}</p>
        {/* <img
            src={props.imgSource.default}
            alt={props.heroName}
            style={{
                padding: "20px",
                maxWidth: "100%",
                maxHeight: "100%",
            }}
        /> */}
    </div>
);

export default summonBoxItems;
