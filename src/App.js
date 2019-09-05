import React, { Component } from "react";
import "./styles/App.css";

import ListTitle from './components/ListTitle.js';
import CompletedList from './components/CompletedList.js';
import ToDoList from './components/ToDoList.js';

// import from React Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const defaultTasksList = [
  "Build rocket",
  "Cover high-speed wifi connection globally",
  "Meet alien",
  "Invent autodriving cars' system"
];

class App extends Component {
  state= {
    m_listTitle: 'My new list',
    m_taskList: {
      toDo: defaultTasksList,
      completed: [],
    },
  };

  deleteList= async () => {

  }

  render() {
    return (
      <Container id='app'>
        <Row>
          <ListTitle listTitle={this.state.m_listTitle}/>
        </Row>
        <Row>
          <ToDoList toDoList={this.state.m_taskList.toDo}/>
        </Row>
        <Row>
          <CompletedList completedList={this.state.m_taskList.completed}/>
        </Row>
      </Container>
    );
  }
}

export default App;
