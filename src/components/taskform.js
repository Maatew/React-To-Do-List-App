import React from 'react';
import '../stylesheets/taskform.css'
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function TaskForm(props){

    const [input, setImput] = useState('');

    const setChange = e =>{
        setImput(e.target.value);
    };

    const setSend = e => {
        e.preventDefault();

        const newTask = {
            id: uuidv4(),
            text: input,
            check: false
        }

        props.onSubmit(newTask);
    };

    return(
        <form 
            className='task-form'
            onSubmit={setSend}>
            <input 
                className='task-input' 
                type='text' 
                placeholder='Write your Task' 
                name='texto'
                onChange={setChange}
            />
            <button className='task-button'>
                Add Task
            </button>
        </form>
    );
}

export default TaskForm;