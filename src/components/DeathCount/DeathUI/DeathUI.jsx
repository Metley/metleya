import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const deathUI = (props) => {
    return (
        <div>
            <InputGroup className="mb-3" size="lg">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="title"
                    aria-label="title"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>

            <InputGroup className="mb-3" onSubmit={props.addPlayer}>
                <FormControl
                    onChange={props.nameChange}
                    value={props.playerName}
                    onKeyPress={props.enterPlayer}
                    placeholder="Player Name"
                    aria-label="Player Name"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button onClick={props.addPlayer} variant="outline-success">
                        ADD
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
};

export default deathUI;
