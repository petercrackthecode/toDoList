import React from "react";
import {Task} from './Task.js';

import ListGroup from 'react-bootstrap/ListGroup';

import {Toggle} from './ToggleBtn.js';

import isEmptyObject from '../lambdaFnc/isEmptyObject.js';

export default function ToDoList(props) {
    const toDoList= !isEmptyObject(props.toDoList) ? 
                    (Object.keys(props.toDoList).map(id => <Task task={props.toDoList[id]}
                                                                 taskID={id} 
                                                                 shiftTask={props.shiftTask}
                                                                 type='toDo'/>)) : 
                    null;

    return (
        <fieldset id='to-do-list' className='row list'>
            <Toggle type='to-do' listLength={toDoList ? toDoList.length : 0}/>
            <ListGroup as='ul' className='list-unstyled col-md-8 offset-md-2'>
                {toDoList ? toDoList : 'Empty'}
            </ListGroup>
        </fieldset>
    );
}