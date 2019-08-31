import React, { Component } from "react";
import "./styles/App.css";

import ListTitle from './components/ListTitle.js';
import CompletedList from './components/CompletedList.js';
import ToDoList from './components/ToDoList.js/index.js';


const defaultTasksList = [
  "Build rocket",
  "Cover high-speed wifi connection globally",
  "Meet alien",
  "Invent autodriving cars' system"
];

class TodoList extends Component {
  state= {
    listTitle: 'My new list',
    taskList: {
      toDo: defaultTasksList,
      completed: [],
    },
  };

  render() {
    return (
      <div id='to-do-list'>
        <ListTitle/>
        <ToDoList/>
        <CompletedList/>
      </div>
    );
  }
}

export default ToDoList;
