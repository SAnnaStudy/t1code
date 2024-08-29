import './../styles/header.scss';
import { useNavigate } from "react-router-dom";

function Header(props) {
  let nav = useNavigate();
  const clickHandler = () => {
    nav("/app");
  }
  const clickHandler2 = () => {
    nav("/app/profile")
  }
  const clickHandler3 = () => {
    nav("/")
  }
  return (
    <div className="header">
      <div className='header_logo'>Super name</div>
      <div className='header_butt'>
      <div className='header_butt_thing' onClick={()=>clickHandler()}>Запись</div>
        <div className='header_butt_thing' onClick={()=>clickHandler2()}>Запланированные события</div>
        <div className='header_butt_thing' onClick={()=>clickHandler3()}>Выйти</div>
      </div>
    </div>
  );
}

export default Header;
