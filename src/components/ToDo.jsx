import { useState } from "react";
import "./ToDo.scss";
import Message from "./Message";
import Checkbox from "./Checkbox";
import Button from "./Button";

function ToDo() {
  const [checked, setCheck] = useState(false);

  function deleteTask() {
    action(id);
  }

  function checkStatus(value) {
    if (value) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  }

  return (
    <div className="todo">
      <Checkbox changeStatus={checkStatus} currentValue={checked}></Checkbox>
      <Message status={checked}></Message>
      <Button title={"delete"}></Button>
    </div>
  );
}

export default ToDo;
