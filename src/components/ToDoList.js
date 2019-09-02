import React from "react";
import {Task} from './Task.js';

export default function ToDoList(props) {
    const toDoList= props.toDoList.length !== 0 ? props.toDoList.map(task => <Task task={task}/>) : null;

    return (
        <ul id='to-do-list' className='list-unstyled'>
            {toDoList ? toDoList : 'Empty'}
        </ul>
    );
}