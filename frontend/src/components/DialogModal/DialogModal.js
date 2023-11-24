import React, {useState} from 'react';
import Modal from 'react-modal';
import './DialogModal.css';


const DialogModal = ({
    isOpen, onClose, data
}) => {
    
    const {name, description, endDate} = data;


    const handleOkButtonClick = () => {
        onClose();
        console.log("closing")
    };
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true} ariaHideApp={false} className="Modal">
            <h2>{name}</h2>
            <h3>{description}</h3>
            <h4>Due Date: {endDate}</h4>
            <button onClick={handleOkButtonClick}>Ok</button>
        </Modal>
    )
}


export default DialogModal;