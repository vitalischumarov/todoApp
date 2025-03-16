import { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import ToDoBody from "./components/ToDoBody";

function App() {
  const [input, setInput] = useState("");
  const [listOfAllToDos, setNewToDo] = useState([]);

  function handleInput(event) {
    const newInput = event.target.value;
    setInput(newInput);
  }

  function pressedSaveButton() {
    if (input !== "") {
      const todo = {
        task: input,
        id: createRandomID(),
      };
      setNewToDo([...listOfAllToDos, todo]);
      setInput("");
    }
  }

  function createRandomID() {
    return Math.floor(Math.random() * (1000 - 1 + 1) + 1);
  }

  function deleteTask(id) {
    console.log("delete action performed");
    let newListOfTasks = [];
    for (let i = 0; i < listOfAllToDos.length; i++) {
      if (id !== listOfAllToDos[i].id) {
        newListOfTasks.push(listOfAllToDos[i]);
      }
    }
    setNewToDo(newListOfTasks);
  }

  return (
    <div className="app">
      <Header
        input={input}
        inputAction={handleInput}
        buttonAction={pressedSaveButton}
      ></Header>
      <ToDoBody allTasks={listOfAllToDos} deleteAction={deleteTask}></ToDoBody>
    </div>
  );
}

export default App;
