import "./Button.scss";

function Button({ title, buttonAction, deleteAction, action }) {
  if (action === "delete") {
    return (
      <button onClick={deleteAction} className="btn">
        {title}
      </button>
    );
  } else {
    return (
      <button onClick={buttonAction} className="btn">
        {title}
      </button>
    );
  }
}

export default Button;
