import React from "react";
import { useState } from "react";
import DialogModal from "../../DialogModal/DialogModal";
import { useEffect } from "react";

const Task = ({task}) => {
    const {name, description, endDate} = task;
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        console.log('Modal is open:', modalIsOpen);

    }, [modalIsOpen]); // This effect will trigger whenever isOpen changes

    

    return (
        <div className="task" onClick={() => { setModalIsOpen(true)}} >
            <h2>Title:{name}</h2>

            <button>Check</button>
            <button>X</button>
            <DialogModal isOpen={modalIsOpen} data={task} onClose={() => {
                setModalIsOpen(false);
                console.log(modalIsOpen)
            }}/>

        </div>
    )
}

export default Task;