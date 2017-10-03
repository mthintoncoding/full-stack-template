const initialState = {
  appointments: []
}

const appointmentManager = (state = initialState, action) => {
  switch(action.type) {
    case 'DISPLAY_APPOINTMENTS':
      return {
        ...state,
        appointments: action.appointments
      }

      default:
        return state
  }
}

export default appointmentManager
