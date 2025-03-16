import "./Message.scss";

function Message({ status }) {
  if (!status) {
    return <span className="message">text</span>;
  } else {
    return <span className="message done">text</span>;
  }
}

export default Message;
