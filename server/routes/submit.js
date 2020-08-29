var express = require('express');
const app = require('../app');
//const { Database } = require('sqlite3');
//const { dab } = require('../database/databasejs');
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
