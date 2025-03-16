function Button({ title, buttonAction, deleteAction, action }) {
  if (action === "delete") {
    return <button onClick={deleteAction}>{title}</button>;
  } else {
    return <button onClick={buttonAction}>{title}</button>;
  }
}

export default Button;
