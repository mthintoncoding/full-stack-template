import React from 'react'
import BigCalendar from 'react-big-calendar'

import moment from 'moment'

BigCalendar.momentLocalizer(moment);

const MyCalendar = props => (
  <div>
    <BigCalendar
      events={[{surfing: 'Hawaii'}]}
      startAccessor='startDate'
      endAccessor='endDate'
    />
  </div>
);

export default MyCalendar
