import './../styles/error.scss';
import { useNavigate } from "react-router-dom";

function Error() {
  let nav = useNavigate();
  const clickHandler = () => {
    nav("/app");
  }
  return (
    <div className='error_style'>
      <div className='container'>
        <h1>404</h1>
        <p>Такого адреса не существует. Пожалуйста, проверьте адрес</p>
        <button onClick={()=>clickHandler()} className='butt404'>Вернуться на главную</button>
      </div>
    </div>
  );
}

export default Error;
