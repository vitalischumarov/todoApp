function InsertField({ input, inputAction }) {
  return (
    <input
      type="text"
      className="inputField_element"
      placeholder="Enter a task..."
      value={input}
      onChange={inputAction}
    />
  );
}

export default InsertField;
