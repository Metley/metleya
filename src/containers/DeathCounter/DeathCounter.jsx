import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Auxi from "../../hoc/Auxi";
import DeathList from "../../components/DeathCount/DeathList/DeathList";
import DeathUI from "../../components/DeathCount/DeathUI/DeathUI";
import SavedList from "../../components/DeathCount/SavedList/SavedList";
import { Container, Row, Col } from "react-bootstrap";

class DeathCounter extends Component {
    state = {
        playerList: [],
        title: "",
        name: "",
    };

    titleChangeHandler = (event) => {
        this.setState({ title: event.target.value });
    };

    nameChangeHandler = (event) => {
        this.setState({ name: event.target.value });
    };

    addPlayerHandler = () => {
        const newPlayer = { name: this.state.name, death: 0 };

        this.setState({
            playerList: [...this.state.playerList, newPlayer],
            name: "",
        });
    };

    addPlayerEnterHandler = (event) => {
        if (event.key === "Enter") {
            this.addPlayerHandler();
        }
    };

    removePlayerHandler = (player) => {
        const oldList = [...this.state.playerList];
        const updatedList = oldList.splice(player, 1);
        //console.log(updatedList);
        // this.setState({ playerList: updatedList });

        const updatedPlayerList = this.state.playerList.filter(
            (p) => oldList.indexOf(p) !== oldList.indexOf(player)
        );
        //console.log("updated: " + updatedPlayerList + " Old: " + oldList);
        this.setState({ playerList: updatedPlayerList });
    };

    increaseDeathHandler = (player) => {
        const oldDeath = this.state.playerList[player].death;
        const updatedDeath = oldDeath + 1;
        const updatedPlayerList = [...this.state.playerList];
        updatedPlayerList[player].death = updatedDeath;
        this.setState({ playerList: updatedPlayerList });
    };
    decreaseDeathHandler = (player) => {
        const oldDeath = this.state.playerList[player].death;
        if (oldDeath > 0) {
            const updatedDeath = oldDeath - 1;
            const updatedPlayerList = [...this.state.playerList];
            updatedPlayerList[player].death = updatedDeath;
            this.setState({ playerList: updatedPlayerList });
        }
    };

    render() {
        return (
            <Auxi>
                <Container>
                    <Row>
                        <Col md={4}></Col>
                        <Col>
                            <h1 class="display-3">Death Counter</h1>
                        </Col>
                        <Col md={4}></Col>
                    </Row>
                    <Row>
                        <Col md={1} />
                        <Col md={10}>
                            This a simple counter to keep track of death while
                            playing any game and with the ability to count up to
                            any number of plays. To save your Death Count for
                            the future you will need to sign in.
                        </Col>
                        <Col md={1} />
                    </Row>
                    <br />
                    <Row>
                        <Col xs={6} md={4}>
                            <SavedList />
                        </Col>
                        <Col xs={12} md={8}>
                            <DeathUI
                                titleChange={this.titleChangeHandler}
                                nameChange={this.nameChangeHandler}
                                playerName={this.state.name}
                                addPlayer={this.addPlayerHandler}
                                enterPlayer={this.addPlayerEnterHandler}
                            />
                            <DeathList
                                playerList={this.state.playerList}
                                addDeath={this.increaseDeathHandler}
                                subDeath={this.decreaseDeathHandler}
                                rmvPlayer={this.removePlayerHandler}
                            />

                            {/* <div>
                                <ModalPrompt
                                    handleOpen={this.state.modalStatus}
                                    handleClose={() =>
                                        this.setState({ modalStatus: false })
                                    }
                                />
                                <Button variant="primary">
                                    Launch demo modal
                                </Button>
                            </div> */}
                        </Col>
                    </Row>
                </Container>
            </Auxi>
        );
    }
}

export default DeathCounter;
