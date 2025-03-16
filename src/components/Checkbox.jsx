function Checkbox({ changeStatus, currentValue }) {
  function changeValue() {
    changeStatus(currentValue);
  }

  return <input type="checkbox" onChange={changeValue} />;
}

export default Checkbox;
