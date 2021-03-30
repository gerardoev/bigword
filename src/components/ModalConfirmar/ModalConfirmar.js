import React from 'react';
import {Modal, ModalBody} from 'reactstrap';
import "./ModalConfirmar.scss";

const BasicModal = ({children,showModal,toggleModal}) => {
    return (
        <Modal isOpen={showModal} toggle={toggleModal} centered={true} className="modal-confirmar">
            <ModalBody>
                {children}
            </ModalBody>
        </Modal>
    );
};

export default BasicModal;