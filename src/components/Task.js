import React from "react";

import ListGroup from 'react-bootstrap/ListGroup';

export function Task(props) {
    return (
        <ListGroup.Item as='li' className={`task-${props.task} mt-1 mb-1`} bsPrefix='media-body'>
                {props.task}
        </ListGroup.Item>
    );
}