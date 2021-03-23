import { React, useState } from "react";
import { Modal, InputGroup, Button, FormControl } from "react-bootstrap";

const DeathListItem = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () => {
        setShow(false);
    };

    return (
        <div>
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
                    <Button
                        variant="outline-secondary"
                        onClick={props.addDeath}
                    >
                        ∧
                    </Button>
                    <Button
                        variant="outline-secondary"
                        onClick={props.subDeath}
                    >
                        ∨
                    </Button>
                    <Button variant="danger" onClick={handleShow}>
                        DELETE
                    </Button>
                </InputGroup.Append>
            </InputGroup>

            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete {props.name} ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => {
                            handleClose();
                            props.rmvPlayer();
                        }}
                    >
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default DeathListItem;
