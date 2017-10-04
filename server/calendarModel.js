const mongoose = require('mongoose')

const CalendarSchema = mongoose.Schema({
  start: Object,
  end: Object,
  name: String
})

const Calendar = mongoose.model('Calendar', CalendarSchema)

module.exports = {Calendar}
