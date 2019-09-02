import React from "react";
import {Task} from './Task.js';

export default function CompletedList(props) {
    const completedList= props.completedList.length !== 0 ? props.completedList.map(task => <Task task={task}/>) : null;

    return (
        <ul id='completed-list' className='list-unstyled'>
            {completedList ? completedList : 'empty'}
        </ul>
    );
}