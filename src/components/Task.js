import React from "react";

import ListGroup from 'react-bootstrap/ListGroup';

export function Task(props) {
    const shiftTask= async () => {
        props.shiftTask(props.task);
    };

    return (
        <ListGroup.Item as='li' className={`task-${props.task} mt-1 mb-1`} bsPrefix='media-body'>
            <input type='checkbox' className='mr-2' onClick={shiftTask}/>{props.task}
        </ListGroup.Item>
    );
}