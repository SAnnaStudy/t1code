import React from 'react';
import './../styles/firstSecondScreen.scss';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import { useNavigate } from "react-router-dom";
import ErrorPopUp from './../components/ErrorPopUp.jsx'
import ForgotPassPop from './../components/ForgotPassPop.jsx'

function FirstScreen() {
  const [type, setType] = React.useState('password');
  const [icon, setIcon] = React.useState(eyeOff);
  const [errorHappend, setErrorHappend] =  React.useState(false)
  let nav = useNavigate();
  const [popForgotPass, setPopForgotPass] =  React.useState(false)

  const [formState, setFormState] = React.useState({
    password: "",
    email: ""
  })

  const forgotPassword =() => {
    //проверка, чтобы было заполнено полу почта
    setPopForgotPass(true)
  }

  const handleToggle = () => {
    if (type==='password'){
       setIcon(eye);
       setType('text')
    } else {
       setIcon(eyeOff)
       setType('password')
    }
 }

 const parseToken = (token) => {
  const [headerEncoded, payloadEncoded] = token.split('.');
  const base64 = payloadEncoded.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  const user = JSON.parse(jsonPayload);
  localStorage.setItem('token', token);
  localStorage.setItem('email', user.sub);
  localStorage.setItem('role', user.role[0].authority);
  console.log(token, user.sub, user.role[0].authority)
 }

 const sendForm = () => {
    fetch('https://localhost:8080/api/v1/auth/register', {
      method: 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(formState)
    })
    .then(res => {
      if (res.ok) {
        nav("/app")
        parseToken(res.data.access_token)
        return res.json();
      }
    })
    .catch(error => {
      setErrorHappend(true)
      console.log(error)
    })
  }

  return (
    <div className='first'>
      <div className='first_container'>
        <p className='first_container_name'>Авторизация</p>
        <form className='first_container_form'>
            <div class="first_container_form_block" id="input1">
              <label id='emailLabel' for="email" className="first_container_form_block_label">Почта</label>
              <input id="email" name='email' className="first_container_form_block_input" type="text" required 
              value={formState.email} onChange={e => setFormState({...formState, [e.target.name]: e.target.value})}/>
            </div>
            <div class="first_container_form_block" id="input2">
              <div className='addedClass'>
                <label id='passwordLabel' for="password" className="first_container_form_block_label">Пароль</label>
                <button className="first_container_form_block_label2" onClick={()=>forgotPassword()}>Забыли парль?</button>
              </div>
              <div class="first_container_form_block_password">
                <input id="password" name='password' type={type} className='first_container_form_block_password_input' required
                value={formState.password} onChange={e => setFormState({...formState, [e.target.name]: e.target.value})} />
                <span onClick={handleToggle}>
                  <Icon className="icon" icon={icon} size={20}/>
                </span>
              </div>
            </div>
        </form>
        <button className='first_container_button' onClick={()=>sendForm()}>Войти</button>
        <div className='first_container_bottom'>
          <p>Еще нет аккаунта?</p>
          <a href='/registration'>Зарегистрироваться</a>
        </div>
      </div>
      {
        errorHappend ? <ErrorPopUp setErrorHappend={setErrorHappend}></ErrorPopUp> : null
      }
      {
        popForgotPass
        ? <ForgotPassPop setPopForgotPass={setPopForgotPass}></ForgotPassPop>
        : null
      }
    </div>
  );
}

export default FirstScreen;

//адаптация под экраны
//ts
//redux
//стиль для ошибок
//валидация формы
//регистрация
//поменять стили на адекватные