import React, { Component } from "react";
import "./styles/App.css";

import ListTitle from "./components/ListTitle.js";
import CompletedList from "./components/CompletedList.js";
import ToDoList from "./components/ToDoList.js";
import Input from "./components/Input.js";

// import from React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const defaultTasksList = [
  "Build rocket",
  "Cover a high-speed wifi connection globally",
  "Meet alien",
  "Invent autodriving cars' system"
];

class App extends Component {
  state = {
    m_listTitle: "My new list",
    m_taskList: {
      toDo: defaultTasksList.slice(0),
      completed: []
    }
  };

  deleteTask = async () => {};

  shiftTask = async (from='', to='', taskKey='') => {

  };

  addNewTask = async newTask => {
    await this.setState(currentState => ({
      m_taskList: {
        toDo: currentState.m_taskList.toDo.concat(newTask),
        completed: currentState.m_taskList.completed,
      }
    }));
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
          <ToDoList toDoList={toDo} />
        </Row>
        <Row>
          <CompletedList completedList={completed} />
        </Row>
      </Container>
    );
  }
}

export default App;
