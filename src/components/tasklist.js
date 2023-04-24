import React from 'react';
import '../stylesheets/tasklist.css'
import TaskForm from './taskform';
import { useState} from 'react';
import Task from './task';

function TaskList(){

    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        if(task.text.trim()){
            task.text = task.text.trim();
            const taskUpdate = [task, ...tasks];
            setTasks(taskUpdate);
        }
    };

    const deleteTask = id => {
        const taskUpdates = tasks.filter(task => task.id !== id);
        setTasks(taskUpdates);
    };

    const checkTask = id =>{
        const taskUpdates = tasks.map(task => {
            if(task.id === id){
                task.check = !task.check;                
            }
            return task;
        });   
        setTasks(taskUpdates);     
    };

    return(
        <>
            <TaskForm onSubmit={addTask}/>
            <div className='task-list-container'>
                {
                    tasks.map((task) => 
                        <Task 
                            key={task.id}
                            id={task.id}
                            text={task.text}
                            check={task.check} 
                            checkTask={checkTask}
                            deleteTask={deleteTask}
                        />
                    )
                }              
            </div>            
        </>
    );
};

export default TaskList;