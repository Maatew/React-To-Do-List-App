import React from 'react';
import '../stylesheets/task.css'
import { AiOutlineAlert } from "react-icons/ai";

function Task( {id, text, check, checkTask, deleteTask} ) {
    return (
        <div className={check ? 'task-container check' : 'task-container'}>
            <div 
                className='task-texto'
                onClick={() => checkTask(id)}>
                {text}                
            </div>
            <div 
                className='task-container-icon'
                onClick={() => deleteTask(id)}>   
                <AiOutlineAlert className='task-icon' />           
            </div>
        </div>
    );
};

export default Task; 