import React, {Component } from "react";
import "./styles/App.css";

import HandBellFlac from "./media/hand-bell.flac";
import HandBellWav from "./media/hand-bell.wav";

import ListTitle from "./components/ListTitle.js";
import CompletedList from "./components/CompletedList.js";
import ToDoList from "./components/ToDoList.js";
import Input from "./components/Input.js";
import ID, { isEmptyObject, drop, drag, allowDrop } from "./lambdaFnc/fnc.js";

// import from React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Darkmode from "darkmode-js";

let options = {
  bottom: "90%", // default: '32px'
  right: "32px", // default: '32px'
  left: "unset", // default: 'unset'
  time: "0.5s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "#fff", // default: '#fff'
  buttonColorDark: "#100f2c", // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  saveInCookies: true, // default: true,
  label: "🌓", // default: ''
  autoMatchOsTheme: false // default: true
};

const darkMode = new Darkmode(options);
darkMode.showWidget();

const defaultToDo = [
  "Build rocket",
  "Cover a high-speed wifi connection globally",
  "Meet alien",
  "Invent autodriving cars' system"
];

let toDoWithID = {};
let completedWithID = {};

defaultToDo.map((aTask, id) => (toDoWithID[id] = { key: ID(), task: aTask }));

// check if local storage already exist, if not then initiate it with the default list.
// This action is only be done at the beginning of a working period.
if (!localStorage.getItem("toDo") || localStorage.getItem("toDo") === "{}")
  localStorage.setItem("toDo", JSON.stringify(toDoWithID));

if (!localStorage.getItem("completed"))
  localStorage.setItem("completed", JSON.stringify(completedWithID));

const currentToDo = isEmptyObject(localStorage.getItem("toDo"))
  ? ""
  : JSON.parse(localStorage.getItem("toDo"));
const currentCompleted = isEmptyObject(localStorage.getItem("completed"))
  ? ""
  : JSON.parse(localStorage.getItem("completed"));

class App extends Component {
  state = {
    m_listTitle: "Peter Nguyen's to-do list",
    m_input: "",
    m_toDo: currentToDo,
    m_completed: currentCompleted,
    m_isToDoOpen: true,
    m_isCompletedOpen: true
  };

  componentDidMount= async () => {
    console.log(this.state.m_toDo);
  };

  componentDidUpdate = async () => {
    localStorage.setItem("toDo", JSON.stringify(this.state.m_toDo));
    localStorage.setItem("completed", JSON.stringify(this.state.m_completed));
  };

  playSound = async () => {
    const audio = document.getElementById("beep");
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
  };

  toggle = async param => {
    await this.setState(currState => ({
      [param]: !currState[param]
    }));
  };

  deleteTask = async (from = "", taskID = "") => {
    let newState = this.state;
    delete newState[from][taskID];
    this.setState(newState);
  };

  shiftTask = async (from = "", to = "", taskID = "") => {
    let newState = this.state;
    const task = newState[from][taskID];
    delete newState[from][taskID];
    newState[to][taskID] = task;

    this.setState(newState);
  };

  addNewTask = async newTask => {
    let currentState = this.state;
    console.log(currentState.m_toDo);
    const toDoSize= Object.getOwnPropertyNames(currentState.m_toDo).length;
    console.log("size= " + toDoSize);
    console.log(Object.getOwnPropertyNames(currentState.m_toDo));
    currentState.m_toDo[toDoSize] = {key: ID(), task: newTask};
    this.setState(currentState);
  };

  changeInput = async newInput => {
    this.setState({
      m_input: newInput
    });
  };

  handleDrag = async (from, to) => {
    let toDo = [...this.state.m_toDo];
    toDo.splice(to, 0, toDo.splice(from, 1)[0]);

    this.setState({
      m_toDo: toDo
    });
  };

  render() {
    const { m_listTitle } = this.state;
    const toDo = this.state.m_toDo,
      completed = this.state.m_completed;

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
            toggleToDo={this.toggle}
            isToDoOpen={this.state.m_isToDoOpen}
            shiftTask={this.shiftTask}
            deleteTask={this.deleteTask}
            playSound={this.playSound}
          />
        </Row>
        <Row>
          <CompletedList
            completedList={completed}
            toggleCompleted={this.toggle}
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
