import React from "react";
import {Task} from './Task.js';

import ListGroup from 'react-bootstrap/ListGroup';

import {Toggle} from './ToggleBtn.js';

import isEmptyObject from '../lambdaFnc/isEmptyObject.js';

export default function ToDoList(props) {
    const toDoList= !isEmptyObject(props.toDoList) ? 
                    (Object.keys(props.toDoList).map(id => <Task task={props.toDoList[id]} shiftTask={props.shiftTask}/>)) : 
                    null;

    return (
        <fieldset id='to-do-list' className='row list'>
            <Toggle type='to-do' listLength={toDoList.length}/>
            <ListGroup as='ul' className='list-unstyled col-md-8 offset-md-2'>
                {toDoList ? toDoList : 'Empty'}
            </ListGroup>
        </fieldset>
    );
}