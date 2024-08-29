import './../styles/list.scss';

function List(props) {

  const clickHolder = (timeChosen) => {
    props.setChoosenTime(timeChosen)
    console.log(timeChosen)
    props.setPopUp(true)
  }

  return (
    <div className="list">
      <p>Свободное время</p>
        <ul className="listTimes">
            {
              props.eventsData.map((d)=>(
                d.date == props.choosenDate.toLocaleDateString()
                ? d.events.map((e,i)=>(
                  <li key={i} onClick={()=>{clickHolder(e.time)}} className={e.booked ? 'noTime' : 'time'}>{e.time}</li>
                ))
                : null
              ))
            }
        </ul>
    </div>
  );
}

export default List;
/*
  const finalItems = props.eventsData.filter(obj => {
    if(obj.date == props.choosenDate){
      obj.events.map((e, i)=>(
        e.managerType==props.choosenType
        ? true
        : null
      ))
    }
    return false
  })
  const c = props.eventsData.filter(obj => {
    if(obj.date == props.choosenDate){
      for(let i =0; i < obj.events.lenght; i++){
        if(obj.events[i].managerType==props.choosenType){
          return true
        }
      }
      return false
    }
  })

              */
