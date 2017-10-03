const mongoose = require('mongoose')

const CalendarSchema = mongoose.Schema({
  start: Object,
  end: Object
})

const Calendar = mongoose.model('Calendar', CalendarSchema)

module.exports = {Calendar}
