import React from "react";

import ListGroup from "react-bootstrap/ListGroup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export function Task(props) {
  const shiftTask = async () => {
    const from = props.type;
    const to = from === "completed" ? "toDo" : "completed";

    props.shiftTask(from, to, props.taskID);
  };

  const m_onClick = async () => {
    shiftTask();
    props.type === "toDo" ? props.playSound() : (function doNothing() {})();
  };

  const deleteTask = async () => {
    const from = props.type;
    props.deleteTask(from, props.taskID);
  };

  return (
    <ListGroup.Item
      as="li"
      className={`task-${props.task} mt-1 mb-1`}
      bsPrefix="media-body"
      taskid={props.taskID}
    >
      <input
        type="checkbox"
        checked={props.type === "completed" ? true : false}
        className="mr-2"
        onClick={m_onClick}
        readOnly
      />
      {props.type === "completed" ? <strike>{props.task}</strike> : props.task}
      <FontAwesomeIcon
        className="float-right mr-3 mt-1 trash-can"
        icon={faTrash}
        onClick={deleteTask}
      />
    </ListGroup.Item>
  );
}
