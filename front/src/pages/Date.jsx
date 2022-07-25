import React, { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

function Date () {
  const [ selectedDate, setSelectedDate] = useState(null)

 function handleSubmit(event){
event.preventDefault();
console.log(selectedDate)
  }
  return(
<div class="date">
  <DatePicker
  selected={selectedDate}
  onChange={date => setSelectedDate(date)}
  dateFormat='dd/MM/yyyy'
  placeholderText="I have been cleared!"
  onSubmit={handleSubmit}

  isClearable
    />
</div>
  )
}

export default Date;


