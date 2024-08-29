import './App.css';
import React from 'react';
import List from './components/List';
import PopUp from './components/PopUp';
import MessagePop from './components/MessagePop';
import CalendarComponent from './components/Calendar';
import ErrorPopUp from './components/ErrorPopUp.jsx'
import Header from './components/Header.jsx';
import Help from './components/Help.jsx';

function App() {
  const date = new Date();
  const [choosenDate, setChoosenDate] = React.useState(date)
  const [choosenTime, setChoosenTime] = React.useState()
  const [popUp, setPopUp] = React.useState(false)
  const [finished, setFinished] = React.useState(false)
  const [errorHappend, setErrorHappend] =  React.useState(false)
  const [needHelp, setNeedHelp] =  React.useState(false)
  const [eventsData, setEventsData] = React.useState([])

  React.useEffect(()=>{
    fetch('https://66c83da88a477f50dc2d454c.mockapi.io/event', {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((res) =>  res.json())
    .then((arr) => {
      setEventsData(arr)
    })
    .catch(error => {
      setErrorHappend(true)
      console.log(error)
    })
  }, [])

  return (
    <div className="app">
      <Header eventsData={eventsData}></Header>
      <div className='content'>
        <div className='info'>
          <p>Добро пожаловать в нашу систему! Здесь вы можете записаться на консультации по техническим или личным вопросам. 
            Наша система адаптирована под слабослышащих пользователей - все наши специалисты владеют жестовым языком.<button className="butt" onClick={()=>setNeedHelp(true)}>Нужна помощь?</button></p>
        </div>
        <div className='listClass'>
          <CalendarComponent eventsData={eventsData} setChoosenDate={setChoosenDate} choosenDate={choosenDate}></CalendarComponent>
          <div>
            <List eventsData={eventsData} choosenDate={choosenDate} choosenTime={choosenTime} setChoosenTime={setChoosenTime} setPopUp={setPopUp}></List>
          </div>
        </div>
        {
          console.log(choosenDate)
        }
        {
          popUp==true
          ? <PopUp setPopUp={setPopUp} setFinished={setFinished} setEventsData={setEventsData} choosenTime={choosenTime} choosenDate={choosenDate} eventsData={eventsData}></PopUp>
          : null
        }
        {
          finished==true
          ? <MessagePop setFinished={setFinished} setEventsData={setEventsData} choosenTime={choosenTime}></MessagePop>
          : null
        }
        {
           needHelp==true
           ? <Help setNeedHelp={setNeedHelp}></Help>
           : null
        }
      </div>
      {
        errorHappend ? <ErrorPopUp setErrorHappend={setErrorHappend}></ErrorPopUp> : null
      }
    </div>
  );
}

export default App;

/*
 React.useEffect(()=>{
    fetch('https://66c83da88a477f50dc2d454c.mockapi.io/event', {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((res) =>  res.json())
    .then((arr) => {
      setEventsData(arr)
    })
    .catch(error => {
      setErrorHappend(true)
      console.log(error)
    })
  }, [])

*/
