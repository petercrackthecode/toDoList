import React from "react";

export function Task(props) {
    return (
        <li className={`task-${props.task}`}>{props.task}</li>
    );
}