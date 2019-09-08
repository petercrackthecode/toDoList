import React from "react";

import Col from "react-bootstrap/Col";

export default function ListTitle(props) {
    return (
        <Col id='list-title' md={{span: 6, offset: 3}} className='text-center'>{props.listTitle}</Col>
    );
}