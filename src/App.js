import React, { Component } from "react";
import "./styles/App.css";

import ListTitle from './components/ListTitle.js';
import CompletedList from './components/CompletedList.js';
import ToDoList from './components/ToDoList.js';

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

  render() {
    return (
      <div id='app'>
        <ListTitle listTitle={this.state.m_listTitle}/>
        <ToDoList toDoList={this.state.m_taskList.toDo}/>
        <CompletedList completedList={this.state.m_taskList.completed}/>
      </div>
    );
  }
}

export default App;
