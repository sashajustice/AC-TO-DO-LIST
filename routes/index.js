var express = require('express');
var router = express.Router();
var Projects = require('../database/db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  Projects.getAll().then(function(projects) {
    res.render('index', {
      title: 'Todo List',
      projects: projects })
  })
})


module.exports = router;
