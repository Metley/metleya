import React from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";

const deathListItem = (props) => (
    <InputGroup className="mb-3">
        <Button variant="primary" disabled>
            {props.death}
        </Button>
        <FormControl
            type="text"
            readOnly
            value={props.name}
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
        />

        <InputGroup.Append>
            <Button variant="outline-secondary" onClick={props.addDeath}>
                ∧
            </Button>
            <Button variant="outline-secondary" onClick={props.subDeath}>
                ∨
            </Button>
            <Button variant="danger" onClick={props.rmvPlayer}>
                DELETE
            </Button>
        </InputGroup.Append>
    </InputGroup>
);

export default deathListItem;
