import React, { Component } from "react";
import "./styles/App.css";

import ListTitle from "./components/ListTitle.js";
import CompletedList from "./components/CompletedList.js";
import ToDoList from "./components/ToDoList.js";
import Input from "./components/Input.js";
import ID from './lambdaFnc/ID.js';

// import from React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const defaultTasksList = [
  "Build rocket",
  "Cover a high-speed wifi connection globally",
  "Meet alien",
  "Invent autodriving cars' system"
];

let tasksWithID= {};

defaultTasksList.map(aTask => tasksWithID[ID()]= aTask);

class App extends Component {
  state = {
    m_listTitle: "My new list",
    m_taskList: {
      toDo: tasksWithID, // tasksWithID is an object.
      completed: {},
    }
  };

  deleteTask = async () => {};

  shiftTask = async (from='', to='', taskID='') => {
    console.log('from: ' + from + ', to: ' + to + ' with a taskID: ' + taskID);

    let newTaskList= this.state.m_taskList;
    const task= newTaskList[from][taskID];
    delete newTaskList[from][taskID];

    newTaskList[to][taskID]= task;

    this.setState({m_taskList: newTaskList});
  };

  addNewTask = async newTask => {
    let currentState= this.state;
    currentState.m_taskList.toDo[ID()]= newTask;
    this.setState(currentState);
  };

  render() {
    const { m_listTitle, m_taskList } = this.state;
    const { toDo, completed } = m_taskList;

    return (
      <Container id="app">
        <Row>
          <ListTitle listTitle={m_listTitle} />
        </Row>
        <br />
        <Row>
          <Input addNewTask={this.addNewTask} />
        </Row>
        <Row>
          <ToDoList toDoList={toDo} shiftTask={this.shiftTask}/>
        </Row>
        <Row>
          <CompletedList completedList={completed} shiftTask={this.shiftTask}/>
        </Row>
      </Container>
    );
  }
}

export default App;
