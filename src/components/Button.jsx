function Button({ title, buttonAction }) {
  return <button onClick={buttonAction}>{title}</button>;
}

export default Button;
