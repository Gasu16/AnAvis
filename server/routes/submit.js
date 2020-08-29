var express = require('express');
const app = require('../app');
<<<<<<< HEAD
//const { Database } = require('sqlite3');
//const { dab } = require('../database/databasejs');
=======
>>>>>>> 24d301aa4cae2b373168802d062278895a9e73f3
var router = express.Router();

/* GET about page. */

router.get('/', function(req, res, next) {
    res.render('submit', {title: 'Submit'}); // mostriamo la pagina submit
    //res.send("WELCOME TO BACKEND SERVER");
});

router.post('/', function(req, res, next){
    res.render('submit', {title: 'Submit'}); // mostriamo la pagina submit
});

module.exports = router;
