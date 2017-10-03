import React from 'react'
import { connect } from 'react-redux'
import { makeNewAppointment } from '../actions'
import BigCalendar from 'react-big-calendar'
import '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'

import moment from 'moment'

BigCalendar.momentLocalizer(moment);

const MyCalendar = props => (
  <div className='calendarContainer'>
    <BigCalendar
      selectable
      events={props.appointments}
      defaultView='week'
      scrollToTime={new Date(1970, 1, 1, 6)}
      onSelectEvent={event => alert(event.title)}
      onSelectSlot={(slotInfo) =>
        props.dispatch(makeNewAppointment(slotInfo.start, slotInfo.end))
      }
    />
  </div>
);

const mapStateToProps = (state) => {
  return {
    appointments: state.appointmentManager.appointments
  }
}


export default connect(mapStateToProps)(MyCalendar)
