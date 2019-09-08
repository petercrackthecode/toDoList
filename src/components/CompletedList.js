import React from "react";
import {Task} from './Task.js';

import ListGroup from "react-bootstrap/ListGroup";

import {Toggle} from './ToggleBtn.js';

export default function CompletedList(props) {
    const completedList= props.completedList.length !== 0 ? props.completedList.map(task => <Task task={task}/>) : null;

    return (
        <ListGroup id='completed-list' as='ul' className='list-unstyled col-md-8 offset-md-2'>
            {completedList ? completedList : <input placeholder='empty' disabled/>}
        </ListGroup>
    );
}