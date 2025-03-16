import "./ToDoBody.scss";
import ToDo from "./ToDo";

function ToDoBody({ allTasks, deleteAction }) {
  return (
    <div className="todoBody">
      {allTasks.map((element) => {
        return <ToDo singleTask={element} deleteAction={deleteAction}></ToDo>;
      })}
    </div>
  );
}

export default ToDoBody;
