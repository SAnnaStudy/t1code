import React from 'react';
import Calendar from 'react-calendar';
import './../styles/calendar.scss';

function CalendarComponent(props) {
  const date = new Date();
  const [value, setValue] = React.useState();

  const newDisabledDates = [];
  props.eventsData.map((d,i)=>(
    d.full ? newDisabledDates.push(d.date.slice(0, 2)) : null
  ))

  const changeHandle = (e) => {
    setValue(e)
    props.setChoosenDate(e)
  }

  return (
    <div className='calendar'>
      <Calendar minDate={new Date(date)} onChange={changeHandle} value={value} tileDisabled={({date}) => newDisabledDates.includes(date.getDate().toString()) 
      || [0,6].includes(date.getDay())}/>
    </div>
  );
}

export default CalendarComponent;