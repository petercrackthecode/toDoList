import React, { Component } from "react";
import "./App.css";

var shortid = require("shortid");

function createNewTodo(task) {
  return {
    id: shortid.generate(),
    completed: false,
    task: task
  };
}

function TodoList(props) {
  const myList = Object.values(props.myList).map(aTask => {
    const myTask = createNewTodo(aTask);
    return (
      <li key={myTask.id} completed={myTask.completed}>
        {myTask.task}
      </li>
    );
  });
  return (
    <div className="TodoList">
      <h1>Work</h1>
      <ul>{myList}</ul>
    </div>
  );
}

const todoList = [
  "Build rocket",
  "Cover high-speed wifi connection globally",
  "Meet alien",
  "Invent autodriving cars' system"
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList myList={todoList} />
      </div>
    );
  }
}

export default App;
