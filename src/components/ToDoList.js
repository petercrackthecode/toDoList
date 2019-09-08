import React from "react";
import {Task} from './Task.js';

import ListGroup from 'react-bootstrap/ListGroup';

export default function ToDoList(props) {
    console.log("toDoList's length is " + props.toDoList.length);

    const toDoList= (props.toDoList.length !== 0) ? props.toDoList.map(task => <Task task={task}/>) : null;

    return (
        <ListGroup as='ul' id='to-do-list' className='list-unstyled col-md-8 offset-md-2'>
            {toDoList ? toDoList : 'Empty'}
        </ListGroup>
    );
}