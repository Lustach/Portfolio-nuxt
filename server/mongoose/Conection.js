const fp = require('fastify-plugin')
const mongoose = require('mongoose')
const projectSchema = require('../schema/projectSchema')
const projectList = require('../Data/projects')
// mongoose.connect('mongodb://localhost:27017/portfolio').then(r => r)
// const db = mongoose.connection

const models = { projectSchema }

// db.once('open', function () {
//   // mongoose.
//   const Projects = mongoose.model('projects', projectSchema)
//   Projects.collection.insertMany(projectList, function (err) {
//     if (err) {
//       return console.error(err)
//     } else {
//       console.log('Multiple documents inserted to Collection')
//     }
//   })
//   // project.save()
// })
// module.exports = db
// const projectSchema1 = new mongoose.Schema({
//   title: String, // String is shorthand for {type: String}
//   description: String,
//   goal: String,
//   clientOrCompany: String,
//   category: {
//     type: Array,
//     min: 1
//   },
//   skillStacks: Array,
//   imgList: Array,
//   date: String// todo Date
// })
const ConnectDB = async (fastify, options) => {
  try {
    mongoose.connection.once('connected', () => {
      fastify.log.info({ actor: 'MongoDB' }, 'connected')
      // console.log(mongoose.models.projects)
      // const Projects = mongoose.model('projects')
      projectSchema.collection.insertMany(projectList, function (err) {
        if (err) {
          return console.error(err)
        } else {
          console.log('Multiple documents inserted to Collection')
        }
      })
    })
    mongoose.connection.once('disconnected', () => {
      fastify.log.error({ actor: 'MongoDB' }, 'disconnected')
    })
    const db = await mongoose.connect(options.uri)
    console.log(options.uri)
    // decorates fastify with our model
    fastify.decorate('db', { models })
  } catch (e) {
    console.error(e)
  }
}
module.exports = fp(ConnectDB)
