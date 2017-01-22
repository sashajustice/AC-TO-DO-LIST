const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp(`postgres://${process.env.USER}@localhost:5432/todolist`)


const Projects = {
  getAll: () => {
    return db.any( 'SELECT * FROM projects' )
  },
  create: (projectName, descriptionItem) => {
    return db.any('INSERT INTO projects(project_name, description) VALUES ($1, $2)', [projectName, descriptionItem])
  },
  delete: (id) => {
    return db.none('DELETE from projects WHERE id = $1', [id])
  },
  completed: (id) => {
    return db.any('UPDATE projects SET isCompleted=true WHERE id = $1', [id])
  },
  setToIncomplete: (id) => {
    return db.any('UPDATE projects SET isCompleted=false WHERE id = $1', [id])
  },
  edited: (id, project_name, description) => {
    return db.any('UPDATE projects SET project_name=$1, description=$2 WHERE id = $3', [project_name, description, id])
  }
}

module.exports = Projects
