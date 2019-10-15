import React from "react";
import { Task } from "./Task.js";

import ListGroup from "react-bootstrap/ListGroup";
import Collapse from "react-bootstrap/Collapse";

import { Toggle } from "./ToggleBtn.js";

import { isEmptyObject } from "../lambdaFnc/fnc.js";

export default function ToDoList(props) {
  const toDoList = !isEmptyObject(props.toDoList)
    ? Object.keys(props.toDoList).map(id => (
        <Task
          task={props.toDoList[id].task}
          taskID={id}
          key={props.toDoList[id].key}
          shiftTask={props.shiftTask}
          type="m_toDo"
          deleteTask={props.deleteTask}
          playSound={props.playSound}
        />
      ))
    : null;

  return (
    <fieldset id="to-do-list" className="row list">
      <Toggle
        type="m_toDo"
        toggle={props.toggleToDo}
        listLength={toDoList ? toDoList.length : 0}
      />
      <Collapse in={props.isToDoOpen}>
        <ListGroup as="ul" className="list-unstyled col-md-8 offset-md-2">
          {toDoList ? toDoList : <li key={0}>Empty</li>}
        </ListGroup>
      </Collapse>
    </fieldset>
  );
}
