import React from 'react';
import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import "./BasicModal.scss";

const BasicModal = ({children,showModal,toggleModal, headerString}) => {
    return (
        <Modal isOpen={showModal} toggle={toggleModal} centered={true} className="modal-custom">
            <ModalHeader>
                {headerString}
            </ModalHeader>
            <ModalBody>
                {children}
            </ModalBody>
        </Modal>
    );
};

export default BasicModal;