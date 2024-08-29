import './../styles/firstSecondScreen.scss';
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import ErrorPopUp from './../components/ErrorPopUp.jsx'

function SecondScreen() {
  const [formState, setFormState] = React.useState({
    password: "123",
    email: "example@gmail.com"
   })
   const [duplicate, setDuplicate] =  React.useState('')
   let nav = useNavigate();
   const [errorHappend, setErrorHappend] =  React.useState(false)


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

//parseToken(res.data.access_token)
   const sendForm = () => {
    fetch('https://66c83da88a477f50dc2d454c.mockapi.io/users', {
      method: 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(formState)
    })
    .then(res => {
      if (res.ok) {
        nav("/app")
        
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
        <p className='first_container_name'>Регистрация</p>
        <form className='first_container_form'>
            <div class="first_container_form_block" id="input2">
              <label id='emailLabel' for="email" className="first_container_form_block_label">Почта</label>
              <input id="email" className="first_container_form_block_input" name='email' type="text" required value={formState.email} onChange={e => setFormState({...formState, [e.target.name]: e.target.value})}/>
            </div>
            <div class="first_container_form_block" id="input4">
              <label id='passwordLabel' for="password" className="first_container_form_block_label">Пароль</label>
              <input id="password" className="first_container_form_block_input" name='password' type="text" required value={formState.password} onChange={e => setFormState({...formState, [e.target.name]: e.target.value})}/>
            </div>
            <div class="first_container_form_block" id="input5">
              <label id='passwordLabel' for="password2" className="first_container_form_block_label">Повторите пароль</label>
              <input id="password2" className="first_container_form_block_input" name='password2' type="text" value={duplicate} onChange={e => setDuplicate(e.target.value)} required />
            </div>
            <div className='privacy'>Отправляя данную форму вы соглашаетесь с <Link to={'/agreement'} className='privacy_text'>политикой конфиденциальности</Link></div>
        </form>
        <button className='first_container_button' onClick={()=>sendForm()}>Зарегистрироваться</button>
        <div className='first_container_bottom'>
          <p>Уже есть аккаунт?</p>
          <a href='/'>Войти</a>
        </div>
      </div>
      {
        errorHappend ? <ErrorPopUp setErrorHappend={setErrorHappend}></ErrorPopUp> : null
      }
    </div>
  );
}

export default SecondScreen;

/*

 const onSubmit = (e) => {

    const data = Object.fromEntries(new FormData(e.target))
    console.log(data)
   }

  return (
    <div className='first'>
      <div className='first_container'>
        <p className='first_container_name'>Регистрация</p>
        <form className='first_container_form' onSubmit={e => onSubmit(e)}>
            {
              Config.map((i) => (
                <input {...i}/>
              ))
            }
        </form>
        <button className='first_container_button'>Зарегистрироваться</button>
        <div className='first_container_bottom'>
          <p>Уже есть аккаунт?</p>
          <a href='/'>Войти</a>
        </div>
      </div>
    </div>



<div class="first_container_form_block" id="input1">
              <label id='nameLabel' for="name" className="first_container_form_block_label">ФИО</label>
              <input id="name" className="first_container_form_block_input" name='name' type="text" required value={formState.name} onChange={e => setFormState({...formState, [e.target.name]: e.target.value})}/>
            </div>

          

    */

    /*

     const [error, setError] =  React.useState(false)

   const checkEmail = () => {
    if(!formState.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      setError(true)
    }
    else setError(false)
   }
   const checkNumber = () => {
    if(!formState.phone.match((/\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/))){
        setError(true)
      }
      else setError(false)
   }
   const checkPassword = () => {
    if(formState.password!=duplicate){
        setError(true)
      }
      else setError(false)
   }
   const checkEmpty = () => {
    if(!formState.name||!formState.email||!formState.phone||!formState.password){
        setError(true)
      }
      else setError(false)
   }

   const sendForm = () => {
    setError(false)
    checkPassword()
    checkEmpty()
    checkEmail()
    checkNumber()
    if(!error) console.log(formState)
   }
 <div class="first_container_form_block" id="input3">
              <label id='phoneLabel' for="phone" className="first_container_form_block_label">Телефон</label>
              <input id="phone" className="first_container_form_block_input" name='phone' type="text" required value={formState.phone} onChange={e => setFormState({...formState, [e.target.name]: e.target.value})}/>
            </div>
            
    */