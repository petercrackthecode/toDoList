import React from "react";

import ListGroup from 'react-bootstrap/ListGroup';

export function Task(props) {
    const shiftTask= async () => {
        const from= props.type;
        const to= (from === 'completed') ? 'toDo' : 'completed';

        props.shiftTask(from, to, props.taskID);
    };

    return (
        <ListGroup.Item as='li' className={`task-${props.task} mt-1 mb-1`} bsPrefix='media-body'>
            <input type='checkbox' checked={(props.type === 'completed') ? true : false} className='mr-2' onClick={shiftTask}/>{props.task}
        </ListGroup.Item>
    );
}