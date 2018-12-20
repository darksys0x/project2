var db      = require('../db/config');
var projects = {};


projects.getAll = function(req, res, next){
    db.manyOrNone("SELECT * FROM projects;")
    .then(function(result){
        res.locals.projects = result;
        next()
    }).catch(function(error){
        console.log(error);
        next();
    });
};


projects.find = function(req, res, next){
    db.one("SELECT * FROM projects WHERE id=$1;", [req.params.id])
    .then(function(result){
        res.locals.projects = result;
        next();
    }).catch(function(error){
        console.log(error);
        next();
    });
};

projects.update = function(req, res, next){
    db.one("UPDATE projects SET name=$1, kindOfproject=$2, detielsOfProject=$3 WHERE id=$5 RETURNING id;", 
    [req.body.name, req.body.email, req.body.kindOfproject,  req.body.detielsOfProject , req.params.id])
    .then(function(result){
        res.locals.projectsId = result.id;
        next();
    }).catch(function(error){
        console.log(error);
        next();
    });
};

projects.create = function(req, res, next){
    db.one("INSERT INTO projects(name, kindOfproject, detielsOfProject) VALUES($1, $2, $3) RETURNING id;", 
    [req.body.name, req.body.kindOfproject, req.body.detielsOfProject, req.params.id])
    .then(function(result){
        res.locals.projectsId = result.id;
        next();
    }).catch(function(error){
        console.log(error);
        next();
    });
};

projects.delete = function(req, res, next){
    db.manyOrNone("DELETE FROM projects WHERE id=$1;", [req.params.id])
    .then(function(){
        next()
    }).catch(function(error){
        console.log(error);
        next();
    });
};

projects.getDeveloper = function (req , res , next){

    console.log( req.params.id , "getting the developer ")
    db.manyOrNone(`
    SELECT devloper.name as developername , projects.name, 
    projects.id, projects.kindOfproject, 
    projects.detielsOfProject 
    from devloper, projects, project_devlopers 
    where projects.id=$1 and devloper.id = project_devlopers.devloper_Id 
    and projects.id = project_devlopers.project_Id;` , [req.params.id])
    .then(function(result){


        console.log("sjbdhasbdhbahd",result);
        res.locals.resultAll = result;

    
        // console.log(result);
        next()
    }).catch(function(error){
        console.log(error);
        next();
    });
}



module.exports = projects;