var express = require('express');
var router = express.Router();



var developer = require('../models/devlopers');
var project = require('../models/projects');

router.get('/', developer.getAll,  renderIndex);
router.get('/new', renderNew);
router.get('/:id', developer.find, renderShow);
router.post('/' ,developer.create  ,redirectShow )


router.get('/',developer.create, project.create , redirectShow);//

router.get('/:id/edit',developer.find, renderEdit);
router.put('/:id', developer.update, redirectShow);//
router.delete('/:id', developer.delete, redirectIndex);
// router.post('/', student.create, course.create, redirectShow)

function renderIndex(req, res){
  var mustacheVariables = {
    developerlist: res.locals.devlopers
  }
  //console.log(mustacheVariables)
  res.render('./devlopers/index', mustacheVariables);

// res.send("developers")
}

function renderNew(req, res){
  res.render('./devlopers/new');

}

function renderShow(req,res){
  var mustacheVariables = {
    devloperlist: res.locals.devlopers
  }
  console.log(mustacheVariables)
  res.render('./devlopers/show', mustacheVariables);
}

function redirectShow(req, res){
  res.redirect(`/developer/${res.locals.devlopersId}`)
}

function renderEdit(req, res){
  var mustacheVariables = {
      developerlist: res.locals.devlopers,
     
  };
  console.log('&&&&&&&&&');
  console.log(mustacheVariables.developerlist);
  res.render('./devlopers/edit', mustacheVariables);
};

function redirectIndex(req, res){
  res.redirect('/developer');
};


module.exports = router;