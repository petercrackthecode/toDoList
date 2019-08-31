import React from "react";
import {Task} from './Task.js';

export default function ToDoList(props) {
    const toDoList= props.toDoList.map(task => <Task task={task}/>);

    return (
        <ul id='to-do-list'>
            {toDoList}
        </ul>
    );
}