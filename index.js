var express = require('express');
var app = express();
var port = 3000;




app.use('/static', express.static(__dirname + '/public'));//css
// mustache config
var mustache = require('mustache-express');
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// body parser config
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// logger config 
var logger = require('morgan');
app.use(logger('dev'));

// method override config 
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.render('./home');
})

var developerController = require('./controller/developer');
var projectController = require('./controller/projects');

app.use('/developer', developerController);
app.use('/projects', projectController)
// app.use('/projects', projectController);


app.listen(port, function () {
  console.log('---------------------------------------');
  console.log('Express listening on localhost:' + port);
  console.log('---------------------------------------');
})