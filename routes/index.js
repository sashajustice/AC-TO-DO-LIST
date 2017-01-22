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

router.post('/insert-project', function(req, res, next) {
  Projects.create(req.body.projectN, req.body.descrip).then(function(result) {
    res.redirect('/');
  })
})

router.post('/deleteTask/:id', function(req, res, next) {
  Projects.delete(req.params.id).then(function() {
    res.redirect('/');
  })
})

router.post('/isCompleted/:id', function(req, res, next) {
  Projects.completed(req.params.id).then(function() {
    res.redirect('/');
  })
})

router.post('/edit-project', function(req, res, next) {
  Projects.edited(req.body.id, req.body.projectN, req.body.descrip).then(function() {
    res.redirect('/');
  }).catch(function (error) {
        console.log(error)
    })
})


module.exports = router;
