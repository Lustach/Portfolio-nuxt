const mongoose = require('mongoose')
const projectSchema = new mongoose.Schema({
  title: String, // String is shorthand for {type: String}
  description: String,
  goal: String,
  clientOrCompany: String,
  category: {
    type: Array,
    min: 1
  },
  skillStacks: Array,
  imgList: Array,
  date: String// todo Date
})
module.exports = mongoose.model('projects', projectSchema)
