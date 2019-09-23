import React from "react";
import { Task } from "./Task.js";

import ListGroup from "react-bootstrap/ListGroup";

import { Toggle } from "./ToggleBtn.js";

import isEmptyObject from "../lambdaFnc/isEmptyObject.js";

export default function CompletedList(props) {
  const completedList = !isEmptyObject(props.completedList)
    ? Object.keys(props.completedList).map(id => (
        <Task
          task={props.completedList[id]}
          taskID={id}
          key={id}
          shiftTask={props.shiftTask}
          type="completed"
          deleteTask={props.deleteTask}
        />
      ))
    : null;

  return (
    <fieldset id="completed-list" className="row list mt-4">
      <Toggle
        type="completed"
        listLength={completedList ? completedList.length : 0}
      />
      <ListGroup as="ul" className="list-unstyled col-md-8 offset-md-2">
        {completedList ? completedList : <li key={-1}>Empty</li>}
      </ListGroup>
    </fieldset>
  );
}
