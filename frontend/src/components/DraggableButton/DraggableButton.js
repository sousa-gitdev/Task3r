import React,{useState} from "react";
import Draggable from 'react-draggable';
import './DraggableButton.css';
import InputModal from '../InputModal/InputModal'

const DraggableButton = ({onBoardSave}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [data, setData] = useState();

    const handleSave = (inputData) => {
        onBoardSave(inputData);
        console.log('Saved: ', inputData);
        setModalIsOpen(false);
    }

    return (
        <div>
        <Draggable>
          <div className="drag-button" onClick={() => setModalIsOpen(true)}>
            <button className="round-button">+</button>
          </div>
        </Draggable>
        <InputModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} onSave={handleSave} type={"Board"}/>
      </div>
    );
};

export default DraggableButton;