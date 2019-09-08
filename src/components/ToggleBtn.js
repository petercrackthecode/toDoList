import React from "react";

import Button from 'react-bootstrap/Button';

export function Toggle(props) {
    return (
        <div id={`toggle-${props.type}`} className='toggle mb-md-10 mb-sm-12'>
            <Button variant='secondary' className='col-md-2 offset-md-5 mb-2'>{`${props.listLength} to-do tasks`}</Button>
            <hr/>
        </div>
    );
}