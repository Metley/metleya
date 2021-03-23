import { React, Component, useState } from "react";
import { Modal, Button } from "react-bootstrap";

// class ModalPrompt extends Component {
//     state = {
//         show: false,
//         setShow: false,
//     };
//     constructor(props) {
//         super(props);
//         this.state = { open: true };
//         this.handleCLick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         this.setState({ open: true });
//     }
//     closeModal() {
//         this.setState({ open: false });
//     }

//     render() {
//         return (
//             <Modal show={this.state.open} onHide={this.closeModel}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Modal heading</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     Woohoo, you're reading this text in a modal!
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={this.closeModel}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={this.closeModel}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         );
//     }
// }

// export default ModalPrompt;

const ModalPrompt = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ModalPrompt;
