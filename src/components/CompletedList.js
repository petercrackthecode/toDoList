import React from "react";
import { Task } from "./Task.js";

import ListGroup from "react-bootstrap/ListGroup";
import Collapse from "react-bootstrap/Collapse";

import { Toggle } from "./ToggleBtn.js";

import {isEmptyObject} from "../lambdaFnc/fnc.js";

export default function CompletedList(props) {
  const completedList = !isEmptyObject(props.completedList)
    ? Object.keys(props.completedList).map(id => (
        <Task
          task={props.completedList[id].task}
          taskID={id}
          key={props.completedList[id].key}
          shiftTask={props.shiftTask}
          type="m_completed"
          deleteTask={props.deleteTask}
        />
      ))
    : null;

  return (
    <fieldset id="completed-list" className="row list mt-4">
      <Toggle
        type="m_completed"
        listLength={completedList ? completedList.length : 0}
        toggle={props.toggleCompleted}
      />
      <Collapse in={props.isCompletedOpen}>
        <ListGroup as="ul" className="list-unstyled col-md-8 offset-md-2">
          {completedList ? completedList : <li key={-1}>Empty</li>}
        </ListGroup>
      </Collapse>
    </fieldset>
  );
}
