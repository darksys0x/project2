var express = require('express');
var router = express.Router();

var developer = require('../models/devlopers');
var project = require('../models/projects');

router.get('/', project.getAll,  renderIndex);
router.get('/:id', project.find, project.getDeveloper,  renderShow);

function renderIndex(req, res){
  var mustacheVariables = {
    projectlist: res.locals.projects 
  }
  //console.log(mustacheVariables)
  res.render('./project/index', mustacheVariables);

// res.send("developers")
}

function renderShow(req,res){
  var mustacheVariables = {
    projectlist: res.locals.projects ,
    resultAll: res.locals.resultAll
  }

  console.log("\n\n\n\n mustacheVariables")
  console.log(mustacheVariables)
  res.render('./project/show', mustacheVariables);
}

module.exports = router;