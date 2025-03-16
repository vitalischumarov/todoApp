import { useState } from "react";
import "./ToDo.scss";
import Message from "./Message";
import Checkbox from "./Checkbox";
import Button from "./Button";

function ToDo({ singleTask, deleteAction }) {
  const [checked, setCheck] = useState(false);

  function deleteTask() {
    deleteAction(singleTask.id);
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
      <Message status={checked} text={singleTask.task}></Message>
      <Button
        title={"delete"}
        deleteAction={deleteTask}
        action={"delete"}
      ></Button>
    </div>
  );
}

export default ToDo;
