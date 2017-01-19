const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp(`postgres://${process.env.USER}@localhost:5432/todolist`)

const allProjects = 'SELECT * FROM projects'

const Projects = {
  getAll: () => {
    return db.any( allProjects )
  }
}

module.exports = Projects
