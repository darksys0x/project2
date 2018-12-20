var db      = require('../db/config');
var devlopers = {};


devlopers.getAll = function(req, res, next){
    console.log("getting all developers")
    db.manyOrNone("SELECT * FROM devloper;")
    .then(function(result){
    console.log(result)

        res.locals.devlopers = result;
        next()
    }).catch(function(error){
        console.log(error);
        next();
    });
};


devlopers.find = function(req, res, next){
    db.one("SELECT * FROM devloper WHERE id=$1;", [req.params.id])
    .then(function(result){
        res.locals.devlopers = result;
        next();
    }).catch(function(error){
        console.log(error);
        next();
    });
};

devlopers.update = function(req, res, next){
    console.log('DEVELOPER.UPDATE REQ.BODY:')
    console.log(req.body);
    console.log(Number(req.body.no_project));

    console.log('DEVELOPER.UPDATE REQ.PARAMS:');
    console.log(req.params);

    db.one("UPDATE devloper SET name=$1, specialist=$2, email=$3, picture=$4, no_project=$5 WHERE id=$6 RETURNING id;", 
    [req.body.name, req.body.specialist, req.body.email, req.body.picture, Number(req.body.no_project), req.params.id])
    .then(function(result){
        console.log('%%%%%%%%%%')
        res.locals.devlopersId = result.id;
        next();
    }).catch(function(error){
        console.log(error);
        next();
    });
};

devlopers.create = function(req, res, next){
    db.one("INSERT INTO devloper(name, specialist, email, picture) VALUES($1, $2, $3, $4) RETURNING id;", 
    [req.body.name,req.body.specialist ,req.body.email, req.body.picture ])
    .then(function(result){
        res.locals.devlopersId = result.id;
        next();
    }).catch(function(error){
        console.log(error);
        next();
    });
};

devlopers.delete = function(req, res, next){
    db.manyOrNone("DELETE FROM devloper WHERE id=$1;", [req.params.id])
    .then(function(){
        next()
    }).catch(function(error){
        console.log(error);
        next();
    });
};

devlopers.findByProjecr = function(req, res, next){
    db.manyOrNone("select devloper.name from devloper , projects,project_devlopers where devlper.id = project_devlopers.devlper.id AND projects.id = project_devlopers.projects.id and projects.id = $1; ", [req.params.id])
    .then(function(result){
        res.locals.devlopers = result;
        next();
    }).catch(function(error){
        console.log(error);
        next();
    });
};

// "SELECT * FROM devloper WHERE id=$1;"

module.exports = devlopers;