import React from "react";

import Form from 'react-bootstrap/Form';

export default function Input(props) {

    const addNewTask= async (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            await props.addNewTask(event.target.value);
        }
    }

    return (
        <Form.Control id='list-input' 
                      size='sm' 
                      type='text' 
                      className='text-center mb-5 col-md-6 offset-md-3' 
                      placeholder='Add a to-do...' onKeyUp={addNewTask}>
        </Form.Control>
    );
}