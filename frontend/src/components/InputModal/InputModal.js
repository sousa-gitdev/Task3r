import React, {useState} from 'react';
import Modal from 'react-modal';
import './InputModal.css';


const InputModal = ({
    isOpen, onClose, onSave,type
}) => {
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSave = () => {
        onSave({name, description, endDate});
        onClose();
    };
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} className="Modal">
            <h2>Create New {type}</h2>
            <label>
                Name:
                <input type="text"  onChange={(e) => setName(e.target.value)}></input>
            </label>
            <label>
                Description:
                <textarea  onChange={(e) => setDescription(e.target.value)}></textarea>
            </label>
            <label>
                Due Date:
                <input type="date"  onChange={(e) => setEndDate(e.target.value)}/>
            </label>
            <button onClick={handleSave}>Save</button>
            <button onClick={onClose}>Cancel</button>
        </Modal>
    )
}


export default InputModal;