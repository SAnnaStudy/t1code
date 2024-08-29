import './../styles/messagePop.scss';

function Help(props) {

  return (
    <div className="containerMessagePop">
      <div className="messagePop">
        в6гвшгш0хщзшгевлгн
        <button onClick={()=>props.setNeedHelp(false)}>Все понятно, спасибо!</button>
      </div>
    </div>
  );
}

export default Help;
