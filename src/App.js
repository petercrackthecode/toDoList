import React, { Component } from "react";
import "./styles/App.css";

import HandBellFlac from "./media/hand-bell.flac";
import HandBellWav from "./media/hand-bell.wav";

import ListTitle from "./components/ListTitle.js";
import CompletedList from "./components/CompletedList.js";
import ToDoList from "./components/ToDoList.js";
import Input from "./components/Input.js";
import ID from "./lambdaFnc/fnc.js";

// import from React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const defaultToDo = [
  "Build rocket",
  "Cover a high-speed wifi connection globally",
  "Meet alien",
  "Invent autodriving cars' system"
];

let toDoWithID = {};
let completedWithID= {};

defaultToDo.map(aTask => (toDoWithID[ID()] = aTask));

console.log(JSON.parse(localStorage.getItem('toDo')) === null);

let hello= localStorage.getItem('toDo');

console.log(hello);

console.log(localStorage.getItem('toDo'));

if (!localStorage.getItem('completed')) localStorage.setItem('completed', JSON.stringify(completedWithID));

/*
const m_toDo= JSON.parse(localStorage.getItem('toDo'));
const m_completed= JSON.parse(localStorage.getItem('completed'));
*/

class App extends Component {
  state = {
    m_listTitle: "My new list",
    m_input: "",
    m_toDo: '',
    m_completed: '',
    m_isToDoOpen: true,
    m_isCompletedOpen: true
  };

  componentDidMount= async () => {
    await this.setState({
      m_toDo: JSON.parse(localStorage.getItem('toDo')),
      m_completed: JSON.parse(localStorage.getItem('completed'))
    });
  };

  componentDidUpdate= async () => {
    localStorage.setItem('toDo', JSON.stringify(this.state.m_toDo));
    localStorage.setItem('completed', JSON.stringify(this.state.m_completed));
  };

  playSound = async () => {
    const audio = document.getElementById("beep");
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
  };

  toggleToDo = async () => {
    this.setState(currentState => ({
      m_isToDoOpen: !currentState.m_isToDoOpen
    }));
  };

  toggleCompleted = async () => {
    this.setState(currentState => ({
      m_isCompletedOpen: !currentState.m_isCompletedOpen
    }));
  };

  deleteTask = async (from = "", taskID = "") => {
    let newState= this.state;
    delete newState[from][taskID];
    this.setState(newState);
  };

  shiftTask = async (from = "", to = "", taskID = "") => {
    let newState= this.state;
    const task= newState[from][taskID];
    delete newState[from][taskID];
    newState[to][taskID]= task;

    this.setState(newState);
  };

  addNewTask = async newTask => {
    let currentState = this.state;
    currentState.m_toDo[ID()] = newTask;
    this.setState(currentState);
  };

  changeInput = async newInput => {
    this.setState({
      m_input: newInput
    });
  };

  render() {
    const { m_listTitle} = this.state;
    const toDo= this.state.m_toDo, completed= this.state.m_completed;

    return (
      <Container id="app">
        <Row>
          <ListTitle listTitle={m_listTitle} />
        </Row>
        <br />
        <Row>
          <Input
            addNewTask={this.addNewTask}
            changeInput={this.changeInput}
            input={this.state.m_input}
          />
        </Row>
        <Row>
          <ToDoList
            toDoList={toDo}
            toggleToDo={this.toggleToDo}
            isToDoOpen={this.state.m_isToDoOpen}
            shiftTask={this.shiftTask}
            deleteTask={this.deleteTask}
            playSound={this.playSound}
          />
        </Row>
        <Row>
          <CompletedList
            completedList={completed}
            toggleCompleted={this.toggleCompleted}
            isCompletedOpen={this.state.m_isCompletedOpen}
            shiftTask={this.shiftTask}
            deleteTask={this.deleteTask}
          />
        </Row>
        <audio id="beep" preload="auto">
          <source src={HandBellFlac}></source>
          <source src={HandBellWav}></source>
          Your browser doesn't support this media file.
        </audio>
      </Container>
    );
  }
}

export default App;
