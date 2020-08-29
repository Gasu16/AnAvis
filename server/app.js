var createError = require('http-errors');
var express = require('express');
var path = require('path');

var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require("./routes/testAPI");
var about = require("./routes/about");
var submit = require("./routes/submit");
//var db = require("./database/databasejs");
/*
  Aggiungi una nuova pagina qui:
  var nuovaPagina = require("./percorso/nuovaPagina");
  RICORDA DI CREARE UN FILE IN FORMATO .jade PER L'INTERFACCIA UTENTE (STILE HTML)
  E ANCHE UN FILE JAVASCRIPT CHE RENDERIZZI LA PAGINA AGGIUNTA
*/
var app = express();

// view engine setup
//app.options('*', cors());
app.set('views', path.join(__dirname, 'views/'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:3000/registrarsi', credentials: true}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + "/public"));

// Aggiungi la pagina qui e specifica il percorso
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);
app.use("/about", about);
app.use("/submit", submit);
//app.use("/db", db);

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
