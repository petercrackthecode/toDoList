import React from "react";

import Button from "react-bootstrap/Button";

export function Toggle(props) {
  const toggle= async () => {
    props.type === 'm_toDo' ? props.toggle('m_isToDoOpen') : props.toggle('m_isCompletedOpen');
  };

  return (
    <div id={`toggle-${props.type}`} className="toggle mb-md-10 mb-sm-12">
      <Button
        variant="secondary"
        className="col-md-2 offset-md-5 mb-2"
        onClick={toggle}
      >{`${props.listLength} to-do tasks`}</Button>
      <hr />
    </div>
  );
}
