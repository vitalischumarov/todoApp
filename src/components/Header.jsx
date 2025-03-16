import "./Header.scss";
import InsertField from "./InsertField";
import Button from "./Button";

function Header({ input, inputAction, buttonAction }) {
  return (
    <div className="header">
      <InsertField input={input} inputAction={inputAction}></InsertField>
      <Button title={"save"} buttonAction={buttonAction}></Button>
    </div>
  );
}

export default Header;
