import "./ToDoBody.scss";
import ToDo from "./ToDo";

function ToDoBody({ allTasks }) {
  console.log("body");
  return (
    <div className="todoBody">
      {allTasks.map((element) => {
        console.log(element);
        return <ToDo singleTask={element}></ToDo>;
      })}
    </div>
  );
}

export default ToDoBody;
