import React, { useState } from 'react';
import './board.css';
import Draggable from 'react-draggable';
import Task from './Task/task';
import InputModal from '../InputModal/InputModal';

const Board = ({board}) => {
    const {name, description, endDate} = board;
    const [tasks, setTasks] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);


    const addTask = (taskInfo) => {
        console.log(taskInfo);
        setTasks([...tasks, taskInfo]);
    }


    const handleSave = (inputData) => {
        addTask(inputData);
        console.log('Saved: ', inputData);
        setModalIsOpen(false);
    }

    return (
        <div>
        <Draggable>
            <div className="board-card">
                <div className="board-info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <p>Due Date: {endDate}</p>
                </div>
                <div className='task-area'>
                {
                    tasks.map((task,index) => (
                    <Task key={index} task={task}></Task>

                ))}
                   
                </div>
                <button className='add-task-btn' onClick={()=> setModalIsOpen(true)}>+</button>
                <InputModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} onSave={handleSave} type={"Task"}/>
            </div>
        </Draggable>

        </div>
    );
};

export default Board;