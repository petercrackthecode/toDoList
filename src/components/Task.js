import React from "react";

import Media from 'react-bootstrap/Media';

export function Task(props) {
    return (
        <Media as='li' className={`task-${props.task}`} bsPrefix='media-body'>
            <Media.Body>
                {props.task}
            </Media.Body>
        </Media>
    );
}