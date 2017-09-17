import React from 'react'
import BigCalendar from 'react-big-calendar'
import events from '../events.js'
import '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'

import moment from 'moment'

BigCalendar.momentLocalizer(moment);

const MyCalendar = props => (
  <div className='calendarContainer'>
    <BigCalendar
      selectable
      events={events}
      startAccessor='startDate'
      endAccessor='endDate'
      defaultView='week'
      onSelectSlot={(slotInfo) => console.log(slotInfo)}
    />
  </div>
);

export default MyCalendar
