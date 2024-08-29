import './../styles/popUp.scss';
import './../styles/errorPopUp.scss';
import image from './../ufo.png'
function ErrorPopUp(props) {
  const errorHandle = () => {
    props.setErrorHappend(false)
    document.location.reload()
  }
  return (
    <div className="containerPopUp">
      <div className="popUp errorPopUp">
        <img src={image}></img>
        <p>Какой то сверхразум все сломал</p>
        <button onClick={()=>errorHandle()} className="formButton">Попробовать еще раз</button>
      </div>
    </div>
  );
}

export default ErrorPopUp;
