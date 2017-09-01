const mongoose = require('mongoose')

const CalendarSchema = mongoose.Schema({
  startTime: String,
  endTime: String,
  date: String,
  firstName: String,
  lastName: String
})

const Calendar = mongoose.model('Calendar', CalendarSchema)

module.exports = {Calendar}
