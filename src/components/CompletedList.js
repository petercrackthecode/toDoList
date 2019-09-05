import React from "react";
import {Task} from './Task.js';
import Col from "react-bootstrap/Col";

export default function CompletedList(props) {
    const completedList= props.completedList.length !== 0 ? props.completedList.map(task => <Task task={task}/>) : null;

    return (
        <Col id='completed-list'>
            <ul className='list-unstyled'>
                {completedList ? completedList : 'empty'}
            </ul>
        </Col>
    );
}