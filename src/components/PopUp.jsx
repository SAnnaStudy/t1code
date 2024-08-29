import './../styles/popUp.scss';
import React from 'react';

function PopUp(props) {

  const [personForm, setPersonForm] = React.useState({
    name: '',
    number: null,
    email: ''
  })

  const clickHande = () => {
    props.setPopUp(false)
  }
  const writePerson=(exactEvent)=>{
    exactEvent.person.name=personForm.name
    exactEvent.person.number=personForm.number
    exactEvent.person.email=personForm.email
    exactEvent.booked = true
  }
  
  const handleWritePerson = () => {
    //проверка 
    props.eventsData.map((e, i)=>(
      e.date == props.choosenDate.toLocaleDateString()
      ? e.events.map((ev, i)=>(
        ev.time == props.choosenTime
        ? writePerson(ev)
        : null
      ))
      : null
    ))
    props.setPopUp(false)
    props.setFinished(true)
  }

  return (
    <div className="containerPopUp">
      <div className="popUp">
        <div className="popUpContent">
          <div className='firstLine'>
            <p className='firstlineTitle'>Форма записи на {props.choosenDate.toLocaleDateString()} - {props.choosenTime}</p>
            <button onClick={()=>clickHande()} className='closeButton'>X</button>
          </div>
          <form className='form'>
          <div class="inputContainer" id="input0">
              <label id='themeLabel' for="theme" className="label">Выберите тему консультации</label>
              <input id="theme" className="input" type="text" required/>
            </div>
            <div class="inputContainer" id="input1">
              <label id='nameLabel' for="name" className="label">ФИО</label>
              <input id="name" className="input" type="text" required value={personForm.name} onChange={(e) => setPersonForm({...personForm, name: e.target.value})}/>
            </div>
            <div class="inputContainer" id="input2">
              <label id='phoneLabel' for="phone" className="label">Телефон</label>
              <input id="phone" type="tel" className="input" required value={personForm.number}  onChange={(e) => setPersonForm({...personForm, number: e.target.value})}/>
            </div>
            <div class="inputContainer" id="input3">
              <label id='emailLabel' for="email" className="label">Почта</label>
              <input id="email" className="input" type="text" required value={personForm.email}  onChange={(e) => setPersonForm({...personForm, email: e.target.value})}/>
            </div>
            <div class="inputContainer" id="input3">
              <label id='doctorsNameLabel' for="doctorsName" className="label">Хотите записаться к конкретному специалисту?</label>
              <input id="doctorsName" placeholder='Напишите его ФИО' className="input" type="text"/>
            </div>
          </form>
          <button onClick={handleWritePerson} className="formButton">Записаться</button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;