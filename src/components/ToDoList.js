import React from "react";
import {Task} from './Task.js';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export default function ToDoList(props) {
    console.log("toDoList's length is " + props.toDoList.length);

    const toDoList= (props.toDoList.length !== 0) ? props.toDoList.map(task => <Task task={task}/>) : null;

    return (
        <fieldset id='to-do-list' className='col-md-8 offset-md-2'>
            <legend className='col-md-2 offset-md-5 row'>
                <div className='line-left'></div>
                <Button variant='secondary'>{`${toDoList.length} to-do tasks`}</Button>
                <div className='line-right'></div>
            </legend>
            <ListGroup as='ul' className='list-unstyled'>
                {toDoList ? toDoList : 'Empty'}
            </ListGroup>
        </fieldset>
    );
}