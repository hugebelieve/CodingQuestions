var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //use for basic
app.use(express.static(path.join(__dirname, 'dist'))); //use for new build webpack
app.use("/react", express.static(path.join(__dirname, 'dist')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//Problems DA
app.use("/allUrl", (request,response)=>{
  response.send(require("./DataStructure/url"));
});

// Problem Algo
app.use("/allUrlAlgo", (request,response)=>{
  response.send(require("./Algo/url"));
});

app.use("/submitAlgo", (request,response)=>{
  let userData = request.body;
  let filePath = require("./DataStructure/"+userData.path);
  let result = filePath.runAlgo(JSON.parse(userData.argsJson==""?"{}":userData.argsJson));
  if(typeof(result)=="number"){
    response.send(""+result);
  }else{
    response.send(result);
  }
});

app.use("/runAlgo", (request,response)=>{
  let userData = request.body;
  let filePath = require("./Algo/"+userData.path);
  let result = filePath.runAlgo(JSON.parse(userData.argsJson==""?"{}":userData.argsJson));
  if(typeof(result)=="number"){
    response.send(""+result);
  } if(typeof(result)=="string"){
    response.send(result.replace(/\n/g, "<br>"));
  } else{
    response.send(result);
  }
});

app.use("/react", express.static(path.join(__dirname, 'dist')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
