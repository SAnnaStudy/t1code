import './../styles/messagePop.scss';

function MessagePop(props) {

  return (
    <div className="containerMessagePop">
      <div className="messagePop">
        <p>Вы записаны на {props.choosenDate} - {props.choosenTime}</p>
        <p>Бла бла бла</p>
        <button onClick={()=>props.setFinished(false)}>Close</button>
      </div>
    </div>
  );
}

export default MessagePop;
