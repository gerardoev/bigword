import React from 'react';
import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import "./BasicModal.scss";

const BasicModal = ({children,showModal,toggleModal, headerString}) => {
    return (
        <div className="basic-modal">
            <Modal isOpen={showModal} toggle={toggleModal} centered={true} className="modal-custom">
                <ModalHeader>
                    {headerString}
                </ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
            </Modal>
        </div>
    );
};

export default BasicModal;