import './../styles/messagePop.scss';

function ForgotPassPop(props) {

  return (
    <div className="containerMessagePop">
      <div className="messagePop">
        <p>Проверьте почту</p>
        <button onClick={()=>props.setPopForgotPass(false)}>Close</button>
      </div>
    </div>
  );
}

export default ForgotPassPop;
