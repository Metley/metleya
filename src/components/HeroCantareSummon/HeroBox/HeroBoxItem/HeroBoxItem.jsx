import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GridListTile, Badge, Avatar } from "@material-ui/core";

const HeroBoxItem = (props) => (
    <div>
        <GridListTile cols={1} spacing={5} style={{ margin: "10px" }}>
            {/* <img src={tile.source.default} alt={tile.heroName} /> */}
            <Badge
                overlap="circle"
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                style={{ marginRight: 20 }}
                badgeContent={
                    <h4
                        style={{
                            backgroundColor: "grey",
                            color: "white",
                            textShadow: "2px 2px #000000",
                        }}
                    >
                        x{props.total}
                    </h4>
                }
            >
                <img src={props.img.default} alt={props.hero} />
            </Badge>
        </GridListTile>
    </div>
);

export default HeroBoxItem;
