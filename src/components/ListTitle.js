import React from "react";

import Col from "react-bootstrap/Col";

export default function ListTitle(props) {
    return (
        <Col id='list-title' md={{span: 8, offset: 2}} className='text-center'>{props.listTitle}</Col>
    );
}