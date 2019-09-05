import React from "react";
import {Task} from './Task.js';

import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

export default function CompletedList(props) {
    const completedList= props.completedList.length !== 0 ? props.completedList.map(task => <Task task={task}/>) : null;

    return (
        <Col id='completed-list'>
            <ListGroup as='ul'>
                {completedList ? completedList : 'empty'}
            </ListGroup>
        </Col>
    );
}