import React, { Component } from "react";

import DeathListItem from "./DeathListItem/DeathListItem2";

class DeathList extends Component {
    state = {};
    render() {
        const playersList = Object.keys(this.props.playerList).map((pKey) => {
            return (
                <DeathListItem
                    key={pKey}
                    name={this.props.playerList[pKey].name}
                    death={this.props.playerList[pKey].death}
                    player={this.props.playerList[pKey]}
                    addDeath={() => this.props.addDeath(pKey)}
                    subDeath={() => this.props.subDeath(pKey)}
                    rmvPlayer={() => this.props.rmvPlayer(pKey)}
                />
            );
        });

        return <div>{playersList}</div>;
    }
}

export default DeathList;

// const deathList = (props) => (
//     <div>
//         {<DeathListItem />}
//     </div>
// );

// export default deathList;
