const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp(`postgres://${process.env.USER}@localhost:5432/todolist`)


const Projects = {
  getAll: () => {
    return db.any( 'SELECT * FROM projects' )
  },
  create: (projectName, descriptionItem) => {
    return db.any('INSERT INTO projects(project_name, description) VALUES ($1, $2)', [projectName, descriptionItem])
  }
}

module.exports = Projects
