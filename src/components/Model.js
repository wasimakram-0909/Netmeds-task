import React from "react";
import { Button, Row, Col, Modal, ModalBody, ModalFooter,ModalHeader } from 'reactstrap';
import FormInput from "../components/FormInput";


const ConfirmationModal = ({isOpen, toggle, successBtn,ID = "", ...rest}) =>{
    return(
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader>
                <p className="fw-800 m-0 p-0">Confirmation</p>
            </ModalHeader>
            <ModalBody className="py-3 px-4" >
            <FormInput
                type="only-text"
                label="Enter Field Label"
                name="pgName"
                onChange={rest.onFieldLabelChange}
                value={rest.formFieldLabel}
                showDelete={false}
            />
            </ModalBody>
            <ModalFooter>
            <Row className="w-100 d-flex justify-content-end align-items-center px-5 ">
                <Col>
                    <Button 
                        color="primary w-100 border-none" 
                        className="fw-600"
                        type="button"
                        onClick={successBtn}
                    >
                        Yes
                    </Button>
                </Col>
                <Col>
                    <Button 
                        type="button"
                        outline 
                        color="lighGrey-2 w-100 border-primary" 
                        className="fw-600"
                        onClick={toggle}
                    >
                        No
                    </Button>
                </Col>
            </Row>
            </ModalFooter>
        </Modal>
    )
}

export {ConfirmationModal};